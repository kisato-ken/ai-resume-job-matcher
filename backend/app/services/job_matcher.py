from typing import List, Dict, Any
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
from ..models.schemas import JobPosting, JobMatch, ResumeData
from ..config import settings

class JobMatcher:
    def __init__(self):
        self.vectorizer = TfidfVectorizer(
            stop_words='english',
            ngram_range=(1, 2),
            max_features=5000
        )
        self.job_postings = [JobPosting(**job) for job in settings.SAMPLE_JOBS]
        
    def calculate_skill_match(self, resume_skills: List[str], job_requirements: List[str]) -> tuple:
        """Calculate skill matching between resume and job requirements"""
        resume_skills_lower = [skill.lower() for skill in resume_skills]
        job_requirements_lower = [req.lower() for req in job_requirements]
        
        matching_skills = []
        missing_skills = []
        
        for req in job_requirements_lower:
            # Check for exact matches or partial matches
            found = False
            for skill in resume_skills_lower:
                if req in skill or skill in req or req == skill:
                    matching_skills.append(req)
                    found = True
                    break
            
            if not found:
                missing_skills.append(req)
        
        # Remove duplicates
        matching_skills = list(set(matching_skills))
        missing_skills = list(set(missing_skills))
        
        return matching_skills, missing_skills
    
    def calculate_text_similarity(self, resume_text: str, job_text: str) -> float:
        """Calculate text similarity using TF-IDF and cosine similarity"""
        try:
            documents = [resume_text, job_text]
            tfidf_matrix = self.vectorizer.fit_transform(documents)
            similarity = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:2])[0][0]
            return float(similarity)
        except:
            return 0.0
    
    def calculate_match_score(self, resume_data: ResumeData, job: JobPosting) -> float:
        """Calculate overall match score between resume and job"""
        # Skill matching component (60% weight)
        matching_skills, missing_skills = self.calculate_skill_match(
            resume_data.skills, job.requirements
        )
        skill_match_ratio = len(matching_skills) / len(job.requirements) if job.requirements else 0
        
        # Text similarity component (30% weight)
        resume_text = f"{resume_data.summary} {' '.join(resume_data.skills)} {' '.join(resume_data.experience)}"
        job_text = f"{job.title} {job.description} {' '.join(job.requirements)}"
        text_similarity = self.calculate_text_similarity(resume_text, job_text)
        
        # Experience relevance component (10% weight)
        experience_score = self.calculate_experience_relevance(resume_data.experience, job.title)
        
        # Weighted final score
        final_score = (
            skill_match_ratio * 0.6 +
            text_similarity * 0.3 +
            experience_score * 0.1
        )
        
        return min(final_score, 1.0)  # Cap at 1.0
    
    def calculate_experience_relevance(self, resume_experience: List[str], job_title: str) -> float:
        """Calculate how relevant the resume experience is to the job title"""
        if not resume_experience:
            return 0.0
        
        job_title_lower = job_title.lower()
        experience_text = ' '.join(resume_experience).lower()
        
        # Simple keyword matching for experience relevance
        relevance_keywords = [
            'senior', 'lead', 'principal', 'manager', 'director',
            'engineer', 'developer', 'scientist', 'analyst', 'designer'
        ]
        
        matches = sum(1 for keyword in relevance_keywords if keyword in experience_text)
        return min(matches / len(relevance_keywords), 1.0)
    
    def generate_match_explanation(self, resume_data: ResumeData, job: JobPosting, 
                                 match_score: float, matching_skills: List[str], 
                                 missing_skills: List[str]) -> str:
        """Generate an explanation for the job match"""
        explanations = []
        
        if match_score >= 0.8:
            explanations.append("🎯 Excellent match!")
        elif match_score >= 0.6:
            explanations.append("✅ Good match!")
        elif match_score >= 0.4:
            explanations.append("⚠️ Moderate match")
        else:
            explanations.append("❌ Low match")
        
        if matching_skills:
            explanations.append(f"You have {len(matching_skills)} matching skills: {', '.join(matching_skills[:3])}{'...' if len(matching_skills) > 3 else ''}")
        
        if missing_skills:
            explanations.append(f"Consider developing: {', '.join(missing_skills[:3])}{'...' if len(missing_skills) > 3 else ''}")
        
        return ' '.join(explanations)
    
    def find_job_matches(self, resume_data: ResumeData, top_k: int = 5) -> List[JobMatch]:
        """Find the best job matches for a given resume"""
        matches = []
        
        for job in self.job_postings:
            # Calculate match score
            match_score = self.calculate_match_score(resume_data, job)
            
            # Get matching and missing skills
            matching_skills, missing_skills = self.calculate_skill_match(
                resume_data.skills, job.requirements
            )
            
            # Generate explanation
            explanation = self.generate_match_explanation(
                resume_data, job, match_score, matching_skills, missing_skills
            )
            
            # Create job match object
            job_match = JobMatch(
                job=job,
                match_score=match_score,
                matching_skills=matching_skills,
                missing_skills=missing_skills,
                explanation=explanation
            )
            
            matches.append(job_match)
        
        # Sort by match score and return top k
        matches.sort(key=lambda x: x.match_score, reverse=True)
        return matches[:top_k]
    
    def get_skill_frequency_analysis(self, resume_skills: List[str]) -> Dict[str, int]:
        """Analyze skill frequency across all job postings"""
        skill_demand = {}
        
        for job in self.job_postings:
            for requirement in job.requirements:
                req_lower = requirement.lower()
                skill_demand[req_lower] = skill_demand.get(req_lower, 0) + 1
        
        # Map resume skills to job market demand
        resume_skill_demand = {}
        for skill in resume_skills:
            skill_lower = skill.lower()
            demand = 0
            for job_skill, count in skill_demand.items():
                if skill_lower in job_skill or job_skill in skill_lower:
                    demand = max(demand, count)
            resume_skill_demand[skill] = demand
        
        return resume_skill_demand
    
    def generate_recommendations(self, resume_data: ResumeData, matches: List[JobMatch]) -> List[str]:
        """Generate career recommendations based on job matches"""
        recommendations = []
        
        # Analyze missing skills across top matches
        all_missing_skills = []
        for match in matches[:3]:  # Top 3 matches
            all_missing_skills.extend(match.missing_skills)
        
        # Count frequency of missing skills
        missing_skill_counts = {}
        for skill in all_missing_skills:
            missing_skill_counts[skill] = missing_skill_counts.get(skill, 0) + 1
        
        # Recommend most frequently missing skills
        if missing_skill_counts:
            top_missing = sorted(missing_skill_counts.items(), key=lambda x: x[1], reverse=True)[:3]
            for skill, count in top_missing:
                recommendations.append(f"Consider learning {skill} - appears in {count} of your top job matches")
        
        # General recommendations based on match scores
        avg_score = sum(match.match_score for match in matches) / len(matches) if matches else 0
        
        if avg_score < 0.5:
            recommendations.append("Consider expanding your skill set to improve job match scores")
        elif avg_score > 0.8:
            recommendations.append("Great profile! You're well-qualified for multiple positions")
        
        # Industry-specific recommendations
        job_titles = [match.job.title.lower() for match in matches[:3]]
        if any('data' in title for title in job_titles):
            recommendations.append("Consider highlighting data analysis and visualization skills")
        if any('senior' in title for title in job_titles):
            recommendations.append("Emphasize leadership and mentoring experience")
        
        return recommendations[:5]  # Limit to 5 recommendations
