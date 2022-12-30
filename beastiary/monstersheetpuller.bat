@echo off
chcp 65001
cls

SETLOCAL EnableDelayedExpansion
set storage=%~dp0

set /a heartoflorkan=0
for /F "tokens=1-2 delims=*" %%a in ('Type "AllMonsters.csv"') do (
	set /a heartoflorkan+=1
	set "outputa[!heartoflorkan!]=%%a"
	set "outputb[!heartoflorkan!]=%%b"
)
For /L %%i in (1,1,%heartoflorkan%) Do (
	set "monstername=!outputa[%%i]!"
	set "url=!outputb[%%i]!"
	call :writer
)

pause

goto:eof

:writer
echo %monstername%
set filename=%monstername:,=%
set filename=%filename: =%
echo ^<!doctype html^>>>"%filename%.html"
echo ^<html lang="en"^>>>"%filename%.html"
echo ^<html^>>>"%filename%.html"
echo ^<head^>>>"%filename%.html"
echo ^<meta charset="utf-8"^>>>"%filename%.html"
echo ^<title^>%monstername%^</title^>>>"%filename%.html"
echo ^<link href="../MainStyleSheet.css" rel="stylesheet"^>>>"%filename%.html"
echo ^<link rel="icon" type="../image/x-icon" href="../img/logo.png"^>>>"%filename%.html"
echo ^</head^>>>"%filename%.html"
echo ^<body^>>>"%filename%.html"
echo ^<div^>>>"%filename%.html"
echo ^<script src="../nav.js"^>^</script^>>>"%filename%.html"
echo ^</div^>>>"%filename%.html"
echo ^<br^>>>"%filename%.html"
echo ^<div class="book"^>>>"%filename%.html"
type "D:\Meep\Stories\Eyom\Dex\devdir\beastiary\unformated\%filename%.html">>"%~dp0%filename%.html"
echo ^</div^>>>"%filename%.html"
echo ^</body^>>>"%filename%.html"