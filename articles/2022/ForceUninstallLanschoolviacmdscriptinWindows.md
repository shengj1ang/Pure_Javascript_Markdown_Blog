2022-01-23T07:45:00.006+01:00
Visibility: Public

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgstv3NVtv1Isiwnx2HMvlY68OK6l779TZ25mKcVLlut_bFEM5WyUm_Nf_Rzb56sVnT8MOPFzZNQWvrDDGZrO4Y-WRgC0HMLI8oT9h6MGVUbTqyfniH05mgYuylLp9BzbhKHBUytvqOgaRlL6_Jogoq1RduXsBBkfziJVjEXuzcDyPF_GDZIwBy7sS0/s320/Screenshot%202022-03-23%20at%2011.14.44%20AM.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgstv3NVtv1Isiwnx2HMvlY68OK6l779TZ25mKcVLlut_bFEM5WyUm_Nf_Rzb56sVnT8MOPFzZNQWvrDDGZrO4Y-WRgC0HMLI8oT9h6MGVUbTqyfniH05mgYuylLp9BzbhKHBUytvqOgaRlL6_Jogoq1RduXsBBkfziJVjEXuzcDyPF_GDZIwBy7sS0/s492/Screenshot%202022-03-23%20at%2011.14.44%20AM.png)  
  
Use the following command or add them into a .bat or .cmd file and execute it.

  


@echo off

taskkill.exe /IM student.exe /F

taskkill.exe /IM LskHelper.exe /F

taskkill.exe /IM lskHlpr64.exe /F

net stop "LanSchool Helper Service"

net stop "LanSchool Student Service"

sc delete "LanSchool Helper Service"

sc delete "LansSchool Student Service"

reg delete "HKEY\_LOCAL\_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Run" /v Teacher /f

::del/f/s/q "C:\Program Files (x86)\LanSchool\LskHelper.exe"

rd /s/q "C:\Program Files (x86)\LanSchool\"

  


reg delete "HKEY\_LOCAL\_MACHINE\SOFTWARE\Policies\Google\Chrome\ExtensionInstallForcelist" /va /f

reg delete "HKEY\_LOCAL\_MACHINE\SOFTWARE\Policies\Google\Chrome" /va /f

pause

  
  
