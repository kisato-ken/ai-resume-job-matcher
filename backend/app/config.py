import os
from typing import Optional

class Settings:
    # API Settings
    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "AI Resume Job Matcher"
    
    # CORS Settings
    BACKEND_CORS_ORIGINS: list = [
        "http://localhost:3000",
        "http://localhost:8000",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:8000",
    ]
    
    # File Upload Settings
    MAX_FILE_SIZE: int = 10 * 1024 * 1024  # 10MB
    ALLOWED_EXTENSIONS: set = {".pdf", ".docx", ".txt"}
    UPLOAD_DIR: str = "uploads"
    
    # AI Model Settings
    HUGGINGFACE_MODEL: str = "sentence-transformers/all-MiniLM-L6-v2"
    SPACY_MODEL: str = "en_core_web_sm"
    
    # Job Database (in a real app, this would be from a database)
    SAMPLE_JOBS: list = [
        {
            "id": 1,
            "title": "Senior Software Engineer",
            "company": "TechCorp Inc.",
            "location": "San Francisco, CA",
            "description": "We are seeking a Senior Software Engineer with experience in Python, React, and cloud technologies. The ideal candidate will have 5+ years of experience in full-stack development.",
            "requirements": ["Python", "React", "JavaScript", "AWS", "Docker", "REST APIs", "Git", "Agile"],
            "salary_range": "$120,000 - $180,000",
            "remote": True
        },
        {
            "id": 2,
            "title": "Data Scientist",
            "company": "DataFlow Analytics",
            "location": "New York, NY",
            "description": "Join our data science team to build machine learning models and extract insights from large datasets. Experience with Python, ML frameworks, and statistical analysis required.",
            "requirements": ["Python", "Machine Learning", "TensorFlow", "Pandas", "SQL", "Statistics", "R", "Jupyter"],
            "salary_range": "$100,000 - $150,000",
            "remote": False
        },
        {
            "id": 3,
            "title": "Frontend Developer",
            "company": "Creative Studios",
            "location": "Austin, TX",
            "description": "We're looking for a creative Frontend Developer to join our team. You'll work on building beautiful, responsive web applications using modern frameworks.",
            "requirements": ["JavaScript", "React", "TypeScript", "CSS", "HTML", "Tailwind CSS", "Next.js", "Git"],
            "salary_range": "$80,000 - $120,000",
            "remote": True
        },
        {
            "id": 4,
            "title": "DevOps Engineer",
            "company": "CloudScale Systems",
            "location": "Seattle, WA",
            "description": "Seeking a DevOps Engineer to manage our cloud infrastructure and CI/CD pipelines. Experience with Kubernetes, Docker, and cloud platforms required.",
            "requirements": ["Docker", "Kubernetes", "AWS", "Jenkins", "Terraform", "Linux", "Python", "Monitoring"],
            "salary_range": "$110,000 - $160,000",
            "remote": True
        },
        {
            "id": 5,
            "title": "Product Manager",
            "company": "InnovateTech",
            "location": "Chicago, IL",
            "description": "Lead product strategy and development for our SaaS platform. Work closely with engineering and design teams to deliver exceptional user experiences.",
            "requirements": ["Product Management", "Agile", "SQL", "Analytics", "User Research", "A/B Testing", "Roadmapping"],
            "salary_range": "$90,000 - $140,000",
            "remote": False
        }
    ]

settings = Settings()
