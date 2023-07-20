2020-02-07
Visibility: Public





用指令：
```
cat /etc/v2ray/config.json
```
 打开配置文件<span style="color:#ab4642">config.json</span>，之后看到配置文件如下格式：
 
```
 "inbounds": [{
    "port": 12345,
    "protocol": "vmess",
    "settings": {
      "clients": [
        {
          "id": "f8123442-a199-4ba3-b66c-3751234fbb47",
          "level": 1,
          "alterId": 64
        }
      ]
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

运用指令：<span style="color:#ab4642">cat /proc/sys/kernel/random/uuid</span> 再创建一个用户 id ，并记住这个id号；
```
[root@vultr ~]# cat /proc/sys/kernel/random/uuid
0ff12347-7664-65d9-b10a-5b1234050c07

```

用指令编辑<span style="color:#ab4642">config.json</span>文件，指令： 
```
vi /etc/v2ray/config.json
```
 ，输入 i 进入编辑模式，复制<span style="color:#ab4642">inbounds[ ]</span>中的内容，再粘贴一个出来，如下格式，记住格式，很重要，直接看下面的代码，自己好好看清楚； 

```
 {

  "inbounds": [{
    "port": 12345,
    "protocol": "vmess",
    "settings": {
      "clients": [
        {
          "id": "f8123442-a199-4ba3-b66c-3751234fbb47",
          "level": 1,
          "alterId": 64
        }
      ]
    }
  },
  {
    "port": 12346,
    "protocol": "vmess",
    "settings": {
      "clients": [
        {
          "id": "0ff12347-7664-65d9-b10a-5b1234050c07",
          "level": 1,
          "alterId": 64
        }
      ]
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
对于上面的代码，我还是说一下比较好



接下来，按esc推出，输入：号，退出编辑状态，然后输入wq，保存并退出。

完事，最好是输入指令<span style="color:#ab4642">cat /etc/v2ray/config.json</span>  再看看对不对，检查一下，然后重启V2Ray服务
```
systemctl restart v2ray
```

别忘记开启防火墙端口

```
firewall-cmd --zone=public --add-port=12346/tcp --permanent

```
重载防火墙配置
 
```
firewall-cmd --reload 
```
搞定。

注：如果不想新加端口号，只是增加一个id，直接复制粘贴以下括号内容，然后改id即可，别忘记第一个括号后面加个逗号，不再多说。
```
{
          "id": "f8123442-a199-4ba3-b66c-3751234fbb47",
          "level": 1,
          "alterId": 64
} 
```