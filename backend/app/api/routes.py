from fastapi import APIRouter, UploadFile, File, HTTPException, Depends
from typing import List
import uuid
import os
from ..services import ResumeParser, JobMatcher
from ..models.schemas import ResumeData, MatchResult, JobPosting
from ..config import settings

router = APIRouter()
resume_parser = ResumeParser()
job_matcher = JobMatcher()

# In-memory storage (in production, use a database)
stored_resumes = {}

@router.post("/upload-resume", response_model=dict)
async def upload_resume(file: UploadFile = File(...)):
    """Upload and parse a resume file"""
    
    # Validate file type
    if not file.filename:
        raise HTTPException(status_code=400, detail="No file provided")
    
    file_extension = f".{file.filename.split('.')[-1].lower()}"
    if file_extension not in settings.ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=400, 
            detail=f"File type not supported. Allowed types: {', '.join(settings.ALLOWED_EXTENSIONS)}"
        )
    
    # Check file size
    file_content = await file.read()
    if len(file_content) > settings.MAX_FILE_SIZE:
        raise HTTPException(
            status_code=400, 
            detail=f"File too large. Maximum size: {settings.MAX_FILE_SIZE / 1024 / 1024}MB"
        )
    
    try:
        # Parse resume
        parsed_data = resume_parser.parse_resume(file_content, file.filename)
        
        # Generate unique ID for this resume
        resume_id = str(uuid.uuid4())
        
        # Store parsed resume data
        resume_data = ResumeData(**parsed_data)
        stored_resumes[resume_id] = resume_data
        
        return {
            "resume_id": resume_id,
            "message": "Resume uploaded and parsed successfully",
            "filename": file.filename,
            "skills_found": len(resume_data.skills),
            "skills": resume_data.skills[:10],  # Show first 10 skills
            "summary": resume_data.summary
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing resume: {str(e)}")

@router.get("/resume/{resume_id}", response_model=ResumeData)
async def get_resume(resume_id: str):
    """Get parsed resume data by ID"""
    if resume_id not in stored_resumes:
        raise HTTPException(status_code=404, detail="Resume not found")
    
    return stored_resumes[resume_id]

@router.post("/match-jobs/{resume_id}", response_model=MatchResult)
async def match_jobs(resume_id: str, top_k: int = 5):
    """Find job matches for a specific resume"""
    if resume_id not in stored_resumes:
        raise HTTPException(status_code=404, detail="Resume not found")
    
    resume_data = stored_resumes[resume_id]
    
    try:
        # Find job matches
        matches = job_matcher.find_job_matches(resume_data, top_k)
        
        # Get skill frequency analysis
        skill_frequency = job_matcher.get_skill_frequency_analysis(resume_data.skills)
        
        # Generate recommendations
        recommendations = job_matcher.generate_recommendations(resume_data, matches)
        
        # Get top skills (most in-demand from resume)
        top_skills = sorted(skill_frequency.items(), key=lambda x: x[1], reverse=True)[:10]
        top_skills_list = [skill for skill, _ in top_skills]
        
        return MatchResult(
            resume_id=resume_id,
            matches=matches,
            top_skills=top_skills_list,
            skill_frequency=skill_frequency,
            recommendations=recommendations
        )
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error matching jobs: {str(e)}")

@router.get("/jobs", response_model=List[JobPosting])
async def get_all_jobs():
    """Get all available job postings"""
    return job_matcher.job_postings

@router.get("/jobs/{job_id}", response_model=JobPosting)
async def get_job(job_id: int):
    """Get a specific job posting by ID"""
    job = next((job for job in job_matcher.job_postings if job.id == job_id), None)
    if not job:
        raise HTTPException(status_code=404, detail="Job not found")
    return job

@router.delete("/resume/{resume_id}")
async def delete_resume(resume_id: str):
    """Delete a stored resume"""
    if resume_id not in stored_resumes:
        raise HTTPException(status_code=404, detail="Resume not found")
    
    del stored_resumes[resume_id]
    return {"message": "Resume deleted successfully"}

@router.get("/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "service": "AI Resume Job Matcher",
        "stored_resumes": len(stored_resumes),
        "available_jobs": len(job_matcher.job_postings)
    }
