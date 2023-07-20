2020-08-22
Visibility: Public


前言：对于VPS的要求：512M以下内存都可以，如果不装数据库的话。



-准备好你的域名

-更改VPS系统时间（可选开启时间同步）

```
rm -rf /etc/localtime
ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```
时间同步对于SSR也许无所谓，但是对于V2RAY很重要。是非常重要。下面的时间同步可以选择跳过，时间改好就可以了。

NTP同步时间 协议（可选择跳过）

众所周知，NTP协议是网络时间同步协议，有了它，我们可以很轻松的同步本地时间与互联网时间。VPS上也可以使用NTP来同步网络。首先安装必要的软件包：

Ubuntu/Debian系统

```
apt-get update
apt-get install ntp ntpdate -y
```
CentOS/RHEL系统
```
yum install ntp ntpdate -y
```
接下来我们需要先停止NTP服务器，再更新时间。
```
service ntpd stop                 #停止ntp服务
ntpdate us.pool.ntp.org           #同步ntp时间
service ntpd start                #启动ntp服务
```
执行完成后，VPS上就是相对精确的时间设置了。很多依赖于系统时间的应用程序也就能正常工作了。

-安装lnmp/aapanel/宝塔面板&&安装Nginx/Sql/或是其他你需要的运行环境软件

有时候debian不能急速安装，一般是编译安装，所以速度慢的奇葩！！若是真心是建站需求的话，推荐使用CENTOS7以上的系统，那样安装运行环境很急速的！一般10分钟内全部搞定

-开启DEBIAN9 BBR
```
echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf
echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf
sysctl -p
sysctl net.ipv4.tcp_available_congestion_control
lsmod | grep bbr
```
-安装v2ray服务器：官方脚本
```
bash <(curl -L -s https://install.direct/go.sh)
```
如果提示 curl: command not found ，那是因为你的 VPS 没装 Curl
ubuntu/debian系统安装 Curl 方法
```
apt-get update -y && apt-get install curl -y 
```
centos系统安装 Curl 方法
```
yum update -y && yum install curl -y

```
```
vi /etc/v2ray/config.json
```
 V2RAY服务器的配置文件如下：（下面代码可以直接覆盖源文件代码）
```
{
  "inbounds": [{
    "port": 65432,           //此处为安装时生成的端口，可修改随意，但是保证和下面提到的端口号相同
    "listen":"127.0.0.1",
    "protocol": "vmess",
    "settings": {
      "clients": [
        {
          "id": "xxxxxxxxx", //此处为安装时生成的id
          "level": 1,
          "alterId": 64      //此处为安装时生成的alterId
        }
      ]
    },
    "streamSettings": {
      "network": "ws",
      "wsSettings": {
        "path": "/SoftDown"   //此处为路径，需要和下面NGINX上面的路径配置一样
      }
    }
  }],
  "outbounds": [{
    "protocol": "freedom",
    "settings": {}
  },{
    "protocol": "blackhole",
    "settings": {},
    "tag": "blocked"
  }],
  "routing": {
    "rules": [
      {
        "type": "field",
        "ip": ["geoip:private"],
        "outboundTag": "blocked"
      }
    ]
  }
}
```

-设置为开机自动启动
```
systemctl enable v2ray

```
-启动v2ray服务
```
systemctl start v2ray

```
-自动签发SSL证书，并强制开启HTTPS

-配置站点的nginx
```
location /SoftDown {
proxy_redirect off;
proxy_pass http://127.0.0.1:65432;
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
proxy_set_header Host $http_host;
}

```


-好了