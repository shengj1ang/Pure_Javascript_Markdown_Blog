2018-07-10
Visibility: Public



联想ThinkPad 黑将S5一款全新推出的15.6英寸笔记本，英特尔 酷睿i5 6代系列带来的强大性能让这款新品得到了跨越式的性能提升 。预装的是win10系统，网友还是不是很喜欢win7的体验感，采用的是6代以上的CPU，在安装win7时usb3.0设备无法使用，安装时要设置bios和下载新机型的WIN7（集成usb3.0驱动的镜像）那么ThinkPad 黑将S5笔记本如何把win10改成win7系统呢，下面小编就根据这款笔记本给大家制作一个win10改win7系统教程。



本文的图片迁移的时候丢了。。。



操作步骤：



一、操作准备工作：


2、U盘启动盘工具下载：U盘启动盘工具下载(PE特点：1，绝无捆绑任何软件的启动盘。2，支持PE自动修复UEFI+GPT引导。3，支持LEGACY/UEFI双引导。4，一键装机自动注入usb3.0和nvme驱动)



（制作U盘PE启动盘视频教程） 



2、WIN7系统下载：联想笔记本WIN7 64位系统（支持8代CPU集显+NVME固态+USB3.0）





二、ThinkPad 黑将S5笔记本win10换win7系统bios设置步骤（安装WIN7重要一步）


1、重启笔记本按F12，按TAB键切换栏目到"App Menu"，然后选择"setup"进入BIOS设置，或是看到lenovo或ThinkPad标识后多次按Enter回车，听到报警声后等待下一画面，然后按F1或Fn+ F1进入BIOS主界面。如下图所示；



 


2、按→方向键移动到Security，将secure boot改成disabled，关闭安全启动，无论是uefi还是legacy模式安装都要关闭安全启动，否刚安装win7后也启动不了，如下图所示；




3、按→方向键移动startup,把csm support，设置为Yes(开启兼容模式)，如下图所示；





4、选择startup,在UEFI/legac boot priority下，设置为Legacy First(传统模式优先)，改了传统模式记得硬盘分区类型要改成MBR格式，如下图所示；

5、最后按→方向键移动在Restart下，选择OS Optimized Defaults回车，改成Disabled或Other OS，开启支持win7系统选。接着选择Load Setup Defaults回车进行加载,然后按F10保存设置。

6、保存设置后自动重启进入LOGO画面时，一直按F12，选择U盘启动，如果是uefi引导这里选择uefi开头的U盘，如果是legacy引导这里选择usb hdd开头的U盘，如下图所示；

三、改硬盘分区格式为MBR分区(安装WIN7转化分区格式)

1、选择U盘启动盘进入PE后，在桌面上运行DiskGenius分区工具，点击菜单栏的【硬盘】，选择【转换分区表类型为MBR格式】，然后点击【快速分区】进行分区；


详细GPT分区转MBR分区教程进入   



四、ThinkPad 黑将S5安装WIN7系统
使用微PE和MSDN I TELL YOU的Win7 SP1 镜像安装。
驱动使用驱动总裁万能驱动。可在驱动总裁官网下载。