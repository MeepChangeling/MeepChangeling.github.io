@echo off
setlocal EnableDelayedExpansion

set "input=dictionary.txt"
set "output=dictionary.csv"

> "%output%" echo word,translation

for /f "usebackq delims=" %%L in ("%input%") do (

    set "line=%%L"

    REM remove quotes
    set "line=!line:"=!"

    REM remove trailing comma
    if "!line:~-1!"=="," set "line=!line:~0,-1!"

    REM split at colon
    for /f "tokens=1* delims=:" %%A in ("!line!") do (

        set "left=%%A"
        set "right=%%B"

        REM trim leading space
        if "!right:~0,1!"==" " set "right=!right:~1!"

        REM replace pipes with a unique delimiter
        set "left=!left:|=¶!"

        REM iterate using custom delimiter
        call :explode "!left!" "!right!"
    )
)

echo Done!
pause
exit /b


:explode
set "list=%~1"
set "meaning=%~2"

:next
for /f "tokens=1* delims=¶" %%X in ("%list%") do (
    echo %%X,%meaning%>>"%output%"
    set "list=%%Y"
)

if defined list goto next
exit /b

:: regex for converting back:

::add to beginning of line = ^    whatever
::replace first comma with ": " = ^"([^,]+),([^"]+)",        "\1": "\2",
::add to end of line = $     whatever