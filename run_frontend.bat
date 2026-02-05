@echo off
echo Setting up environment...
set "PATH=C:\Program Files\nodejs;%PATH%"
echo Starting Frontend...
cd frontend
call npm run dev
pause
