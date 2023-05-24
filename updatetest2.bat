@echo on

cd /D "%~dp0data"

for /F "tokens=1-3 delims=*" %%a in ('Type "link.csv"') do (
	set "locdir=%%a"
	set "filename=%%b"
	set "string=%%c"
	call :writer
)
goto :eof


:writer
cd /D "%~dp0"

(
echo Testing CSV reading: %locdir%, %filename%, %string%
)>>edffishentreadtest.txt
goto :eof

del %source%.html
rename %target%.tmp %source%.html
goto :eof

:: if defined line set "line=!line:%replace%=%replaced%!"

