@echo off
echo 🚀 Simple Frontend Starter - AI Resume Job Matcher
echo ==================================================

cd /d "%~dp0frontend"

echo.
echo Step 1: Installing dependencies (this may take a few minutes)...
call npm install
if errorlevel 1 (
    echo ❌ Failed to install dependencies.
    echo.
    echo Try these solutions:
    echo 1. Check internet connection
    echo 2. Delete node_modules folder and try again
    echo 3. Run: npm cache clean --force
    pause
    exit /b 1
)

echo.
echo Step 2: Starting development server...
echo.
echo ✅ Frontend will open automatically in your browser
echo 📍 URL: http://localhost:3000
echo.
echo ⚠️  Keep this window open while using the application
echo ⚠️  Press Ctrl+C to stop the server
echo.

REM Try without turbopack first
call npx next dev
if errorlevel 1 (
    echo.
    echo Retrying without turbopack...
    call npx next dev --no-turbopack
)

echo.
echo Frontend server stopped.
pause
