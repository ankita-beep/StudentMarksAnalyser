$env:Path = "C:\Program Files\nodejs;" + $env:Path
Write-Host "Starting Frontend..." -ForegroundColor Green
Set-Location "$PSScriptRoot\frontend"
npm run dev
