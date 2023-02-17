黑群晖踩坑-蜗牛星际D款

date: '2022-06-18T19:33:00.008+01:00'

---
周末时间折腾下-蜗牛星际D款，以下是踩坑记录。

  


先写个总结：

安装只需要在PE里把二合一的镜像(.img或者.zip)用任意刷盘工具 刷入mSATA，完全不需要U盘来做引导。

洗白也很方便，在PE用diskgenius把grub文件导出，用notepad修过 VID PID（这个是mSATA的VID和PID，可能需要拔出来，在其它电脑上读。）还有taobao上买的SN和MAC。但是那个二合一的镜像其实是半洗白的（就是一堆人共用SN和MAC）。

  


这次尝试下新的记录方法，日志型。

Jun18：

不只什么原因，下载了*咸鱼*，翻了翻本地卖家，一眼就看到了蜗牛星际D款，价格是380元多，搜了搜是没看到比这还便宜的。

问什么货没被卖掉呢？因为卖家只支持面提，而且声称自己什么都不会（不提供技术辅导，小把戏），没怎么用过，系统装换了，听口气是前一个退货的装坏的。硬件上只换过风扇（我总感觉这两句话是悖论，不会用，还拆风扇，还能去买蜗牛星际。），当天下午咨询，他发了亮机视频BIOS啥的，晚上我直接去拿了，我叫他找个袋子给我装好。当面确定收货，他还当面和我说不能退了（应该是放屁，听他的意思好似之前已经卖过被别人退会来了，我不能想象我和他住这么近，要是退款了，他这么抠的人想不开），但效率是真的高。可是回来才发现，只有机器本体，连电源线都没有（卖家真是抠门至极），问他说，缺电源线，于是果断把咸鱼卸载了），好在我翻了翻找了根线，看能开机。另外，我看了别人评价蜗牛星际，那里要换这里要换，拆开来看了看硬件。除了内存的牌子淘宝上搜不到，其它还是能找到了。我本来想换下那个黑牌内存条的，因为我记得我还有两条内存条，结果我一看内存条，HP的4G内存是2010年生产的，还有个只有2G，所以还是不换了。还需买有线键鼠（40元）、电源线（10元）

Jun19：

1. 本来想等配件全到了在弄，但突然想插电视上看看，顺便把WePE的U盘也插上了，结果进了PE，我没有键盘，所以开机只能靠BIOS里设置的顺序，我猜是USB然后再是硬盘上的mSATA。

我先运行了工具测试了下mSATA的SSD，读160mb/s，写只有20mb/s，详细的我忘了。CPU看了看J1900。运行内存测试时，直接黑屏了，风扇还在转，等了一会还是没有反应，只能拔电源了。不敢再测了。

然后我就现学，为了洗白群晖，还去淘宝买了洗白用的码（30元），卖家推荐j1300的CPU用DS3617xs的系统，卖家顺便也给我发了两个镜像（但那时我不知道这个镜像是用来引导内置SSD的），卖家说“优先1.03装6.2.3，如果搜不到设备1.02装6.1.7”，真把我害惨了，我也好好看了说明（卖家给了一个文件夹的说明，但和我这个相差甚远），用DISKGENIUS改某个文件。装完我以为完事了，放进机柜，结果很久都搜不到，但是连上电视屏幕，无法再进PE了，所以它的引导顺序是硬盘上的mSATA再是USB，所以我只能手动拆机把SSD拆除来。这可费了我大劲了，主板不好拆出来，螺丝刀又伸不进去，我只能大费周章用老虎钳拧螺丝，螺丝松了之后用手🤏。反正就是拆了老半天，装回去是更费劲，我发现闭着眼睛纯凭手感一下子就能拧上去。幸好我还是有mSATA转USB的，所以可以插电脑上操作了。

  


2. 本来想用mac的vmfusion进PE操作的，结果vmfusion开机就一闪而过，我重启了好多次，才看清楚，F2 BIOS，F10网络安装，F12忘了，反正没U盘选项。又跑去换了台电脑，进了PE。我网上查了查了解到还要用芯片精灵看U盘什么信息，结果芯片精灵用不了了，突然意识到为什么要用PE系统。回到Windows，按部就班格式化了mSATA，然后刷入引导镜像，diskgenius改了PID、VID、SN和MAC。最后费了大劲装把mSATA回去还把机箱也装回去了。

  


3. 终于能找到设备了，结果装不了系统，显示格式化磁盘失败。

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfzfHVBkkPqf6g0uaRwuMHCAlZ2v35Lss2R9I5sNkHPQbROutay3-XMmiVzAB8Q-iTOQoK4oPYvpzhszD6AN3d-JwPvPfZF_2BtCwInT8EnGqn8yywBFu4YycY9VplX0EUhumI8ZvbX-eKG_5Z5z3h6T0viaT_ofxgRiPzx6tgs5LppLIbGg4spzRc/w316-h237/IMG_1018.JPG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgfzfHVBkkPqf6g0uaRwuMHCAlZ2v35Lss2R9I5sNkHPQbROutay3-XMmiVzAB8Q-iTOQoK4oPYvpzhszD6AN3d-JwPvPfZF_2BtCwInT8EnGqn8yywBFu4YycY9VplX0EUhumI8ZvbX-eKG_5Z5z3h6T0viaT_ofxgRiPzx6tgs5LppLIbGg4spzRc/s4032/IMG_1018.JPG)  
卖家“搜不到设备估计是螃蟹卡，要找专门的，螃蟹卡引导。店铺不安装系统哦。需要先自行安装完，才能洗白诶，如果装不上，明天帮您申请退吧”。我还是坚持了，突然想到，这镜像不是用来引导的吗，肯定是要用U盘先引导的，还有之前那次失败可能是没改PID和VID。于是我又拆了mSATA格式化，此处省略。同时，我也在准备U盘，我发现一块小U盘都找不到了，只能去服务器上拔了一块，然后在U盘里刷入引导镜像，diskgenius改了PID、VID、SN和MAC。机器装好，再联机，终于可以安装了。[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIqU9RPx8AmUSdAyB6mSt3uc4yod5mh251I38AndDYh5JbT4yvHCeivrWh-vYccX2OMphSEfE_DhGsOwc4hf0d4M0IkdO2b6NLbseAf-IieCQEdKh_0oWka8Bij2CiVSF0MzwkM5lQptiggFjVqiSXHllNeBUNb4GK-lg0CsexqddQ5-pFIMIjc7EI/s320/Screenshot%202022-06-19%20at%2012.48.22%20AM.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjIqU9RPx8AmUSdAyB6mSt3uc4yod5mh251I38AndDYh5JbT4yvHCeivrWh-vYccX2OMphSEfE_DhGsOwc4hf0d4M0IkdO2b6NLbseAf-IieCQEdKh_0oWka8Bij2CiVSF0MzwkM5lQptiggFjVqiSXHllNeBUNb4GK-lg0CsexqddQ5-pFIMIjc7EI/s2880/Screenshot%202022-06-19%20at%2012.48.22%20AM.png)我在WinServer上的Clash里看了，下载速度还是挺快的，有跑到200Mbps，连接的群晖官方的网址（https://global.download.synology.com）。结果，过了一会说是要重启给我十分钟，我以为是去拔U盘了，就直接把U盘拔了，现在想想是因祸得福。拔了自然安装失败，但是后来我了解到这块U盘不能拔，每次开机都是它做引导。这时回想起来，之前拆过一台黑群晖，里面有两块SSD，原来是这个原因。但是引导镜像就50Mb，我要是真装成功了，这64Gb的U盘算是废了。我估计联网洗白的时候，PID、VID、SN和MAC要全绑上的，那时我就换不了U盘了，所以是因祸得福。

  


4. 截止到现在已经凌晨两点了，我还是等配件吧。这坑实在是多。我可能还要买个小U盘（15元），我考虑8G，因为我还是不清楚引导盘数据会做修改吗，大概率不会。此外，我还要买4块盘，容量肯定是越大越好，我打算控制在1500元内，好让这次不算时间的成本控制在：380+40+10+30+15+1500=1975元，正好够到NAS本体的价格。除去硬盘475元，淘宝上目前703元，那剩下的200元就算我时间成本了，好在还是学到一点点东西的。最后，我猜想一下晚点键盘到了BIOS要怎么设置：USB优先，然后再是mSATA的SSD。其实，我今天弄，费这么大的劲还不如等键盘到了再说，这样就不用拆了拆去了。

  


Jun19:

今天去买了3块U盘，一共150，真是巨亏，因为完全没用到。

用昨天的方法安装，安装完毕等待10分钟中后还是无法使用。

我突然想到昨天还下载了二合一的镜像，于是直接刷到mSATA上了。（需要获取mSATA的VID PID，我又把它拆了出来）。二合一就不需要插引导U盘了，而且系统也是直接装好的。

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmsHslA45Xn7TNr8UOuNG8aGg7emkh-zKbTjiHJFTm2eM2a7O9k7oPqJ-vcZQFqYUNi_Xy9zm1AKxeVoapEiEY8kKkFIbtIz0aD2LNKCayNa_PM33vEI-d9mh6Qnx8RZ1wL4EphWMgcJdTmYrXJW7UlBoddGSkSzE_jd8uXEuemj3_TcnCwKGG6PN3/s320/Screenshot%202022-06-19%20at%205.29.21%20PM.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhmsHslA45Xn7TNr8UOuNG8aGg7emkh-zKbTjiHJFTm2eM2a7O9k7oPqJ-vcZQFqYUNi_Xy9zm1AKxeVoapEiEY8kKkFIbtIz0aD2LNKCayNa_PM33vEI-d9mh6Qnx8RZ1wL4EphWMgcJdTmYrXJW7UlBoddGSkSzE_jd8uXEuemj3_TcnCwKGG6PN3/s2880/Screenshot%202022-06-19%20at%205.29.21%20PM.png)[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg80zivQhQTOClpMf8_9KFsSQvUafWpwNat08X-5TqlPflBTOoc1dz1Xk6yBbt1iWOzNbpWSRnvLDUoZzIf78r5a2RXoNqoWypR6O9u45CPtYmkg80Apn5mQHV3vd6WKMyuVJYeETgl1VTi_2gHDeCMerdHKuPDBAc_RHoqoPgGD4dJMt5JIG88x4Qj/s320/Screenshot%202022-06-19%20at%205.38.27%20PM.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg80zivQhQTOClpMf8_9KFsSQvUafWpwNat08X-5TqlPflBTOoc1dz1Xk6yBbt1iWOzNbpWSRnvLDUoZzIf78r5a2RXoNqoWypR6O9u45CPtYmkg80Apn5mQHV3vd6WKMyuVJYeETgl1VTi_2gHDeCMerdHKuPDBAc_RHoqoPgGD4dJMt5JIG88x4Qj/s2880/Screenshot%202022-06-19%20at%205.38.27%20PM.png)稍微设置下[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkNUyMaPev2Hx8ezwvf0UP74vY670BdgK-8CGEZZhDZNgBFCxVbVpsIXzQwV9Ar5CsX7I7SJRbovEZBL_nx2SbpwzotXSMkQmqw5A8TRqdI1zBQv7MgG9I1BNoYSj7ZJIPihinHdXJwYq94bXcOuqgw8_NyAT_Oc5QRLp8aBGIcT9vxTQB-HHp6Nw-/s320/Screenshot%202022-06-19%20at%205.47.52%20PM.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkNUyMaPev2Hx8ezwvf0UP74vY670BdgK-8CGEZZhDZNgBFCxVbVpsIXzQwV9Ar5CsX7I7SJRbovEZBL_nx2SbpwzotXSMkQmqw5A8TRqdI1zBQv7MgG9I1BNoYSj7ZJIPihinHdXJwYq94bXcOuqgw8_NyAT_Oc5QRLp8aBGIcT9vxTQB-HHp6Nw-/s2880/Screenshot%202022-06-19%20at%205.47.52%20PM.png)  
但是QuickConnect不能用，所以我又联系了商家，换了个码，回PE又改了下。  
然后就是网页上点点的事了。再买4块硬盘就结束了。  
2022年8月 补充下：

前几天有碰到系统盘损毁，刚打算修 结果它自己好了。

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOtHZe6_CSw9K-jcEVDKAR7KMc6f1zLiylyeoVGaO70OFldrnHgEHWa-AVzBQC39pv65bItquh4X8EFFdd8gKVeyrgCCmzjGE069lJVJgVklBeihJUvC_PxlH2mosAF_YCvyMW6yRC34dXNzqizYjqlwiyD3qFPkLKe51dfrdT1QzdsmWtponAfLX4/s320/925C7A2A-CD10-4122-852E-AC0A6CC0E37B.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhOtHZe6_CSw9K-jcEVDKAR7KMc6f1zLiylyeoVGaO70OFldrnHgEHWa-AVzBQC39pv65bItquh4X8EFFdd8gKVeyrgCCmzjGE069lJVJgVklBeihJUvC_PxlH2mosAF_YCvyMW6yRC34dXNzqizYjqlwiyD3qFPkLKe51dfrdT1QzdsmWtponAfLX4/s1792/925C7A2A-CD10-4122-852E-AC0A6CC0E37B.png)  
网上搜索了下，<https://tieba.baidu.com/p/6892359075>，得把smart任务关了 <https://web.archive.org/web/20220810022705/https://tieba.baidu.com/p/6892359075>[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8d-tUSXMwXGGQZOQpLeG-cIsIMWTgyRhTVAImO1C2gsDDH93rj0hGjPubxIWnbAxFO3FDz0L_jDn8ZDAO2EblmDYaA8ywGGsOwhMRoEYbpY0l6uWAg7jpqRTRaQDSyHNW6ByAkQmOlwD1b8ObTx9b8FJ0sb3J2BL9glqST5haH3y4Xl7__vt_ck6t/s320/100CC859-EDCA-487B-8B37-DD96A11DE871.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8d-tUSXMwXGGQZOQpLeG-cIsIMWTgyRhTVAImO1C2gsDDH93rj0hGjPubxIWnbAxFO3FDz0L_jDn8ZDAO2EblmDYaA8ywGGsOwhMRoEYbpY0l6uWAg7jpqRTRaQDSyHNW6ByAkQmOlwD1b8ObTx9b8FJ0sb3J2BL9glqST5haH3y4Xl7__vt_ck6t/s1792/100CC859-EDCA-487B-8B37-DD96A11DE871.png)  
  
  
  


  



