@echo off
cd /d D:\Meep\Stories\Eyom\Dex\GitDir\MeepChangeling.github.io
git add .
echo What is being uploaded?
set /p boop=
git commit -m ^"added %boop%^"
git push