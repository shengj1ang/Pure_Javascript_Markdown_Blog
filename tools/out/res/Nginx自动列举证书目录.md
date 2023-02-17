Nginx自动列举证书目录
date: '2020-08-27T02:15:00.001+01:00'

---
使用 Nginx 的 ngx\_http\_sub\_module 和 \*\* ngx\_http\_autoindex\_module\*\*  模块构建一个能够自动列举证书目录的服务，这样就不需要PHP了。

server {

    listen 80;

    server\_name localhost;

    location = /favicon.ico {

        empty\_gif;

    }

    location / {

        root /public;

        autoindex on;

        sub\_filter '<h1>Index of /</h1>'  '<h1>Get Certs</h1>';

        sub\_filter\_once on;

    }

}


