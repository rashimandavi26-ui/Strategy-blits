$env:PATH = "C:\Users\ASUS\AppData\Local\Programs\nodejs\node-v20.18.0-win-x64;$env:PATH"
Set-Location -Path $PSScriptRoot
Write-Host "====================================================" -ForegroundColor Cyan
Write-Host "Starting AI Career Guide Platform..." -ForegroundColor Green
Write-Host "====================================================" -ForegroundColor Cyan
npm run dev
