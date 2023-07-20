2021-09-12
Visibility: Public


 -去年我写了一篇用华硕路由器定时启动的教程，最近换了新的openwrt做主路由。自然也要改改版了。



1.如果需要可以先去找找之前那个教程。

2.试验是否有命令可用。


openwrt


这个系统里面wake-on-line的命令不同。

usage: 
```
etherwake [-i <ifname>] [-p aa:bb:cc:dd[:ee:ff]] 00:11:22:33:44:55
```


3.显然是可以唤醒的，现在添加一下计划任务，有GUI界面，我就不麻烦自己了。

```


50 4 * * 0 etherwake 1C:39:47:CE:11:C9 #LenovoSunday#
55 3 * * 1 etherwake 1C:39:47:CE:11:C9 #LenovoMonday#
00 5 * * 2 etherwake 1C:39:47:CE:11:C9 #LenovoTuesday#
40 4 * * 3 etherwake 1C:39:47:CE:11:C9 #LenovoWednesday#
10 5 * * 4 etherwake 1C:39:47:CE:11:C9 #LenovoThursday#
33 3 * * 5 etherwake 1C:39:47:CE:11:C9 #LenovoFriday#
05 5 * * 6 etherwake 1C:39:47:CE:11:C9 #LenovoSaturday#
```