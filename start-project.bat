@echo off
chcp 65001 > nul
title AI Prompt Marketplace — DEV

echo ============================================
echo   AI Prompt Marketplace — START PROJECT
echo ============================================

:: Перехід у папку, де лежить .bat
cd /d %~dp0

:: Перевірка наявності node_modules
if not exist "node_modules" (
    echo [INFO] node_modules не знайдено. Виконується npm install...
    npm install
    if errorlevel 1 (
        echo [ERROR] Помилка під час npm install
        pause
        exit /b 1
    )
)

echo [OK] node_modules знайдено
echo [INFO] Запуск Vite dev-сервера...

:: Запуск Vite
start cmd /k "npm run dev:vite"

:: Очікування запуску сервера
timeout /t 3 > nul

:: Відкриття браузера
start http://localhost:5173

echo ============================================
echo   Проєкт запущено!
echo   http://localhost:5173
echo ============================================
