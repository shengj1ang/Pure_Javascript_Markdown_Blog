# EXSi的使用记录📝

2023-07-17


# 安装
EXSi系统的安装花费了很多时间，因为新版本的系统(8.0)机械硬盘驱动有问题，而老版本的系统（6.7）在网页上无法发送Ctrl+Alt+Del。

<span style="color:#f7ca88">如何判断硬盘能不能识别到</span>：在安装的界面就能看出来，要是安装的时候看不到硬盘，安装完了也不会看到。

<span style="color:#7cafc2">我的尝试过程</span>：
1.我先试了8.0版本，这个版本支持的虚拟系统选项更多，有WinServer2022。6.7的版本就只到WinServer2016。但是由于无法识别机械硬盘，具体内容见下问HBA驱动部分；
2.然后又试了Bigdongdong的6.7版本，能识别到机械硬盘，但是安装WindowsServer2016的时候会出现UEFI的错误，而且尝试修复未果；
3.又试了7.0的很多个版本，无法识别机械硬盘；
4.又安装了6.7 U2，但是出现了在网页上无法发送Ctrl+Alt+Del的问题，后文具体展开；
5.最后装了6.7 U3，到目前没什么问题。不过8.0的UI确实好看点。

<span style="color:#ab4642">镜像的下载</span>：可以在网上搜索，有很多。
<span style="color:#a1b56c">以下我试过的几个途径</span>：

8.0: [https://pan.baidu.com/share/init?surl=QgZcxo1UV3Dybw3Yq_qfSA](https://pan.baidu.com/share/init?surl=QgZcxo1UV3Dybw3Yq_qfSA) 提取码: fejw
[教程来自YouTube-ESXI8虚拟机下iKuai +OpenWrt，最强双软路由组合安装教程](https://www.youtube.com/watch?v=TxnMPYra0XI)

6.7(来自Bigdongdong)：[https://drive.google.com/drive/folders/1gssTBxJL5lcDx0y1xajZ_SOuqglx4ahZ?usp=sharing](https://drive.google.com/drive/folders/1gssTBxJL5lcDx0y1xajZ_SOuqglx4ahZ?usp=sharing)‘
[教程来自YouTube-保姆级工控机软路由安装虚拟机VMware ESXI和openwrt系统](https://www.youtube.com/watch?v=kcvkp1ckSmM)

7.0: [https://pan.baidu.com/share/init?surl=QgZcxo1UV3Dybw3Yq_qfSA](https://pan.baidu.com/share/init?surl=QgZcxo1UV3Dybw3Yq_qfSA) 提取碼: g2su
[教程来自YouTube-保姆級ESXI7.0安裝](https://www.youtube.com/watch?v=ii8tmLLM2Zk)

<span style="color:#a1b56c">6.7大全</span>: [全网最全ESXI6.7各个版本下载包含发布时间版本号MD5/SHA1 https://blog.whsir.com/post-5720.html](https://blog.whsir.com/post-5720.html)



# 开启Shell和SSH功能
这个需要在物理机上安装完ESXi后直接设置，在网页上设置了没效果。
具体也很简单，参考教程：[VMware EXSi6.0 开启Shell和SSH功能 Windows10安装SecureCRT远程控制解决VMware vSphere Client无法连接ESXi虚拟服务器主机 https://blog.csdn.net/nailwl/article/details/105579363](https://blog.csdn.net/nailwl/article/details/105579363)
1.登录，按F2，底部有提示，输入账号root和密码
2.进入Troubleshooting Options
3.把ESXi Shell和SSH启用：回车后Enabled，再回车就Disable了，回车是个好东西，切换状态。
4.顺便在Configure Management Network里把网络设置下如果有需要的话。

# 许可证（这个在网上也很容易找到）
VMware-ESXi-6.7.0/VMware vSphere 6 Enterprise Plus: <span style="color:#dc9656">0A65P-00HD0-3Z5M1-M097M-22P7H</span>
ESXi 8: <span style="color:#dc9656">4V492-44210-48830-931GK-2PRJ4</span>
VCSA 8: 0Z20K-07JEH-08030-908EP-1CUK4
ESXi 8: 4F40H-4ML1K-M89U0-0C2N4-1AKL4
VCSA 8: 0F41K-0MJ4H-M88U1-0C3N0-0A214
ESXi 8: HG00K-03H8K-48929-8K1NP-3LUJ4
VCSA 8: 4F282-0MLD2-M8869-T89G0-CF240
vSAN 8: NF212-08H0K-488X8-WV9X6-1F024
vSAN 8 witness: JF61H-48K8K-488X9-W98Z0-1FH24
Horizon Enterprise v8.x: 0G4DA-49J81-M80R1-012N4-86KH4
Refer: [VMware-ESXi-6.7.0许可证 https://blog.51cto.com/jameszhan/2314626](https://blog.51cto.com/jameszhan/2314626)

# Wget的问题，Wget无法下载文件
在SSH中输入以下命令：
```
esxcli network firewall get
esxcli network firewall unload  
```
Refer: [原来esxi安全策略默认不可以从外面wget东西的哦 https://blog.csdn.net/vbaspdelphi/article/details/65443122](https://blog.csdn.net/vbaspdelphi/article/details/65443122)
另外说下为什么用Wget，因为这样传起文件比scp/ftp方便多了，而且也不是什么系统都支持ftp，但是wget是绝大多数系统自带的。
服务端只用从命令行启动httpserver就行，具体来说Windows下可选`scoop install simple-http-server`，或者nodejs版本的httpserver(这个环境太麻烦了)，或者`pip install httpserver`然后`httpserver`启动即可(python的httpserver太垃圾了，别用这个了)；Mac下用：`brew install http-server`会装上nodejs版的。
然后在网页上选好文件复制链接，`wget`就好了。
又稳定又快。

# ESXI升级或降级HBA驱动
这个没啥用，我在8.0系统的时候由于驱动问题试过，留下收藏下

VMware兼容性查询网站: [https://www.vmware.com/resources/compatibility/search.php?deviceCategory=io](https://www.vmware.com/resources/compatibility/search.php?deviceCategory=io)
ESXI升级或降级HBA驱动: [https://blog.csdn.net/jkxiaoshao/article/details/120609303](https://blog.csdn.net/jkxiaoshao/article/details/120609303)

# 后续
三大虚拟系统：EXSi，PVE和Unraid，到目前只剩下PVE了，但据说WEB UI简陋+还要命令行，或许可以在EXSi中再开个PVE的虚拟机尝试下。