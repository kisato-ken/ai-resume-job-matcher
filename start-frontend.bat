@echo off
echo 🚀 Starting AI Resume Job Matcher Frontend...

cd /d "%~dp0frontend"

echo Checking Node.js installation...
node --version
if errorlevel 1 (
    echo ❌ Node.js not found. Please install Node.js 18+ and try again.
    pause
    exit /b 1
)

echo.
echo Installing/updating dependencies...
call npm install
if errorlevel 1 (
    echo ❌ npm install failed. Please check your Node.js installation.
    pause
    exit /b 1
)

echo.
echo 🚀 Starting Next.js development server...
echo Frontend will be available at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev
if errorlevel 1 (
    echo ❌ Failed to start frontend server.
    echo Check the error messages above.
    pause
    exit /b 1
)

pause
