@echo off
REM Script 1-klik untuk deploy portofolio ke GitHub Pages (Windows)
echo ========================================================
echo Memulai proses build dan deploy ke GitHub Pages...
echo ========================================================
call npm run deploy
echo.
echo ========================================================
echo Selesai! Website Anda telah dipublikasikan.
echo ========================================================
pause
