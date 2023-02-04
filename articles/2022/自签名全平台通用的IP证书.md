日期：20221031
---

 前言：由于阿里云的限制，所有带域名的，不管有没有SSL，都无法逃过被拦截，所以可以用IP+域名的方式访问。之前有介绍过IP+PORT转发到DENO和CLOUDFLARE。但是我拿来下文件看视频肯定是会被DENO发现的，所以还是直接访问阿里云为妙，这样延迟也能低点。再者，之前http都是明文传输，我可不想被管理员看见，毕竟我已经见识过他们的技术力了。

 效果：

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6PdNr1C1Vr65MQNi3x3TX1P8DOca8QVd_hXSwSH3iENVKqBg-3356u66aMl1DEyzpbGTtfC_20CXZbJNxxWJITt8VUGVJiWf68zXwSd8XhodgPG1LE2RelJSvbstZK2-zwCCK4Ljpy9O9uAZsdSs7LQPEhKnyI7Jk37vKCnRy1pvURF1frVNqJPAn/w122-h249/ios-1.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6PdNr1C1Vr65MQNi3x3TX1P8DOca8QVd_hXSwSH3iENVKqBg-3356u66aMl1DEyzpbGTtfC_20CXZbJNxxWJITt8VUGVJiWf68zXwSd8XhodgPG1LE2RelJSvbstZK2-zwCCK4Ljpy9O9uAZsdSs7LQPEhKnyI7Jk37vKCnRy1pvURF1frVNqJPAn/s1340/ios-1.png)

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilxa2CoSX_k5TmTA68G3FKBf0dyIX4Wzq7HqWQlp6DgfWO_blmlivXyLiIS5MPqie2waYmGZlzG_8pjc-84pchHtRE9VOSryHYdIAB4IDMkaGjSzvTIBj_vhG8vkGKolsAhGVTXhgewtZCSZXTRynChOeSxImN_2-MSCVvicPy-h5IxWc5PmOv4WBS/s320/ios-2.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilxa2CoSX_k5TmTA68G3FKBf0dyIX4Wzq7HqWQlp6DgfWO_blmlivXyLiIS5MPqie2waYmGZlzG_8pjc-84pchHtRE9VOSryHYdIAB4IDMkaGjSzvTIBj_vhG8vkGKolsAhGVTXhgewtZCSZXTRynChOeSxImN_2-MSCVvicPy-h5IxWc5PmOv4WBS/s1344/ios-2.png)

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5aMLjHVMzI0gnQI8iGGr6JSMAlZQeAXRcSeSQppT1pCQVC1MY3PsZpnQJGQPe2EESOaGjLqiFHJjOWAgg3dR1kOveMcwzBgGs9bJT4WTogfo_kBVyZxhJREVdy4d4NOH9rkAiZ10xkHs_-u7xAv9h-o1nEN33B6nVnJw0Pr8HkM853T_EvjkjyT55/w183-h201/Android-1.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5aMLjHVMzI0gnQI8iGGr6JSMAlZQeAXRcSeSQppT1pCQVC1MY3PsZpnQJGQPe2EESOaGjLqiFHJjOWAgg3dR1kOveMcwzBgGs9bJT4WTogfo_kBVyZxhJREVdy4d4NOH9rkAiZ10xkHs_-u7xAv9h-o1nEN33B6nVnJw0Pr8HkM853T_EvjkjyT55/s644/Android-1.png)

  

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivx21WM7HtaBJC050vx346z7MCtD5aoQ5H3GmG8Q2lgQ76SVMe8X8A_krEiRz4xQJBIni6y-Z9w_pRzFZEZDmI6ymEC0lZpeKyl2-gvz0XXN4ibaHojWwwRH9f6Iam93oB_qxaO4ow1RmCDXo9K9ebNk5khYTpdGJeA4Us7D8PEBtfz_Mp-bNJz8_A/w175-h174/Android-2.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivx21WM7HtaBJC050vx346z7MCtD5aoQ5H3GmG8Q2lgQ76SVMe8X8A_krEiRz4xQJBIni6y-Z9w_pRzFZEZDmI6ymEC0lZpeKyl2-gvz0XXN4ibaHojWwwRH9f6Iam93oB_qxaO4ow1RmCDXo9K9ebNk5khYTpdGJeA4Us7D8PEBtfz_Mp-bNJz8_A/s608/Android-2.png)

以下教程这段，我参考了：

1\. openssl为IP签发证书（支持多IP/内外网） [https://www.jianshu.com/p/cad3377692c9](https://www.jianshu.com/p/cad3377692c9)

2. Install self-signed certificates no longer working in Android Q [https://stackoverflow.com/questions/58500892/install-self-signed-certificates-no-longer-working-in-android-q#:~:text=A%20private%20key%20is%20NOT,certificate%20AFTER%20it%20is%20generated.](https://stackoverflow.com/questions/58500892/install-self-signed-certificates-no-longer-working-in-android-q#:~:text=A%20private%20key%20is%20NOT,certificate%20AFTER%20it%20is%20generated.)

3\. One self-signed cert to rule them all? Chrome, Android, and iOS [https://stackoverflow.com/questions/57565665/one-self-signed-cert-to-rule-them-all-chrome-android-and-ios](https://stackoverflow.com/questions/57565665/one-self-signed-cert-to-rule-them-all-chrome-android-and-ios)

主要是靠第三篇。

关于IP签名适用于Windows和Mac的可以直接参考第一篇。

关于域名签名适用于全平台的，参考第三篇。

如果要让第三篇适用于IP证书，把所有的 _**DNS:test.com** 换成_ **_IP:你的IP_ （这一步我卡了很久）**

在最后加上**_\[ alt\_names \] IP.1=你的IP。_**

    Contents of openssl.cnf (⚠️可以翻动):

```
# Section x509_ext is used when generating a self-signed certificate. I.e., openssl req -x509 ...

[ x509_ext ]
subjectKeyIdentifier      = hash
authorityKeyIdentifier    = keyid:always,issuer

basicConstraints        = critical, CA:TRUE
keyUsage            = critical, digitalSignature, keyEncipherment, cRLSign, keyCertSign
subjectAltName          = IP:你的IP
extendedKeyUsage = serverAuth


extendedKeyUsage    = TLS Web Server Authentication

[ req_ext ]
subjectKeyIdentifier        = hash
basicConstraints        = CA:FALSE
keyUsage            = digitalSignature, keyEncipherment
subjectAltName          = IP:你的IP

nsComment           = "OpenSSL Generated Certificate"
[alt_names}
IP.1=你的IP

```

    然后用命令生成就行：

    openssl req -config openssl.cnf -new -x509 -days 825 -out ca.crt

``       openssl x509 -in ca.crt -text -noout  `   `   ``

\- 其它的问题不大。最后导入还是挺方便的。导入.CRT就行, IOS稍微麻烦点。

在 Debian / Ubuntu / Alpine 系统中信任证书: 

cp \*.crt /usr/local/share/ca-certificates/

update-ca-certificates

  

\- 关于nginx配置 

ssl\_certificate /home/ssl/xxx/ca.**crt**;

ssl\_certificate\_key /home/ssl/xxx/ca.**key**;

\- 关于安全

但是nps从家里到阿里云那段应该没有加密。据说现在但凡是个高级点的路由都有识别功能了，但是无所谓了。我只是不想让学校管理员看到我在nas上看的那些PT。你知道这国外的技术有多高超，所有电脑账号都是拿学号登录的，桌面的文件都是同步的，Windows的登录感觉是在线验证，我国内从来没见识过。用户没有管理员，无法U盘启动，BIOS有密码，真是全面加固啊。我上网的时候，经常来给我提示，好多网站都禁了。就怕群晖有什么漏洞，给我来个勒索病毒。那个nps的漏洞就是无法进shell，造不成什么影响。

这个SSL也有好多公司靠着赚钱的，互联网也是这样，压根就依附于域名，dns，服务器，运营商的链路。完全不在掌控之内。

关于nps，目前所知nps-auth-bypass的漏洞，我把阿里云上的修复了，但是由于种种原因换掉nps还是算了。

关于这个漏洞：

[https://jireh.xyz/articles/2022/08/10/1660122191957.html](https://jireh.xyz/articles/2022/08/10/1660122191957.html)

[https://github.com/carr0t2/nps-auth-bypass](https://github.com/carr0t2/nps-auth-bypass)