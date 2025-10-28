---
title: "How to Fix Premiere Pro Subtitle Lowercase Issue Fast: Batch File Cache
  Clear for SubMachine and Other Subtitle Extensions"
description: Learn how to quickly fix the annoying lowercase subtitle issue in
  Adobe Premiere Pro and After Effects (including SubMachine or other subtitle
  extensions). This guide shows you how to automate clearing media cache with a
  simple batch file, saving time and ensuring your subtitles display correctly
  every time. Perfect for video editors looking to streamline their workflow and
  prevent formatting glitches.
pubDatetime: 2025-10-28T12:59:43.204Z
author: Anuj Paudel
modDatetime: 2025-10-28T12:59:43.214Z
---
Are your subtitles in Premiere Pro or After Effects (including SubMachine or other subtitle extensions) showing in lowercase even when "All Caps" is applied? This is a common issue caused by corrupted media cache or MOGRT glitches. While manually clearing the cache works, it’s tedious and interrupts your workflow. The faster, safer solution is to automate it using a batch file.

- - -

## Why Subtitles Turn Lowercase

* **Media Cache Corruption:** Premiere Pro and After Effects rely on cache for rendering text correctly.  
* **MOGRT/SubMachine Glitches:** Motion Graphics templates or subtitle extensions can misbehave, ignoring capitalization settings.  
* **Font Issues:** Damaged or missing fonts may also cause letters to render lowercase.

- - -

## Quick Fix: Automate Cache Clearing with a Batch File

Manually deleting media cache every time is hectic. Instead, create a `.bat` file that clears cache for both Premiere Pro and After Effects before launch.

### Steps

1. Open **Notepad**.  
2. Paste your batch code that clears Premiere Pro and After Effects cache and launches Premiere Pro.  

   ```
   @echo off
   echo =============================================
   echo       CLEARING ADOBE PREMIERE PRO & AFTER EFFECTS CACHE
   echo =============================================

   :: Get the current Windows username
   set "USERPROFILE_DIR=%USERPROFILE%"

   :: Kill Adobe background processes to avoid file lock errors
   taskkill /IM "Adobe Premiere Pro.exe" /F >nul 2>&1
   taskkill /IM "AfterFX.exe" /F >nul 2>&1

   echo.
   echo Deleting Premiere Pro & shared Media Cache files...

   rmdir /S /Q "%USERPROFILE_DIR%\AppData\Roaming\Adobe\Common\Media Cache"
   rmdir /S /Q "%USERPROFILE_DIR%\AppData\Roaming\Adobe\Common\Media Cache Files"

   echo Recreating empty cache folders...
   mkdir "%USERPROFILE_DIR%\AppData\Roaming\Adobe\Common\Media Cache"
   mkdir "%USERPROFILE_DIR%\AppData\Roaming\Adobe\Common\Media Cache Files"

   echo.
   echo Deleting After Effects Disk Cache (all versions found)...
   for /d %%A in ("%USERPROFILE_DIR%\AppData\Local\Adobe\After Effects\*") do (
       if exist "%%A\Disk Cache" (
           echo Clearing: %%A\Disk Cache
           rmdir /S /Q "%%A\Disk Cache"
           mkdir "%%A\Disk Cache"
       )
   )

   echo.
   echo ✅ All Adobe Premiere Pro and After Effects cache files have been cleared.
   echo You can safely reopen your projects now.
   pause

   ```


3. Save the file as `ClearCacheAndLaunchPremiere.bat`.  
4. Close Premiere Pro and After Effects before running the file.  
5. Double-click the `.bat` file to clear cache and launch Premiere Pro.  

> **Pro Tip:** Verify your Adobe installation paths and ensure all fonts used in subtitles are properly installed.

- - -

## Additional Tips

* **Automatic Cache Management:** In Premiere Pro, go to `Edit > Preferences > Media Cache` and set cache deletion based on age or size.  
* **Manual Cache Clear:** Use `Edit > Preferences > Media Cache > Delete` if needed.  
* **Font Health:** Confirm fonts are installed and not corrupted.  

- - -

Clearing cache via a batch file ensures subtitles render correctly, prevents lowercase glitches, and speeds up your editing workflow, especially when using SubMachine or other subtitle extensions.