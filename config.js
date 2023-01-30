var blog_name="Sheng's Blog";

//----------------------------------------------------分割线----------------------------------------------------------------------------------------


/* 

以下部分为插件，不需要的可以删掉或者注释掉

目前有的功能：板娘插件

*/

//----------------------------------------------------分割线----------------------------------------------------------------------------------------

//板娘插件（https://github.com/fghrsh/live2d_demo）
const live2d_path = "https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget/"; // 注意：live2d_path 参数应使用绝对路径
// 封装异步加载资源的方法
function loadExternalResource(url, type) {
	return new Promise((resolve, reject) => {
		let tag;

		if (type === "css") {
			tag = document.createElement("link");
			tag.rel = "stylesheet";
			tag.href = url;
		}
		else if (type === "js") {
			tag = document.createElement("script");
			tag.src = url;
		}
		if (tag) {
			tag.onload = () => resolve(url);
			tag.onerror = () => reject(url);
			document.head.appendChild(tag);
		}
	});
}
// 加载 waifu.css live2d.min.js waifu-tips.js
Promise.all([
	loadExternalResource("/plugins/live2d-widget/waifu_right.css", "css"),
	loadExternalResource(live2d_path + "live2d.min.js", "js"),
	loadExternalResource(live2d_path + "waifu-tips.js", "js")
]).then(() => {
	initWidget(live2d_path + "waifu-tips.json", "https://live2d.fghrsh.net/api");
});

//----------------------------------------------------分割线----------------------------------------------------------------------------------------

//


//----------------------------------------------------分割线----------------------------------------------------------------------------------------
