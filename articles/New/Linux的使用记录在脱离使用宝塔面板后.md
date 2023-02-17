Linux的使用记录在脱离使用宝塔面板后
---
由于写起来还是挺麻烦的，不是所有的记录我都会写在这。

1. lnmp环境：
我主要是要nginx来做转发，服务后端在更强大配置的机器上。PHP有时可能需要。数据库在性能低的机器上只能sqlite，所以不用考虑。
[https://www.lnmp.org](https://www.lnmp.org)
由于lnmp.org已经介绍得十分完备了，可以直接看他们的内容，和用他们的无人安装脚本。
使用的时候的lnmp命令用一遍就记住了。之后的配置大多都是手动配置。
我常用到`whereis nginx`来找到nginx配置文件的目录。大概是xxx/conf/vhost/*.conf

2. 安全防护（多少是要点的， 即使套了CDN，还是有很多潜在风险）：
- ufw的使用 ufw的命令十分简单。
- [这里有个基于web的ufw控制](https://github.com/dvorpahl/ufw2web)，我还没测试过。
- httpguard，[https://github.com/centos-bz/HttpGuard](https://github.com/centos-bz/HttpGuard)，效果还是有的，但是已经不再开发了。
 Lua 开启防御代码
 
```
lua_package_path “/usr/local/nginx/conf/waf/?.lua”;
lua_shared_dict limit 10m;
init_by_lua_file /usr/local/nginx/conf/waf/init.lua;
access_by_lua_file /usr/local/nginx/conf/waf/waf.lua;
```
[这里](https://www.tuiwo.cc/38.html)有具体的教程。

- 证书及自签证书，这个我blog会有单独的文章。

- [Cloudflare: Universal Edge Certificate deleted and SSL Version or Cipher mismatch](https://community.cloudflare.com/t/universal-edge-certificate-deleted-and-ssl-version-or-cipher-mismatch/315296)

- [https://www.zoomeye.org/](https://www.zoomeye.org/) 这个十分可怕。
- 
3. 测试工具（我不大喜欢测试性能，因为我使用的时候能感受出来）：
- [Smartping（golang）](http://smartping.org/)， 我知道smokeping，但是我不喜欢那个语音，不能编译出来，在性能低的机器上部署它的环境是十分困难的。Smartping就非常棒。
- 网页评分，Chrome里自带的Lighthouse，[这也有个网页版的](https://pagespeed.web.dev/)
4. 传输工具：
- 在内网使用lnmp的ftp备份网站到有raid的储存空间，python源码在我的GitHub上。
- Croc，SCP
- 主要还是考虑稳定性和加密，证书自签并安装。
- 现成的基础设施

5. Nginx的配置（lnmp默认的配置文件里的我就不写了）：
- 反向代理
为反向代理设置自定义错误页面
```
location ^~ /example/ {
			proxy_pass    https://127.0.0.1:$example_port;
			proxy_redirect https://127.0.0.1:$example_port/ /;
			#proxy_redirect off;
			proxy_set_header Host $host;
			proxy_set_header X-Real-IP $remote_addr;
			proxy_set_header X-Forwarded-Proto https;    
                        proxy_intercept_errors on;
			error_page 500 502 503 504 = /error_500.html;
｝
location = /error_500.html{
			root /var/web;
}
```
- 配置访问密码
安装 htpasswd: `sudo apt-get install apache2-utils`
htpasswd命令选项参数说明：
>-c 创建一个加密文件
-n 不更新加密文件，只将htpasswd命令加密后的用户名密码显示在屏幕上
-m 默认htpassswd命令采用MD5算法对密码进行加密
-d htpassswd命令采用CRYPT算法对密码进行加密
-p htpassswd命令不对密码进行进行加密，即明文密码
-s htpassswd命令采用SHA算法对密码进行加密
-b htpassswd命令行中一并输入用户名和密码而不是根据提示输入密码
-D 删除指定的用户

Nginx配置：
```
server {
    listen 80;
    server_name  localhost;
    .......
    #新增下面两行
    auth_basic "Please input password"; #这里是验证时的提示信息
    auth_basic_user_file /app/nginx/pas/passwd.db; # 这里是密码文件，可以填写绝对路径
    location /{
    .......
    }
```

6. 网站统计：
- [https://matomo.org/](https://matomo.org/)

- [https://www.v2ex.com/t/900201](https://www.v2ex.com/t/900201)

7. 文件内容的批量替换（以前用得宝塔插件，其实命令也挺简单的，适用于Linux和Mac）：
- 基于find和grep内容替换，这个达不到我的要求。`grep -rl “str1” dir | xargs sed -i “” ‘s/str2/str3/g’`
- 使用rpl：安装：`sudo apt-get rpl ` ，替换当前文件夹下：`rpl "str1" "str2" ./* `，遍历当前文件夹下所有的：`rpl -r "str1" "str2" ./* `
