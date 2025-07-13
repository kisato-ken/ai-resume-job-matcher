@echo off
echo Installing missing python-multipart dependency...
cd backend
venv\Scripts\python.exe -m pip install python-multipart
echo ✅ python-multipart installed successfully!
echo.
echo Now restart your backend server.
pause
