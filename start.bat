@echo off
echo ====================================================
echo Starting AI Career Guide Platform...
echo ====================================================
set "PATH=C:\Users\ASUS\AppData\Local\Programs\nodejs\node-v20.18.0-win-x64;%PATH%"
cd /d "%~dp0"
npm run dev
pause
