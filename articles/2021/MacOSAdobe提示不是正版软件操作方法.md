2021-06-03
Visibility: Public

自从Adobe推出验证系统后，个别用户使用破解版Adobe软件的过程中会检测并提示盗版软件，如果你的软件也出现了Adobe的正版验证指示：Adobe Genuine Integrity Service？那就赶紧来试试吧！

处理方法一：

请关闭所有Adobe软件，然后在终端输入代码

```
    sudo rm /Library/Application\    Support/Adobe/AdobeGCClient/AdobeGCClient.app/Contents/MacOS/AdobeGCClient

```
输入密码(密码输入不可见)按回车，完成后重启Adobe软件即可正常使用！

处理方法二：

如果有安装Acrobat的话，打开Acrobat在设置里把更新关掉。没有安装Acrobat的用户请忽略。

Acrobat>preferences>Updater>Do not download or install updates automatically

注意：现在新版的Adobe Acrobat DC首选项里面已经没有【自动更新】选项了。

1、关闭所有Adobe相关软件

    打开Finder，前往以下路径Library（资源库）>Application Support>Adobe>AdobeGCClient

2、右键这个文件夹下的AdobeGCClient，选择显示包内容

3、继续***以下路径Contents>MacOS>AdobeGCClient删除(移到废纸篓)这个文件夹下的AdobeGCClient （删除后启动ps会重建）

