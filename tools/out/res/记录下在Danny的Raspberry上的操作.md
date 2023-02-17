记录下在Danny的Raspberry上的操作
date: '2022-02-26T06:05:00.016+01:00'

---
**Preamble: The raspberry bought by danny has been idle in the school for a long time. I tried to deploy it.**

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSVXy7gliBC1AcNlyctU_KB7KRG4aMoIPUsglz7d2wR6zK9my-3CsUZJ7KVFMP2sx2kPqtdPLptuZsnnExKn0UjxAgHbVdWhdh5Wv6lgxetDBHXifSHjio4o1N1g6_nTztmhHr0Z9ZpV88jqXsk7tJZFd7h4UCfFkbtrRxUSQa2eSGM9aCBWZ7FJAO/s320/Screenshot%202022-03-23%20at%2010.55.50%20AM.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiSVXy7gliBC1AcNlyctU_KB7KRG4aMoIPUsglz7d2wR6zK9my-3CsUZJ7KVFMP2sx2kPqtdPLptuZsnnExKn0UjxAgHbVdWhdh5Wv6lgxetDBHXifSHjio4o1N1g6_nTztmhHr0Z9ZpV88jqXsk7tJZFd7h4UCfFkbtrRxUSQa2eSGM9aCBWZ7FJAO/s592/Screenshot%202022-03-23%20at%2010.55.50%20AM.png)  
**First, I connected the Raspberry Pi through the display, and then connected to Wi-Fi (because there is no screen where the network cable can be plugged in) to download the NPC and forward it to the external network.****No problems were encountered at this step.**

**Finally, access the Internet via the school library.**

  


**However, In the further deployment, I faced a lot of problems.**

* Web Servers

Errors Faced: Nginx=>Loss cmake=>(Loss yum)=>apt error=>apt sources=>sources verify issues

Solutions:

1.apt sources

*Refrence: https://zhuanlan.zhihu.com/p/251009600*

*https://cloud.tencent.com/developer/article/1590080*

Codename:       buster

2.sources verify issues  - fix the GPG error "NO\_PUBKEY"?

https://askubuntu.com/questions/13065/how-do-i-fix-the-gpg-error-no-pubkey

sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys <PUBKEY>

sudo apt-get update 

3.

Unable to locate package yum

sudo apt install yum

4.Addition Functions

httping: sudo apt-get -y install httping

traceroute: *https://www.ipip.net/product/client.html*

  


Error:libxslt

checking for libxslt ... not found

checking for libxslt in /usr/local/ ... not found

checking for libxslt in /usr/pkg/ ... not found

checking for libxslt in /opt/local/ ... not found

Solution:

https://zoomadmin.com/HowToInstall/UbuntuPackage/libxslt-dev

sudo apt-get install -y libxslt-dev

sudo apt-get install traceroute

测试代码

wget -N --no-check-certificate https://raw.githubusercontent.com/V2RaySSR/vps/master/vpstest.sh && bash vpstest.sh

* IPLC X-UI Server

*https://github.com/vaxilu/x-ui*  
*白嫖学校超高价iplc** VNC Server

Errors Faced: raspi-config not found=>Refrence:*https://shumeipai.nxez.com/2018/08/31/raspberry-pi-vnc-viewer-configuration-tutorial.html**https://forums.raspberrypi.com/viewtopic.php?t=42836*  
sudo apt-get updatesudo apt-get install raspi-configsudo raspi-configInterfacing Options -> VNC -> Yes  
  
* MutiNPC

-*使用update-rc.d添加开机自启动脚本千万不要使用这种方法，会导致npc直接坏掉！**Reference: https://blog.ilemonrain.com/linux/linux-startup-run.html*  
- Use DockerReference:<https://ehang-io.github.io/nps/#/install?id=docker%e5%ae%89%e8%a3%85>  
docker pull ffdfgdfg/npc无配置文件：docker run -d --name npc --net=host ffdfgdfg/npc -server=<ip:port> -vkey=<web界面中显示的密钥> <以及一些其他参数>配置文件：docker run -d --name npc --net=host -v <本机conf目录>:/conf ffdfgdfg/npc -config=/conf/npc.conf设置docker开机启动 docker  update  --restart=always 容器名称systemctl    enable docker.service  
  
-ssh远程服务器开启多个终端窗口sudo apt install screen  
基本用法：screen -S XX，创建一个名字为XX的screen。然后就会看见终端变成了一个新的终端窗口。在新的终端窗口做你想做的事儿。退出：按Ctrl+a，然后再按d，就回到了最原始的终端界面。可以通过screen -ls来查看所有的screen。可通过命名的screen名或者screen的id来进入对应的终端界面：screen -r XX删除screen -S name-or-id -X quit  
- 安装 tindy2013/stairspeedtest-reborn*Reference: https://github.com/tindy2013/stairspeedtest-reborn/issues/78*
