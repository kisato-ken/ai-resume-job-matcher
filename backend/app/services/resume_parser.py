import spacy
import re
from typing import List, Dict, Any
import pdfplumber
from docx import Document
from io import BytesIO

class ResumeParser:
    def __init__(self):
        try:
            self.nlp = spacy.load("en_core_web_sm")
        except OSError:
            # Fallback if spacy model is not installed
            self.nlp = None
            
        self.skill_patterns = [
            # Programming languages
            r'\b(?:python|javascript|java|c\+\+|c#|php|ruby|go|rust|swift|kotlin|scala|r|matlab)\b',
            # Web technologies
            r'\b(?:html|css|react|angular|vue|node\.?js|express|django|flask|spring|laravel)\b',
            # Databases
            r'\b(?:sql|mysql|postgresql|mongodb|redis|elasticsearch|oracle|sqlite)\b',
            # Cloud & DevOps
            r'\b(?:aws|azure|gcp|docker|kubernetes|jenkins|terraform|ansible|git|linux)\b',
            # Data Science & ML
            r'\b(?:machine learning|ml|ai|tensorflow|pytorch|pandas|numpy|scikit-learn|jupyter)\b',
            # Project Management
            r'\b(?:agile|scrum|kanban|jira|confluence|project management)\b',
            # Tools & Frameworks
            r'\b(?:tailwind|bootstrap|sass|webpack|babel|npm|yarn|maven|gradle)\b'
        ]
        
    def extract_text_from_pdf(self, file_content: bytes) -> str:
        """Extract text from PDF file"""
        try:
            with pdfplumber.open(BytesIO(file_content)) as pdf:
                text = ""
                for page in pdf.pages:
                    text += page.extract_text() or ""
                return text
        except Exception as e:
            raise Exception(f"Error parsing PDF: {str(e)}")
    
    def extract_text_from_docx(self, file_content: bytes) -> str:
        """Extract text from DOCX file"""
        try:
            doc = Document(BytesIO(file_content))
            text = ""
            for paragraph in doc.paragraphs:
                text += paragraph.text + "\n"
            return text
        except Exception as e:
            raise Exception(f"Error parsing DOCX: {str(e)}")
    
    def extract_text_from_txt(self, file_content: bytes) -> str:
        """Extract text from TXT file"""
        try:
            return file_content.decode('utf-8')
        except UnicodeDecodeError:
            return file_content.decode('latin-1')
    
    def extract_text(self, file_content: bytes, filename: str) -> str:
        """Extract text from uploaded file based on extension"""
        extension = filename.lower().split('.')[-1]
        
        if extension == 'pdf':
            return self.extract_text_from_pdf(file_content)
        elif extension == 'docx':
            return self.extract_text_from_docx(file_content)
        elif extension == 'txt':
            return self.extract_text_from_txt(file_content)
        else:
            raise Exception(f"Unsupported file type: {extension}")
    
    def extract_skills(self, text: str) -> List[str]:
        """Extract skills from resume text using pattern matching"""
        skills = set()
        text_lower = text.lower()
        
        # Use regex patterns to find skills
        for pattern in self.skill_patterns:
            matches = re.findall(pattern, text_lower, re.IGNORECASE)
            skills.update(matches)
        
        # Additional manual skill extraction
        skill_keywords = [
            'python', 'javascript', 'react', 'node.js', 'sql', 'aws', 'docker',
            'kubernetes', 'git', 'agile', 'machine learning', 'data analysis',
            'project management', 'leadership', 'communication', 'problem solving',
            'teamwork', 'html', 'css', 'java', 'c++', 'c#', 'php', 'ruby',
            'angular', 'vue.js', 'express', 'django', 'flask', 'mongodb',
            'postgresql', 'mysql', 'redis', 'tensorflow', 'pytorch', 'pandas',
            'numpy', 'jupyter', 'tableau', 'power bi', 'excel', 'jira',
            'confluence', 'slack', 'trello', 'figma', 'photoshop', 'illustrator'
        ]
        
        for skill in skill_keywords:
            if skill.lower() in text_lower:
                skills.add(skill.lower())
        
        return list(skills)
    
    def extract_experience(self, text: str) -> List[str]:
        """Extract work experience from resume text"""
        experience = []
        
        # Look for common job title patterns
        job_patterns = [
            r'(?:senior|junior|lead|principal)?\s*(?:software|web|mobile)?\s*(?:engineer|developer|programmer)',
            r'(?:data|business|product|project)\s*(?:scientist|analyst|manager)',
            r'(?:frontend|backend|fullstack|full stack)\s*(?:engineer|developer)',
            r'(?:devops|cloud|systems)\s*(?:engineer|architect|administrator)',
            r'(?:ui|ux|product)\s*designer',
            r'(?:marketing|sales|business development)\s*(?:manager|specialist|representative)',
        ]
        
        for pattern in job_patterns:
            matches = re.findall(pattern, text, re.IGNORECASE)
            experience.extend(matches)
        
        # Extract years of experience
        exp_pattern = r'(\d+)(?:\+)?\s*(?:years?|yrs?)\s*(?:of\s*)?(?:experience|exp)'
        exp_matches = re.findall(exp_pattern, text, re.IGNORECASE)
        if exp_matches:
            experience.append(f"{max(exp_matches)} years of experience")
        
        return list(set(experience))
    
    def extract_education(self, text: str) -> List[str]:
        """Extract education information from resume text"""
        education = []
        
        # Degree patterns
        degree_patterns = [
            r'(?:bachelor|master|phd|doctorate|associate)(?:\'s)?\s*(?:of\s*)?(?:science|arts|engineering|business|computer science|information technology)',
            r'(?:b\.?s\.?|m\.?s\.?|m\.?b\.?a\.?|ph\.?d\.?|b\.?a\.?)',
            r'(?:computer science|information technology|software engineering|electrical engineering|mechanical engineering|business administration)'
        ]
        
        for pattern in degree_patterns:
            matches = re.findall(pattern, text, re.IGNORECASE)
            education.extend(matches)
        
        return list(set(education))
    
    def extract_contact_info(self, text: str) -> Dict[str, Any]:
        """Extract contact information from resume text"""
        contact = {}
        
        # Email pattern
        email_pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
        emails = re.findall(email_pattern, text)
        if emails:
            contact['email'] = emails[0]
        
        # Phone pattern
        phone_pattern = r'(?:\+?1[-.\s]?)?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})'
        phones = re.findall(phone_pattern, text)
        if phones:
            contact['phone'] = f"({phones[0][0]}) {phones[0][1]}-{phones[0][2]}"
        
        # LinkedIn pattern
        linkedin_pattern = r'linkedin\.com/in/([a-zA-Z0-9-]+)'
        linkedin = re.findall(linkedin_pattern, text, re.IGNORECASE)
        if linkedin:
            contact['linkedin'] = f"linkedin.com/in/{linkedin[0]}"
        
        # GitHub pattern
        github_pattern = r'github\.com/([a-zA-Z0-9-]+)'
        github = re.findall(github_pattern, text, re.IGNORECASE)
        if github:
            contact['github'] = f"github.com/{github[0]}"
        
        return contact
    
    def generate_summary(self, text: str, skills: List[str], experience: List[str]) -> str:
        """Generate a brief summary of the resume"""
        skill_count = len(skills)
        top_skills = skills[:5] if skills else []
        
        if experience:
            exp_info = experience[0]
        else:
            exp_info = "Professional"
        
        summary = f"{exp_info} with {skill_count} identified technical skills"
        if top_skills:
            summary += f", including {', '.join(top_skills[:3])}"
        
        return summary
    
    def parse_resume(self, file_content: bytes, filename: str) -> Dict[str, Any]:
        """Main method to parse resume and extract all information"""
        try:
            # Extract text
            raw_text = self.extract_text(file_content, filename)
            
            # Extract components
            skills = self.extract_skills(raw_text)
            experience = self.extract_experience(raw_text)
            education = self.extract_education(raw_text)
            contact_info = self.extract_contact_info(raw_text)
            summary = self.generate_summary(raw_text, skills, experience)
            
            return {
                "filename": filename,
                "raw_text": raw_text,
                "skills": skills,
                "experience": experience,
                "education": education,
                "contact_info": contact_info,
                "summary": summary
            }
            
        except Exception as e:
            raise Exception(f"Error parsing resume: {str(e)}")
