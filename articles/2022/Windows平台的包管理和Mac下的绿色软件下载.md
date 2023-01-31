创建日期: 20221102 18:55:00 UTC
---
Windows平台的包管理

- 前言：包管理命令行打起来比较方便，省去了找寻的步骤（但是是在你记住的情况下）。 在Windows平台下的包管理搜索了下有Scoop和Chocolatey两种。


- 到目前使用感受：

    这两个在PowerShell安装完了都可以直接在CMD用。

    国内没开代理的机器就是非常慢点，还是能用的。 国内镜像稍微看了看，没看到很好的。

    搜索引擎结果上Scoop总是被吃的所占据，Chocolatey能显示在第一条。

    我如果有什么新的尝试会在这里更新。



- 安装

    1. Scoop

        以管理员权限运行Powershell：start-process PowerShell -verb runas

        非管理员安装：

            Set-ExecutionPolicy RemoteSigned -Scope CurrentUser # Optional: Needed to run a remote script the first time

            irm get.scoop.sh | iex

        管理员安装：

            [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

            Set-ExecutionPolicy RemoteSigned -Scope CurrentUser # Optional: Needed to run a remote script the first time

            .\install.ps1 -RunAsAdmin

            irm get.scoop.sh | iex

    2. Chocolatey

        Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

- 使用：

    包管理都差不多，scoop install xxx, choco install xxx.

    新接触的建议先查询再安装，Windows上有些包名字不一样，还有图形界面。 scoop的包可以在官网上首页直接查询，相关安装命令也提供了。Chocolatey可以在Community里Find Package。

    Scoop可以添加额外的“桶”：scoop bucket add extras

---------------------------------------------------------------------------------------------------------------------

*Mac下的软件下载 往后跳过这段。

- 20221107 关于这篇的后续。

    尝试在MacBook2020上安装Windows10：原因其一是由于SolidWorks只能安装在Windows上，虚拟机用得太难受。其二是游戏，想在Mac上玩GTA，Geforce Now也没有。虚拟机里面没办法运行ssjj。 我这么一合计就装Windows吧，以后不用MacOS了。其次就是这个包管理了，这样开发好移到Win上。

    我行动前大概估计了下成本，毕竟资源都在远程，换系统也是弹指一挥的难度。但是更换完后需要为此牺牲点使用体验罢了。之前刚开始用的时候也装过Win，由于完全没用过后来就删了。没想道深入使用这么多问题。如果失败了正好借机重置并更新下系统到Ventura。

    但是为了装Win，我为此还erase了macOS以获得足够的空间，然后500G划了450G给Windows。中间步骤省略。

    图片：

    


这是我唯一觉得这是好的地方

延迟高，但是我没好好体验，急迫地测试其它项目

其它的图片都是错误太多了不贴了

    问题：

        1. 刚开始用就觉得 触控板用起来感觉非常难受，改了某些设置正常起来。

        2. scoop是挺好，有些狗屁破包就是编译不出来，修了这里那里坏，同样的环境明明测试过了，到这里就用不了了。

        3. 截图不如Mac方便

        4. 设备间不能互传，这个可以通过telegram勉强解决

        5. 文件预览不方便，macOS空格一下就可以预览各种文档。

        6. 图片OCR

        7. 主要 问题就是触控板和屎一样难用，感觉是苹果故意的，难道无心开发。程序间没法三指切换我也忍了。

        8. Airpods Pro连上了播放的音质和屎一样 断断续续的，照网上教程改了没有任何效果。 airpods连到其他Win机器上也不会这样。

        9. 装了一下午的gta居然打不开，rockstar无限重启，我估计是美国账号不能在英国用导致的，韭菜还分园子，这说明统一的重要性。我今天还看Lisa在一个韩国节目上讲韩文，感叹这么个东亚，一个艺人为了市场||生存，要这么多语言，到中国还需要尝试中文。 若是大东亚共荣了，对于他们岂不是好事。（并不指全球化，语言未统一，无法受益于群众）

        10. 潜在问题：🔋能源消耗，没带出的不好体验。但是唤醒不如MacOS。

    总结：

        所以如果你的要求和我一样高，Mac还是别装Boot Camp了，用用虚拟机吧。

        回想起来，Win的笔记本不用鼠标，触控板确实都很难用。玩游戏还是配台式机吧。

---------------------------------------------------------------------------------------------------------------------

 Mac下的软件下载
所以，我又换回MacOS了，但是之前的破解软件都没了，现在会员也没了，稍微找了下。

1. AppStorrent - Игры и программы для macOS 俄罗斯的破解站，这个挺好。

2. hereitis 国内的，这个还没试。


对了，Mac的包管理可以用brew，链接在此：https://brew.sh/






