#!/usr/bin/env powershell
# Restart All Services Script

Write-Host "🔄 Restarting AI Portfolio Services..." -ForegroundColor Cyan

# Kill existing processes
Write-Host "⏹️  Stopping existing services..."
Get-Process | Where-Object {$_.ProcessName -like "*python*"} | Stop-Process -Force -ErrorAction SilentlyContinue
Get-Process | Where-Object {$_.ProcessName -like "*node*"} | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

# Add Node.js to PATH
$env:Path += ";C:\Program Files\nodejs"

Write-Host "✅ Starting Backend (FastAPI)..." -ForegroundColor Green
Start-Process -FilePath "C:\Users\snish\AppData\Local\Programs\Python\Python313\python.exe" `
  -ArgumentList "-m uvicorn backend.main:app --reload" `
  -NoNewWindow `
  -ErrorAction SilentlyContinue

Start-Sleep -Seconds 5

Write-Host "✅ Starting Frontend (React)..." -ForegroundColor Green
Start-Process -FilePath "cmd.exe" `
  -ArgumentList "/k npm start" `
  -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "🚀 Services started!" -ForegroundColor Green
Write-Host "📍 Frontend: http://localhost:3000" -ForegroundColor Cyan
Write-Host "📍 Backend:  http://127.0.0.1:8000" -ForegroundColor Cyan
Write-Host ""
