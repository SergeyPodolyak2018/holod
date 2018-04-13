if not "%minimized%"=="" goto :minimized
set minimized=true
@echo off
cd "D:\Проект холод\control"

start /min cmd /C "nodemon server.js"
goto :EOF
:minimized