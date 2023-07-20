2020-06-11
Visibility: Public



linux下最简单好用的的端口转发工具


官网地址[http://www.rinetd.com/](http://www.rinetd.com/)




- 软件下载   
```
wget http://www.rinetd.com/download/rinetd.tar.gz
```


- 解压安装(记得给777权限)

```
tar zxvf rinetd.tar.gz

make

make install

```

- 编辑配置

```
vi /etc/rinetd.conf

```
按i编辑，esc键退出， :wq 保存



- 示例写法：

```
0.0.0.0 8080 172.19.94.3 8080


0.0.0.0 2222 192.168.0.103 3389


1.2.3.4 80    192.168.0.10 80
```


**说明一下（0.0.0.0表示本机绑定所有可用地址）**


将所有发往本机8080端口的请求转发到172.19.94.3的8080端口

将所有发往本机2222端口的请求转发到192.168.0.103的3389端口

将所有发往1.2.3.4的80端口请求转发到192.168.0.10的80端口


- 启动程序
```

pkill rinetd  ##关闭进程

/usr/sbin/rinetd ##启动转发

```


把这条命令加到/etc/rc.local里面就可以开机自动运行,使用 chmod +x /etc/rc.d/rc.local 来增加权限进行运行.



- 查看状态


```
netstat -antup
```

- 需要注意

1. rinetd.conf中绑定的本机端口必须没有被其它程序占用

2. 运行rinetd的系统防火墙应该打开绑定的本机端口


例如：

```
-A RH-Firewall-1-INPUT -m state --state NEW -m tcp -p tcp --dport 1111 -jACCEPT

-A RH-Firewall-1-INPUT -m state --state NEW -m tcp -p tcp --dport 2222 -jACCEPT

```

作者：老于_0dfe

链接：[https://www.jianshu.com/p/ccfc66065978](https://www.jianshu.com/p/ccfc66065978)

来源：简书

著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。