@echo off
REM AI Resume Job Matcher - Windows Startup Script

echo 🚀 Starting AI Resume Job Matcher...

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Python is not installed. Please install Python 3.8+ and try again.
    pause
    exit /b 1
)

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js 18+ and try again.
    pause
    exit /b 1
)

echo Choose an option:
echo 1. Setup only (install dependencies)
echo 2. Start services (assumes setup is done)
echo 3. Full setup and start
set /p choice=Enter your choice (1-3): 

if "%choice%"=="1" goto setup
if "%choice%"=="2" goto start
if "%choice%"=="3" goto full
echo ❌ Invalid choice. Please run the script again.
pause
exit /b 1

:setup
call :setup_backend
call :setup_frontend
echo 🎉 Setup complete! Run option 2 to start services.
pause
exit /b 0

:start
call :start_services
exit /b 0

:full
call :setup_backend
call :setup_frontend
call :start_services
exit /b 0

:setup_backend
echo 🔧 Setting up backend...
cd backend

REM Create virtual environment if it doesn't exist
if not exist "venv" (
    echo Creating Python virtual environment...
    python -m venv venv
)

REM Install dependencies using venv python directly
echo Installing Python dependencies...
venv\Scripts\python.exe -m pip install --upgrade pip
venv\Scripts\python.exe -m pip install -r requirements.txt

REM Download spaCy model
echo Downloading spaCy model...
venv\Scripts\python.exe -m spacy download en_core_web_sm

echo ✅ Backend setup complete!
cd ..
exit /b 0

:setup_frontend
echo 🔧 Setting up frontend...
cd frontend

REM Install dependencies
echo Installing Node.js dependencies...
npm install

echo ✅ Frontend setup complete!
cd ..
exit /b 0

:start_services
echo 🚀 Starting services...

REM Start backend using venv python directly
echo Starting backend server on port 8000...
cd backend
start "Backend Server" cmd /k "venv\Scripts\python.exe -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000"
cd ..

REM Wait a moment for backend to start
timeout /t 3 /nobreak >nul

REM Start frontend
echo Starting frontend server on port 3000...
cd frontend
start "Frontend Server" cmd /k "npm run dev"
cd ..

echo ✅ Services started!
echo 📍 Frontend: http://localhost:3000
echo 📍 Backend API: http://localhost:8000
echo 📍 API Docs: http://localhost:8000/docs
echo.
echo Press any key to continue...
pause >nul
exit /b 0
