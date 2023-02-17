Blog方案记录
date: '2022-10-19T11:05:00.013+01:00'

---
 前言：还记得以前惊呼怎么Blog的方案这么少，几天突然意识到已经发现了很多方案了，这里记录下，持续更新。方案不在于多少，而在于好用，另外Blog已经不是今日之趋势了。

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUP8rSTWpUD1iQVW6rpIDmznyqSyOc3yDUOKYD53atZLsMuVpBMaMjknO0cOhfjcd7i3t3SPquNhhhL2evb3Tytig0mpDfbh8CGHd_J2e-MnY4VhEEWv_P9zfcpLUUc4HHEZ24tuQ99Te6QBV9Ri28jiDHwCbITomO-YrSvY6o1iWibMCdSrzvle8r/s320/Blogger.com.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUP8rSTWpUD1iQVW6rpIDmznyqSyOc3yDUOKYD53atZLsMuVpBMaMjknO0cOhfjcd7i3t3SPquNhhhL2evb3Tytig0mpDfbh8CGHd_J2e-MnY4VhEEWv_P9zfcpLUUc4HHEZ24tuQ99Te6QBV9Ri28jiDHwCbITomO-YrSvY6o1iWibMCdSrzvle8r/s1908/Blogger.com.png)  
  


1. *WordPress*，PHP+MySQL

    评：我其实最讨厌这个，因为有各种一键脚本，所以什么也不懂的时候玩这个，但是迁移的时候就麻烦了，还有就是资源占用过高。各种问题就是。但是如果机器足够好，*WordPress*也不是坏选择。免费的话搭建在*000webhostapp.com*上也不是坏方法。

  


2.  *flatblog*，PHP

    评：我就想找个脱离MySQL的，这样方便迁移。所以我在2020年初的时候换到了*flatblog*，但是这个东西用起来很不方便，而且附件不好上传，UI也很差。

  


3. *htmly*，PHP

    评：因为*flatblog*的种种不良表现，经过了解又换到了*htmly*，*htmly*相比于*flatblog*有很大改进，主题可以媲美*WordPress*，所以我用了很长时间，但是是在内网，因为安全问题。关于备份就用*backupFTP*工具。缺点：但是同样是文件附件功能太差，视频只能插入*YouTube*的；所以我修改了代码，添加了很多功能，但是每次一更新就被覆盖了😂；最后就是安全问题，我有次突然发现配置文件可以直接下载，应该是我没有配置到位；文档太少，搜索的时候全是html的相关内容，我开发的时候没加入验证功能，有安全隐患。

  


4. *blogger.com*

    评：就在使用*htmly*的同时，发现了*blogger.com*，很好用就是了。缺点：不好导出；站点账户迁移的时候，如果旧账号注销了，图片会全部消失。国内访问要代理，但可以用*Cloudflare Workers*免费转发，不过会出现一些Bug。

  


5. *https://github.com/Huxpro/huxpro.github.io*, GitHub

    评：通用的md格式文章，但是要编译，我不会。  


  


6. *CFBlog-Plus*, Cloudflare [*GitHub*仓库地址](https://github.com/Arronlong/cfblog-plus) 

    评：开源部署在workers中的js，根据自己的理解，进行自主开发并开源。扩展md编辑器配置，可以自行根据需要修改配置。其他都在README.md里面。

  


总结：最后，还是Blog已经不是今日之趋势了，我只是找个好地方记录下东西，所以越简单越好，简单也要稳定长久，所以我混用*blogger.com*和*htmly*以到达最佳效果。

  


  


  



