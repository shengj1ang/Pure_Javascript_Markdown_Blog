记录下在R2S上安装lnmp的过程
date: '2022-06-02T18:16:00.021+01:00'

---
 前言：

两年前（2020）入手的R2S，大多数人买了是当软路由用的，我直接当成树莓派用。这个相比于Danny的树莓派，在我记忆中，安装起来除了很慢，也没遇到什么问题。我只装了宝塔面板+Nginx+PHP7.1+可道云(主要就用个WebDAV)&其它的一些网站，花了能有一天。

现在（2022），一是宝塔最近名声不大好，二是这台R2S里面已经很乱了，三是WebDAV我有更稳定长久的方法代替了，完全不需要可道云了，以后我也不会用基于PHP的文件管理系统了，实在是太不底层了。所以促使了这次重装。

这次重装我打算直接装lnmp，其实不装数据库。

 1. Download Image and flash:<https://wiki.friendlyelec.com/wiki/index.php/NanoPi_R2S>

 2. Better change the passwords of pi & root account: passwd

 3. 更新时间，系统时间停留在2020年，所以我两年前完全没问题。现在，这里我花了大半天，我本以为是apt源的问题，害得我把系统刷了2遍，又换源，还把宝塔的脚本也试了一下，最后试wget的时候发现报证书错误，才反应过来是时间问题。 这个证书真的是大无语。

  



```
1. rm -rf /etc/localtime
2. ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

```
NTP同步时间 协议（可选择跳过）  
众所周知，NTP协议是网络时间同步协议，有了它，我们可以很轻松的同步本地时间与互联网时间。VPS上也可以使用NTP来同步网络。首先安装必要的软件包：  
Ubuntu/Debian系统
```
1. apt-get update
2. apt-get install ntp ntpdate -y

```
#### CentOS/RHEL系统


```
1. yum install ntp ntpdate -y

```
### 

接下来我们需要先停止NTP服务器，再更新时间。

  

```
1. service ntpd stop #停止ntp服务
2. ntpdate us.pool.ntp.org #同步ntp时间
3. service ntpd start #启动ntp服务

```
执行完成后，VPS上就是相对精确的时间设置了。

    sudo apt-get update    sudo apt-get upgrade  
4. 最后运行下lnmp脚本，(如果需要的话可以先使用screen命令，这些lnmp.org上都有，以免网络不稳定掉线或者电脑休眠导致的安装停止)，然后睡很长的一觉，起来就完成了。 后续配置也是水到渠成了。[LNMP安装了哪些软件？安装目录在哪？](https://lnmp.org/faq/lnmp-software-list.html)  
防火墙命令 :别忘了添加ssh端口，配置完成了再重启或者断开链接！ubuntu防火墙： ufw allow port/tcp 端口范围：ufw allow 6000:7000/tcp禁用UFW的IPV6: sudo vi /etc/default/ufw IPV6=yes 更改为 IPV6=nocentos防火墙：<https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-using-firewalld-on-centos-7><https://www.csdn.net/tags/MtTaMg1sMDY3NzIzLWJsb2cO0O0O.html>  
1. sudo yum install firewalld
2. sudo systemctl enable firewalld
1. sudo firewall-cmd --zone=public --add-port=5000/tcp --permanent
2. sudo firewall-cmd --zone=public --add-port=80/tcp --permanent
3. sudo firewall-cmd --zone=public --add-port=443/tcp --permanent
4. sudo reboot
但是说，我半年前前有写一篇文章(写了一半删了)，来寻找代替宝塔的软件，但并没有，其实宝塔的Web是完全没软件能代替的，不管国内外，其实国人做的软件有很多也是精益求精的。可惜政策/执行原因，现在也没什么可以留念的，抛弃了。  
最后，其实完全不必那么复杂。。。  
[![](https://m.media-amazon.com/images/I/51pa7Ng3x2L._AC_SX679_.jpg)](https://m.media-amazon.com/images/I/51pa7Ng3x2L._AC_SX679_.jpg)  
  
而且我刷了几次，那个读卡器已经报废了。  

