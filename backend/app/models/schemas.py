from pydantic import BaseModel
from typing import List, Optional, Dict, Any
from datetime import datetime

class ResumeUpload(BaseModel):
    filename: str
    content_type: str

class ResumeData(BaseModel):
    filename: str
    raw_text: str
    skills: List[str]
    experience: List[str]
    education: List[str]
    contact_info: Dict[str, Any]
    summary: str

class JobPosting(BaseModel):
    id: int
    title: str
    company: str
    location: str
    description: str
    requirements: List[str]
    salary_range: str
    remote: bool

class JobMatch(BaseModel):
    job: JobPosting
    match_score: float
    matching_skills: List[str]
    missing_skills: List[str]
    explanation: str

class MatchResult(BaseModel):
    resume_id: str
    matches: List[JobMatch]
    top_skills: List[str]
    skill_frequency: Dict[str, int]
    recommendations: List[str]

class SkillAnalysis(BaseModel):
    skill: str
    frequency: int
    relevance_score: float
    job_demand: int

class ResumeAnalysis(BaseModel):
    resume_data: ResumeData
    skill_analysis: List[SkillAnalysis]
    career_level: str
    suggested_roles: List[str]
    improvement_suggestions: List[str]
