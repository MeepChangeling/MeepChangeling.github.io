@echo on
setlocal enableDelayedExpansion

cd /D "%~dp0data"

set /a heartoflorkan=0
for /F "tokens=1 delims=*" %%a in ('Type "link.csv"') do (
	set /a heartoflorkan+=1
	set "outputa[!heartoflorkan!]=%%a"
)

For /L %%i in (1,1,%heartoflorkan%) Do (
	set "replaced=!outputa[%%i]!"
	call :writer
)
pause
goto :eof


:writer

cd /D "%~dp0"
set "replace=<p class="AutoUpdateTag">History<p>"

set "source=infoboxtest"
set "target=text"

set flag=0

for /F "tokens=1* delims=:" %%a in ('findstr /N "^" %source%.html') do (
      set "line=%%b"
	  if "!line!"=="%replace%" (
		set "line=!replaced!"
		set flag=1
	)
	if defined line echo !line!>> %target%.tmp
	if "!flag!"=="1" (
		echo !replace!>> %target%.tmp
		set flag=0
	)
) 

del %source%.html
rename %target%.tmp %source%.html
goto :eof

:: if defined line set "line=!line:%replace%=%replaced%!"

