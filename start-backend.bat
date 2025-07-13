@echo off
echo 🚀 Starting AI Resume Job Matcher Backend...

cd /d "%~dp0backend"

echo Checking Python installation...
python --version
if errorlevel 1 (
    echo ❌ Python not found. Please install Python 3.8+ and try again.
    pause
    exit /b 1
)

echo.
echo Setting up backend...
if not exist "venv" (
    echo Creating virtual environment...
    python -m venv venv
)

echo Installing/updating dependencies...
venv\Scripts\python.exe -m pip install --upgrade pip
venv\Scripts\python.exe -m pip install -r requirements.txt
venv\Scripts\python.exe -m pip install python-multipart

echo.
echo Downloading spaCy model...
venv\Scripts\python.exe -m spacy download en_core_web_sm

echo.
echo 🚀 Starting FastAPI server...
echo Backend will be available at: http://localhost:8000
echo API Documentation at: http://localhost:8000/docs
echo.
echo Press Ctrl+C to stop the server
echo.

venv\Scripts\python.exe -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

pause
