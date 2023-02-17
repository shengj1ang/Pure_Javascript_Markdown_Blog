---
date: '2022-01-23T07:45:00.006+01:00'
description: ''
published: true
slug: 2022-01-force-uninstall-lanschool-via-cmdscript
tags:
- http://schemas.google.com/blogger/2008/kind#post
- legacy-blogger
time_to_read: 5
title: Force Uninstall Lanschool via cmd/script in Windows
---

*This was originally posted on blogger [here](https://sheng-jiang.blogspot.com/2022/01/force-uninstall-lanschool-via-cmdscript.html)*.

<div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgstv3NVtv1Isiwnx2HMvlY68OK6l779TZ25mKcVLlut_bFEM5WyUm_Nf_Rzb56sVnT8MOPFzZNQWvrDDGZrO4Y-WRgC0HMLI8oT9h6MGVUbTqyfniH05mgYuylLp9BzbhKHBUytvqOgaRlL6_Jogoq1RduXsBBkfziJVjEXuzcDyPF_GDZIwBy7sS0/s492/Screenshot%202022-03-23%20at%2011.14.44%20AM.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="232" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgstv3NVtv1Isiwnx2HMvlY68OK6l779TZ25mKcVLlut_bFEM5WyUm_Nf_Rzb56sVnT8MOPFzZNQWvrDDGZrO4Y-WRgC0HMLI8oT9h6MGVUbTqyfniH05mgYuylLp9BzbhKHBUytvqOgaRlL6_Jogoq1RduXsBBkfziJVjEXuzcDyPF_GDZIwBy7sS0/s320/Screenshot%202022-03-23%20at%2011.14.44%20AM.png" width="320" /></a></div><br /><br /><p></p><p>Use the following command or add them into a .bat or .cmd file and execute it.</p><p><br /></p><p>@echo off</p><p>taskkill.exe /IM student.exe /F</p><p>taskkill.exe /IM LskHelper.exe /F</p><p>taskkill.exe /IM lskHlpr64.exe /F</p><p>net stop "LanSchool Helper Service"</p><p>net stop "LanSchool Student Service"</p><p>sc delete "LanSchool Helper Service"</p><p>sc delete "LansSchool Student Service"</p><p>reg delete "HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Run" /v Teacher /f</p><p>::del/f/s/q "C:\Program Files (x86)\LanSchool\LskHelper.exe"</p><p>rd /s/q "C:\Program Files (x86)\LanSchool\"</p><p><br /></p><p>reg delete "HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome\ExtensionInstallForcelist" /va /f</p><p>reg delete "HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome" /va /f</p><p>pause</p><div class="separator" style="clear: both; text-align: center;"><br /></div><br />