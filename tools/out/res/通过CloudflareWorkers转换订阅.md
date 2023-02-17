通过CloudflareWorkers转换订阅
date: '2022-03-12T14:34:00.011+01:00'

---
 我去年7月6号发布了个利用Python分享订阅的，其实部署起来非常不稳定。

所以我又弄了个基于Cloudflare Workers 的，很久以前就弄好了，但是忘了有这事，今天整理Blog，来补充一下。

这个意图是使被贡献者不用天天换订阅链接，只要workers里改改就行了。

  



> addEventListener("fetch", event => { event.respondWith(handleRequest(event.request))})async function handleRequest(request) { let { pathname } = new URL(request.url);  
>  if (pathname=="/example"||pathname=="/example/") { return new Response("Hello worker!", { headers: { "content-type": "text/plain" }}) }  
>  //fast-fish if (pathname=="/archived/fast-fish/v2ray"||pathname=="/archived/fast-fish/v2ray/") { return fetch(`https://bigairport.icu/api/v1/client/subscribe?token=98`);  
>  }  if (pathname=="/fast-fish/v2ray"||pathname=="/fast-fish/v2ray/"||pathname=="/fast-fish/ssr"||pathname=="/fast-fish/ssr/") { return fetch(`https://bigairport.icu/api/v1/client/subscribe?token=98`); } //BridgeTheWise if (pathname=="/bridgethewise"||pathname=="/bridgethewise/"||pathname=="/BridgeTheWise/"||pathname=="/BridgeTheWise") { return fetch(`https://bigairport.icu/api/v1/client/subscribe?token=98`); } if (pathname=="/bridgethewise/clash"||pathname=="/bridgethewise/clash/"||pathname=="/BridgeTheWise/clash"||pathname=="/BridgeTheWise/clash/") { return fetch(`https://sub.id9.cc/sub?target=clash&new\_name=true&url=https%3A%2F%2Fsub.usercontent.workers.dev%2Fbridgethewise&insert=false&config=https%3A%2F%2Fraw.githubusercontent.com%2FACL4SSR%2FACL4SSR%2Fmaster%2FClash%2Fconfig%2FACL4SSR\_Online.ini`); }  
>  if (pathname=="/clash"||pathname=="/clash/"||pathname=="/Clash"||pathname=="/Clash/"||pathname=="/fast-fish/clash.yaml"||pathname=="/fast-fish/clash"||pathname=="/fast-fish/clash/") { return fetch(`https://sub.id9.cc/sub?target=clash&new\_name=true&url=https%3A%2F%2Fsub.usercontent.workers.dev%2Fbridgethewise&insert=false&config=https%3A%2F%2Fraw.githubusercontent.com%2FACL4SSR%2FACL4SSR%2Fmaster%2FClash%2Fconfig%2FACL4SSR\_Online.ini`); }  
>   
> if (pathname=="/b"||pathname=="/b/") { return fetch(`https://patriot.ninja//index.php?m=wray&token=8`); }//default pagesif (pathname=="/") { return new Response("Hello worker!\nService Status: Working", { headers: { "content-type": "text/plain" }}) //return Response.redirect("https://github.com/freefq/free/blob/master/README.md", 301);} if (pathname=="/robots.txt") { return new Response("User-agent:\*\nallow:\*", { headers: { "content-type": "text/plain" }})} if (pathname=="/about"||pathname=="/about/") { return new Response("About Page ---workers.dev", { headers: { "content-type": "text/plain" }})} return fetch(`https://raw.githubusercontent.com/aiboboxx/v2rayfree/main/v2`);}

  
  
workers复制一下就行了，单词很明显能体现出意思。  
  
  
  
基本上就是这样的。 

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnfKTURBr3JdeiiUpN6i8ZV5_a5cxfe6eb08PPpzEph_KQpXoY56ws3xvood3hp_XWjpi0aocw5vmBtbs3QiGmuHyNa-Tr2DaRH2-dJHYLFnlM2vOdplMY_CGqc5yxlxeS5-2Z688LCieMiCS2vwUHRr8QDh9JvPWTqUSnko6be-WE_PTrrTBVg99f/s320/Screenshot%202022-03-23%20at%2010.54.53%20AM.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnfKTURBr3JdeiiUpN6i8ZV5_a5cxfe6eb08PPpzEph_KQpXoY56ws3xvood3hp_XWjpi0aocw5vmBtbs3QiGmuHyNa-Tr2DaRH2-dJHYLFnlM2vOdplMY_CGqc5yxlxeS5-2Z688LCieMiCS2vwUHRr8QDh9JvPWTqUSnko6be-WE_PTrrTBVg99f/s1076/Screenshot%202022-03-23%20at%2010.54.53%20AM.png)  

