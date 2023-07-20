2018-01-04
Visibility: Public




用华为手机默认桌面，经常会触发桌面下滑的ai search，无法关闭，全是广告。

华为系统里怎么都找不到关闭方法，只能靠adb命令了。 


步骤： 

- 网上搜索下载adb

- 手机上启用开发者模式，并且打开adb debug。用USB连接电脑，各种确定键都按按好。

- adb命令
```
adb shell pm disable-user com.huawei.search
adb shell pm uninstall --user 0 com.huawei.search
```