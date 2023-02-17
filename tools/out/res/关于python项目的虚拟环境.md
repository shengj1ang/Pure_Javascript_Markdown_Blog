关于python项目的虚拟环境
date: '2022-10-28T23:16:00.009+01:00'

---
 虚拟环境真的非常好用。

1. 创建：python -m venv [虚拟环境的名字]

2. 激活：Unix: source [虚拟环境的名字]/bin/activate

            Win: call [虚拟环境的名字]/scripts/activate.bat

                    或者./scripts/activate.bat

3. 激活完成就可以在虚拟环境里运行pip和python等了，虚拟环境不会影响外界。

4. 去激活：deactivate

  


5. 其它：

- 关于导出requirements.txt: pip freeze > requirements

- 关于shell脚本进入虚拟环境+后台运行：

#!/bin/bash -x

PWD=`pwd`

echo $PWD

activate () {

    . $PWD/venv/bin/activate

}

activate

cd production

nohup python3 main.py > log.log 2>&1 &

exit

-Windows上Bat或者Cmd的脚本：

@echo off

cmd /k "call venv/scripts/activate.bat & cd production & python main.py  & call ../venv/scripts/deactivate.bat & pause & exit"

  


6. 国内配置pi源

(1)在我的电脑上的地址栏输入：%appdata% ，然后回车；

(2)在里面新建一个名为 pip 的文件夹；

(3)在 pip 文件夹里面新建 文件pip.ini ,内容如下:

[global]

timeout = 6000

index-url = https://pypi.tuna.tsinghua.edu.cn/simple

trusted-host = pypi.tuna.tsinghua.edu.cn

  


7. 关于 error: Microsoft Visual C++ 14.0 or greater is required. 的问题。

Details: [stackoverflow](https://stackoverflow.com/questions/64261546/how-to-solve-error-microsoft-visual-c-14-0-or-greater-is-required-when-inst)

1. Go to this link and download Microsoft C++ Build Tools: <https://visualstudio.microsoft.com/visual-cpp-build-tools/>

2. vs\_buildtools.exe --norestart --passive --downloadThenInstall --includeRecommended --add Microsoft.VisualStudio.Workload.NativeDesktop --add Microsoft.VisualStudio.Workload.VCTools --add Microsoft.VisualStudio.Workload.MSBuildTools

  
[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrwuvUP7M7V5m7f8xZBUK0hRDS1FcWJfbrni8BHBLM3mMqRHuX5KHRQpn0n9OjDSFgPhtILkuPggFSFzQMIBWFpvczlnSdfIq9ycEVlSWRYHBrvDiKsu_4vNznTTMNjotG3Nkaas2fsqyumwWMRR6vchyCBYwSudYTno5-3I_KikNNTtZMiCsQOuei/w468-h272/vs.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhrwuvUP7M7V5m7f8xZBUK0hRDS1FcWJfbrni8BHBLM3mMqRHuX5KHRQpn0n9OjDSFgPhtILkuPggFSFzQMIBWFpvczlnSdfIq9ycEVlSWRYHBrvDiKsu_4vNznTTMNjotG3Nkaas2fsqyumwWMRR6vchyCBYwSudYTno5-3I_KikNNTtZMiCsQOuei/s1760/vs.png)  
  

