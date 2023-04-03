**将任意程序制作成linux的服务**

日期：20230130
## 制作文件
先创建服务文件。<span style="color:#dc9656">vim /etc/systemd/system/qqvps.service</span>。输入一下内容

```
[Unit]
Description=qqvps signin
After=multi-user.target

[Service]
Type=simple
User=rui
ExecStart=/usr/bin/python3 /home/rui/code/qqvps/cookie_login/cookie_check.py

[Install]
WantedBy=multi-user.target
```

其中<span style="color:#dc9656">ExecStart</span>为你要运行的程序。


## 相关命令
1. 启动、停止、重启服务
```
sudo systemctl start qqvps
sudo systemctl stop qqvps
sudo systemctl restart qqvps
sudo systemctl status qqvps  # 查看状态
sudo systemctl enable qqvps   # 设置开机启动
```
2. 查看日志
```
sudo journalctl -a -u qqvps   #查看所有日志
sudo journalctl -a -f -u qqvps  #持续查看日志
```
Refer: [https://blog.hifool.cn/posts/systemted/](https://blog.hifool.cn/posts/systemted/)


##其它系统，准备晚点整理下：
[Unraid 后台实现自定义开机脚本](https://www.zleoco.com/?p=587)

[在openwrt系统中设置开机自启服务](https://sparkydogx.github.io/2019/01/09/openwrt-service-startup/)

[pandolia/easy-service Windows系统服务](https://github.com/pandolia/easy-service/)