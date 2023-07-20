2018-07-12
Visibility: Public



 
 
 V2Ray的安装脚本:

```
 # bash <(curl -L -s https://install.direct/go.sh)
```
可能会在某些VPS上不能正常执行，其原因在于不能从Github下载最新的发行版。本文将演示如何手动安装V2Ray程序，并对一些细节进行深入讲解。



事实上V2Ray是通过GO语言开发的程序，熟悉GO语言的朋友可能都知道，GO语言有着先天的跨平台优势，编译后的可执行文件可以不需要任何依赖文件直接执行。下载的V2Ray程序其实就是根据不同操作系统平台编译的可执行文件。



手动安装步骤如下：



1] 下载并解压V2Ray程序

 
```
# wget https://github.com/v2ray/v2ray-core/releases/download/v3.24/v2ray-linux-64.zip
 # unzip v2ray-linux-64.zip
 # cd v2ray-v3.24-linux-64
 # ll -a
```
首先下载V2Ray的发行版程序，解压压缩包并查看目录中的文件。





图.1 V2Ray程序目录文件详情
V2Ray的程序目录文件详情如图.1所示，其中v2ray和v2ctl是V2Ray的主程序和控制程序；geoip.dat和geosite.dat是程序所需要数据文件；systemd和systemv两个目录中包含了用于生成服务的文件。为了可以使用预先设置好的服务文件，需要把文件移动至正确位置。

2] 将文件移动至正确位置

根据V2Ray的安装脚本，会自动在如下目录生成如下文件：
```

/usr/bin/v2ray/v2ray
/usr/bin/v2ray/v2ctl
/etc/v2ray/config.json
/usr/bin/v2ray/geoip.dat
/usr/bin/v2ray/geosite.dat
```

于是现在要做的就是将文件移动至相应位置：
```
 # mkdir /usr/bin/v2ray
 # cp v2ray /usr/bin/v2ray/v2ray
 # cp v2ctl /usr/bin/v2ray/v2ctl
 # cp geoip.dat /usr/bin/v2ray/geoip.dat
 # cp geosite.dat /usr/bin/v2ray/geosite.dat
 # mkdir /etc/v2ray/
 # cp vpoint_vmess_freedom.json /etc/v2ray/config.json
```
最后一条命令是将当前的vpoint_vmess_freedom.json配置文件复制到指定位置，并修改其为config.json。由于V2Ray是不区分服务端和客户端的，同一个程序可以配置成服务器也可以配置成客户端，程序目录中的vpoint_vmess_freedom.json一般用于配置服务器，而vpoint_socks_vmess.json用于配置成为客户端。

3] 生成V2Ray服务

为了使用方便，一般将V2Ray配置成 systemctl 服务，还记得程序目录中两个文件夹么，里面保存了systemd和systemv两种系统服务的服务文件，如果严格按照上面的位置存放文件，那么服务文件就不需要修改。使用如下命令将v2ray.service文件移动到/usr/lib/systemd/system目录，就可以生成V2Ray服务了：

```
 # cp ./systemd/v2ray.service /usr/lib/systemd/system
```

服务生成后，还需要手动添加一些文件，用于V2Ray程序运行时使用，具体命令如下：
```

 # mkdir /var/log/v2ray/
 # touch /var/log/v2ray/access.log
 # touch /var/log/v2ray/error.log
 # touch /var/run/v2ray.pid
 # systemctl start v2ray
 # systemctl status v2ray
```
全部命令执行完成后，就可以看到如下内容：

图.2 V2Ray运行为服务状态显示
现在V2Ray程序就已经正常运行并且已经成功添加至系统服务，之后就可以使用以下命令将其设置为系统自动启动：
```
 # systemctl enable v2ray
```

以上就是CentOS 7系统手动安装V2Ray的全部过程。