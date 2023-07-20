2019-07-17
Visibility: Public


**安装包损坏，打不开怎么处理？打不开“XXX”,因为它来自身份不明的开发者怎么处理**

方法1.<span style="color:#ab4642">打开terminal</span>，输入

```
sudo spctl --master-disable
```

和密码(密码不会显示出来)。

方法2.

1.打开terminal，在终端中粘贴下面命令：
```
sudo xattr -r -d com.apple.quarantine 
```
然后命令后面输入个空格(注意:命令后面有一个空格)。

2.再将应用程序提示损坏的软件拖拽到命令后面，回车，输入开机密码，密码不会显示，回车即可搞定，其他的软件亦可如此操作。