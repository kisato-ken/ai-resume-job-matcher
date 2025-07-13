@echo off
echo Installing Google OAuth dependencies...
echo.

REM Check if we're in the frontend directory
if not exist "package.json" (
    echo Error: Please run this script from the frontend directory
    echo Current directory should contain package.json
    pause
    exit /b 1
)

echo Installing next-auth and Google provider...
npm install next-auth

if %errorlevel% neq 0 (
    echo.
    echo Error: Failed to install packages. Please try:
    echo 1. Running as Administrator
    echo 2. Using PowerShell with: Set-ExecutionPolicy RemoteSigned
    echo 3. Or install manually: npm install next-auth @auth/google-provider
    pause
    exit /b 1
)

echo.
echo ✅ Packages installed successfully!
echo.
echo Next steps:
echo 1. Copy .env.local.example to .env.local
echo 2. Follow the setup guide in GOOGLE_OAUTH_SETUP.md
echo 3. Configure your Google Cloud credentials
echo.
pause
