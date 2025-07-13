# Development Guide

## Quick Start for Development

### Option 1: Using VS Code Tasks
1. Open the project in VS Code
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
3. Type "Tasks: Run Task"
4. Run tasks in this order:
   - "Setup Backend" 
   - "Install Backend Dependencies"
   - "Download spaCy Model"
   - "Install Frontend Dependencies"
   - "Start Backend Server"
   - "Start Frontend Server"

### Option 2: Using Command Line

#### Backend Setup
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # macOS/Linux
pip install -r requirements.txt
python -m spacy download en_core_web_sm
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

#### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Option 3: Using Startup Scripts
- **Windows**: Double-click `start.bat`
- **macOS/Linux**: Run `./start.sh`

## Testing the Application

1. Open http://localhost:3000 in your browser
2. Upload a sample resume (see `docs/sample-resume.txt`)
3. View the job matches and skills analysis
4. Check the API documentation at http://localhost:8000/docs

## Development Tips

- Backend runs on port 8000
- Frontend runs on port 3000
- Hot reload is enabled for both servers
- Check console for errors and logs
- Use the API docs for testing endpoints directly

## Common Issues

### Backend Issues
- **spaCy model not found**: Run `python -m spacy download en_core_web_sm`
- **Port 8000 in use**: Change port in `backend/app/main.py`
- **Import errors**: Make sure virtual environment is activated

### Frontend Issues
- **npm install fails**: Try deleting `node_modules` and `package-lock.json`, then run `npm install`
- **Port 3000 in use**: Next.js will automatically use the next available port
- **TypeScript errors**: Check component imports and types

## API Testing

Use the sample requests in the API documentation:

1. **Upload Resume**:
   ```bash
   curl -X POST "http://localhost:8000/api/v1/upload-resume" \
        -H "accept: application/json" \
        -H "Content-Type: multipart/form-data" \
        -F "file=@sample-resume.pdf"
   ```

2. **Get Job Matches**:
   ```bash
   curl -X POST "http://localhost:8000/api/v1/match-jobs/{resume_id}" \
        -H "accept: application/json"
   ```

## Code Structure

### Backend
- `app/main.py` - FastAPI application entry point
- `app/config.py` - Configuration settings
- `app/api/routes.py` - API endpoints
- `app/models/schemas.py` - Pydantic data models
- `app/services/resume_parser.py` - Resume parsing logic
- `app/services/job_matcher.py` - Job matching algorithms

### Frontend
- `src/app/page.tsx` - Main application page
- `src/components/` - React components
- `src/app/globals.css` - Global styles
- `tailwind.config.ts` - Tailwind CSS configuration
