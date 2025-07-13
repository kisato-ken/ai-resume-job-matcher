@echo off
echo 🔍 Frontend Diagnostic - AI Resume Job Matcher
echo ==================================================

cd /d "%~dp0frontend"

echo.
echo 1. Checking Node.js installation...
node --version
if errorlevel 1 (
    echo ❌ Node.js not found!
    goto :error
) else (
    echo ✅ Node.js found
)

echo.
echo 2. Checking npm installation...
npm --version
if errorlevel 1 (
    echo ❌ npm not found!
    goto :error
) else (
    echo ✅ npm found
)

echo.
echo 3. Checking package.json...
if exist "package.json" (
    echo ✅ package.json exists
    echo Contents:
    type package.json
) else (
    echo ❌ package.json missing!
    goto :error
)

echo.
echo 4. Checking node_modules...
if exist "node_modules" (
    echo ✅ node_modules directory exists
) else (
    echo ⚠️ node_modules directory missing - need to run npm install
)

echo.
echo 5. Checking Next.js configuration...
if exist "next.config.ts" (
    echo ✅ next.config.ts exists
) else (
    echo ❌ next.config.ts missing!
)

echo.
echo 6. Checking source files...
if exist "src\app\page.tsx" (
    echo ✅ Main page component exists
) else (
    echo ❌ Main page component missing!
    goto :error
)

echo.
echo 7. Testing npm scripts...
echo Available scripts:
npm run --silent 2>nul
if errorlevel 1 (
    echo ❌ Cannot read npm scripts
    goto :error
)

echo.
echo 8. Attempting to install dependencies...
call npm install
if errorlevel 1 (
    echo ❌ npm install failed!
    goto :error
) else (
    echo ✅ Dependencies installed successfully
)

echo.
echo ==================================================
echo 🎉 Frontend diagnostic complete!
echo.
echo To start the frontend server manually:
echo 1. Open Command Prompt
echo 2. cd %cd%
echo 3. npm run dev
echo.
goto :end

:error
echo.
echo ==================================================
echo ❌ Frontend diagnostic found issues!
echo Please fix the errors above before starting the frontend.
echo.

:end
pause
