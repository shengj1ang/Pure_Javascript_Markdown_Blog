2018-12-15
Visibility: Public



在cmd中输入并执行以下命令: 

```
taskkill /im explorer.exe /f

cd /d %userprofile%\appdata\local

del iconcache.db /a

start explorer.exe
```



这样就行了。





也可以写在bat里方便运行。

题外话： 记得在小学的时候，360电脑医生里面有这个功能哈，其实实现很简单。