nginx+vless+ws+tls(+cloudflare)2022-04更新
date: '2022-04-28T14:31:00.010+01:00'

---
前言： 是时候更新下了，之前的Vmess再装已经不适用了。这次主要是配合前面有一篇内网穿透+NGINX 做国内无80 443 的 网页转发的，用Cloudflare可以省掉CN2节点的流量。

2022/05/01 补充：我又多装了几次，终于发现之前的问题所在了。之前一直是SSRPLUS可以用，Passwall不能用，配置都是手打的，有一个没让我注意到的点**Passwall配置的时候 tls下的alpn是要填http/1.1  不然会出现malformed http response**

这样子之前的vmess的搭建步骤还是有效的。属实是愚钝了。

  


这次又需要ws+tls，就再记录下。这次用vless了，vmess一直不成功，应该是版本的原因。

 0. 简单的步骤

 0.1 可能更改VPS系统时间 

1. rm -rf /etc/localtime
2. ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

 0.2 安装下lnmp，参考*lnmp.org*。需要BBR也就装下。

 1. 安装v2ray：https://github.com/v2fly/fhs-install-v2ray

 2. 用whereis v2ray 查看配置文件地址，因为他们也喜欢换来换去。

 3. vi config.json 修改下配置文件


```
1. {  
 "inbounds": [  
 {  
 "port": 65432,  
 "listen":"127.0.0.1",  
 "protocol": "vless",  
 "settings": {  
 "decryption": "none",  
 "clients": [  
 {  
 "id": "1bb83c10-911e-4767-81d2-adb5177c0718",  
 "level": 0  
 }  
 ]  
 },  
 "streamSettings": {  
 "network": "ws",  
 "wsSettings": {  
 "path": "/5e60be4f39c63c/"  
 }  
 }  
 }  
 ],  
 "outbounds": [  
 {  
 "protocol": "freedom",  
 "settings": {}  
 }  
 ]  
}
2. 
3. 

```
4. v2ray相关命令


```
service v2ray restart   
service v2ray status
```

```
systemctl start v2ray  
  
systemctl status v2ray  

```

```
systemctl enable v2ray #开启启动
```
5. Nginx配置

1. location /5e60be4f39c63c/ {
2. if ($http\_upgrade != "websocket") {
3. return 404;
4. }
5. proxy\_redirect off;
6. proxy\_pass http://127.0.0.1:65432;
7. proxy\_http\_version 1.1;
8. proxy\_set\_header Upgrade $http\_upgrade;
9. proxy\_set\_header Connection "upgrade";
10. proxy\_set\_header Host $host;
11. # Show real IP in v2ray access.log
12. proxy\_set\_header X-Real-IP $remote\_addr;
13. proxy\_set\_header X-Forwarded-For $proxy\_add\_x\_forwarded\_for;
14. }

6. SSL配置下 Cloudflare IP优选

https://github.com/XIU2/CloudflareSpeedTest/releases

7.可能有其它问题，也写在Blog里了。

  



