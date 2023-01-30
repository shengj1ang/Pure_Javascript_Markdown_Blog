---
date: '2021-11-25T14:14:00.005+01:00'
description: ''
published: true
slug: 2021-11-networkmanager
tags:
- http://schemas.google.com/blogger/2008/kind#post
- legacy-blogger
time_to_read: 5
title: "\u89E3\u51B3 NetworkManager \u5185\u5B58\u5360\u7528\u8FC7\u9AD8\u7684\u95EE\
  \u9898"
---

*This was originally posted on blogger [here](https://sheng-jiang.blogspot.com/2021/11/networkmanager.html)*.

<p>&nbsp;Centos 7</p><div class="separator" style="clear: both; text-align: center;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2Se4511lYK67kSlJy31mqn7WHZQmyXTO4uqQWVrbvspB7NVIoWZgYm7aroL6kxtQZQYMWdBKJfFPKv6dUrwW7L6nHS98IabzGtjjSb0WgFdQIVRdS-e9-s72a__e3pFrqxqAUpIjU61SczJYOotkfiZd-8BW9xbL2zm_rqG1YhXbiC6xbAgq5B0Hc/s1128/Screenshot%202022-03-23%20at%2011.16.50%20AM.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="85" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2Se4511lYK67kSlJy31mqn7WHZQmyXTO4uqQWVrbvspB7NVIoWZgYm7aroL6kxtQZQYMWdBKJfFPKv6dUrwW7L6nHS98IabzGtjjSb0WgFdQIVRdS-e9-s72a__e3pFrqxqAUpIjU61SczJYOotkfiZd-8BW9xbL2zm_rqG1YhXbiC6xbAgq5B0Hc/s320/Screenshot%202022-03-23%20at%2011.16.50%20AM.png" width="320" /></a></div><br /><p><br /></p><p>参考 https://support.huawei.com/enterprise/zh/doc/EDOC1000099509/a6d7ea73 这篇文章, 这个问题是 NetworkManager 的设计缺陷, 在特定情况下产生了大量的内存碎片.</p><p><br /></p><p>解决办法就是重启进程.</p><p><br /></p><p>在 Centos 7 中, 使用 systemd 进行进程管理, 所以重启的命令就是 <b>systemctl restart NetworkManager .</b></p><p><b><br /></b></p>