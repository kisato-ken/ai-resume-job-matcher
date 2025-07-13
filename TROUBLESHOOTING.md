# Backend Troubleshooting Guide

## Issue: Backend Not Starting

The main issue you're experiencing is likely related to PowerShell execution policies on Windows. Here are several solutions:

## Solution 1: Use the Simple Startup Scripts (Recommended)

I've created simplified startup scripts that bypass PowerShell restrictions:

### Start Backend Only:
```bash
# Double-click this file or run in terminal:
run-backend-simple.bat
```

### Start Frontend Only:
```bash
# Double-click this file or run in terminal:
start-frontend.bat
```

## Solution 2: Manual Startup (Most Reliable)

### Backend:
1. Open Command Prompt (not PowerShell)
2. Navigate to the project:
   ```cmd
   cd D:\ai-resume-job-matcher\backend
   ```
3. Run the server:
   ```cmd
   venv\Scripts\uvicorn.exe app.main:app --reload --host 0.0.0.0 --port 8000
   ```

### Frontend:
1. Open another Command Prompt
2. Navigate to frontend:
   ```cmd
   cd D:\ai-resume-job-matcher\frontend
   ```
3. Install dependencies (first time only):
   ```cmd
   npm install
   ```
4. Start the server:
   ```cmd
   npm run dev
   ```

## Solution 3: Fix PowerShell Execution Policy

If you want to use PowerShell, you need to change the execution policy:

1. **Open PowerShell as Administrator**
2. **Run this command:**
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
3. **Confirm with 'Y' when prompted**
4. **Now you can use the original start.bat file**

## Solution 4: Use VS Code Tasks

1. **Open the project in VS Code**
2. **Press `Ctrl+Shift+P`**
3. **Type "Tasks: Run Task"**
4. **Select "Start Backend Server"**
5. **In another terminal, select "Start Frontend Server"**

## Verification Steps

Once the backend starts successfully, you should see:
```
INFO:     Will watch for changes in these directories: ['D:\\ai-resume-job-matcher\\backend']
INFO:     Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
INFO:     Started reloader process [XXXX] using WatchFiles
INFO:     Started server process [YYYY]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```

## Testing the Backend

1. **Open your browser and go to:**
   - Main API: http://localhost:8000
   - API Documentation: http://localhost:8000/docs
   - Alternative docs: http://localhost:8000/redoc

2. **Test with the health endpoint:**
   ```
   http://localhost:8000/api/v1/health
   ```

## Common Error Solutions

### Error: "Cannot find module 'app.main'"
- Make sure you're in the `backend` directory
- Check that `app/__init__.py` exists
- Verify the virtual environment is properly activated

### Error: "spacy model not found"
- Run: `venv\Scripts\python.exe -m spacy download en_core_web_sm`

### Error: "Port 8000 is already in use"
- Change the port in the command: `--port 8001`
- Or kill the existing process using the port

### Error: "pip not found"
- Make sure you're using the virtual environment's pip:
- `venv\Scripts\pip.exe install -r requirements.txt`

## Quick Diagnostic

Run this to check if everything is installed correctly:
```cmd
cd backend
venv\Scripts\python.exe test_backend.py
```

## Alternative: Docker Approach

If you continue having issues, I can help you create Docker containers for both backend and frontend, which would eliminate all environment-related issues.

## Need More Help?

If none of these solutions work, please:
1. Try the "Manual Startup" method above
2. Share any error messages you see
3. Let me know which approach you tried and what happened
