2023
Visibility: Public


Unraid使用记录

原因有二：装Windows Server 2016的机器老是自己挂，而且不能远程把挂掉的系统重启；8G的内存占不满。


* 安装Unraid (开心版)
需要一个U盘（需要品牌的，据说杂牌可能没有GUID，那就没得搞）

下载Unraid.USB.Creator，主要查看U盘GUID而已
下载链接：[https://pan.baidu.com/s/1IjE4AN4aOupNLWLnASWPpg?pwd=wsm2](https://pan.baidu.com/s/1IjE4AN4aOupNLWLnASWPpg?pwd=wsm2)
提取码：wsm2

下载Unraid开心版6.10.3包
下载链接：[https://pan.baidu.com/s/15mFJKBSrKGIyWU0pe0-9PA?pwd=agjv](https://pan.baidu.com/s/15mFJKBSrKGIyWU0pe0-9PA?pwd=agjv)
提取码：agjv
解压密码：boxmoe.com

首先解压Unraid开心版6.10.3 ，下载上面的压缩包会得到两个文件夹
第一个文件夹<span style="color:#ab4642">crack</span>
第二个文件夹<span style="color:#ab4642">unRAIDServer-6.10.3-x86_64</span>

<span style="color:#ab4642">crack</span>文件夹
里面有一个 <span style="color:#ab4642">GO</span> 和 <span style="color:#ab4642">key</span>文件
用文本编辑软件打开修改<span style="color:#ab4642">GO</span>文件里的<span style="color:#ab4642">UNRAID_GUID</span>为你的U盘GUID，第一步必须修改的GUID就完成了
U盘GUID查看就打开下载的Unraid.USB.Creator，打开的时候就会显示出来了。
将修改好的 GO 和 key 文件复制覆盖到 unRAIDServer-6.10.3-x86_64/config/里就好了。

格式化U盘和复制文件进去：
1.格式化U盘，并命名U盘为 <span style="color:#ab4642">UNRAID</span> 必须是大写
2.将<span style="color:#ab4642">unRAIDServer-6.10.3-x86_64</span>里的文件复制到U盘根目录就行
3.运行U盘文件里的<span style="color:#ab4642">make_bootable.bat</span> 脚本，按Y。 完成后就可以开始安装了。

最后一步：
1. 将做好的U盘插入要安装的主机，然后启动主机，（建议进入bios里设置下优先启动盘为U盘）
2.启动过程中啥都不需要管，加载完成后会在最下面出现一个局域网IP地址。
3.获得IP地址后在另外台同局域网下的电脑或者手机浏览器输入IP地址访问，就会直接进入设置密码。到这里就已经完成了安装。

* Unraid汉化

第一次登陆GUI界面会让你设置密码
1. 登录
2. 点击  【Tools/Language】
3. 输入 [https://gitee.com/ouiae/language-templates/raw/master/limetech/lang-zh_CN.xml](https://gitee.com/ouiae/language-templates/raw/master/limetech/lang-zh_CN.xml)
4. 点击【install 】然后耐心等待。安装完成。
5. SETTINGS/DisplaySettings
选择【简体中文】---》点击【apply】即可


* 虚拟机驱动
[https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/archive-virtio/](https://fedorapeople.org/groups/virt/virtio-win/direct-downloads/archive-virtio/)

我尝试安装的镜像：[Windows 7 Super-Nano Lite （无法开启远程桌面，仅记录在此，还是建议安装Windows Server）](https://archive.org/details/windows-7x-86-supernano-final)

手动安装网卡驱动：
1. 进入网卡驱动程序所在目录：
```
cd E:\NetKVM\2k12R2\amd64
```
2. 安装驱动：
```
_****pnputil -i -a *..inf。****_
```

* 挂载NTFS的硬盘
首先在插件页，粘贴插件链接地址安装UD插件，安装链接：[https://github.com/dlandon/unassigned.devices/raw/master/unassigned.devices.plg](https://github.com/dlandon/unassigned.devices/raw/master/unassigned.devices.plg)

安装完毕，重启一下服务器，插入数据移动硬盘.打开MAIN标签往下翻，即可看到外接的移动硬盘。
挂载成功后，并开启共享，在“此电脑”地址栏，输入unRAID管理地址，即可看到挂载完毕的移动硬盘了。

* 有用的插件/应用
1. 查看CPU内存网络等信息：mauricenino/dashdot:latest
2. Dynamix System Information

 


Refer:
[\[亲测可用\]Unraid开心版6.10.3与安装教程](https://www.boxmoe.com/642.html)

[Unraid 6.10.3汉化教程](https://www.right.com.cn/forum/thread-8251164-1-1.html)

[Windows虚拟机安装VirtIO网卡驱动](https://help.aliyun.com/apsara/agile-cnstack/v_2_1_0_20230413/cnstack/user-guide/windows-virtual-machine-install-virtio-network-interface-controller-driver.html)

[unRAID 篇一：unRAID如何挂载NTFS格式的移动硬盘](https://post.smzdm.com/p/a25g99on/)