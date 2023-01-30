var blog_name="Sheng's Blog";

//----------------------------------------------------分割线----------------------------------------------------------------------------------------


/* 

以下部分为插件，不需要的可以删掉或者注释掉

目前有的功能：板娘插件，页面点击烟花特效

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
	loadExternalResource(live2d_path + "waifu.css", "css"),
	loadExternalResource(live2d_path + "live2d.min.js", "js"),
	loadExternalResource(live2d_path + "waifu-tips.js", "js")
]).then(() => {
	initWidget(live2d_path + "waifu-tips.json", "https://live2d.fghrsh.net/api");
});

//----------------------------------------------------分割线----------------------------------------------------------------------------------------

//页面点击烟花特效
function (e, t, a) {
	function r() {
		for (var e = 0; e < s.length; e++) s[e].alpha <= 0 ? (t.body.removeChild(s[e].el), s.splice(e, 1)) : (s[
				e].y--, s[e].scale += .004, s[e].alpha -= .013, s[e].el.style.cssText = "left:" + s[e].x +
			"px;top:" + s[e].y + "px;opacity:" + s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e]
			.scale + ") rotate(45deg);background:" + s[e].color + ";z-index:99999");
		requestAnimationFrame(r)
	}

	function n() {
		var t = "function" == typeof e.onclick && e.onclick;
		e.onclick = function (e) {
			t && t(), o(e)
		}
	}

	function o(e) {
		var a = t.createElement("div");
		a.className = "heart", s.push({
			el: a,
			x: e.clientX - 5,
			y: e.clientY - 5,
			scale: 1,
			alpha: 1,
			color: c()
		}), t.body.appendChild(a)
	}

	function i(e) {
		var a = t.createElement("style");
		a.type = "text/css";
		try {
			a.appendChild(t.createTextNode(e))
		} catch (t) {
			a.styleSheet.cssText = e
		}
		t.getElementsByTagName("head")[0].appendChild(a)
	}

	function c() {
		return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math
			.random()) + ")"
	}
	var s = [];
	e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e
		.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) {
			setTimeout(e, 1e3 / 60)
		}, i(
			".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"
		), n(), r()
}(window, document);
//----------------------------------------------------分割线----------------------------------------------------------------------------------------
