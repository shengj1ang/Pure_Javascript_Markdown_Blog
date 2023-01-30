var blog_name="Sheng's Blog";

//----------------------------------------------------分割线----------------------------------------------------------------------------------------


/* 

以下部分为插件，不需要的可以删掉或者注释掉

目前有的功能：板娘插件，点击页面的烟花效果

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

//烟花效果
//粒子颜色,根据爱好来选择
const Colors = [
	"red",
	"blue",
	"green",
	"gary",
	"orange",
	"pink",
	"yellow",
	"purple",
	"black",
] ;
//定义粒子数量
const particlesNumber = 20;

function creatParticle(x,y){
	const ele = document.createElement("div");
	//设置成一个小园形，自己也可以根据爱好设置成其他如心型、星型
	ele.style.height = "10px";
	ele.style.width = "10px";
	ele.style.borderRadius = "5px";

	//设置绝对位置
	ele.style.position = "fixed";/*http://c.biancheng.net/css3/position.html*/
	ele.style.top = `${y}px`;
	ele.style.left = `${x}px`;
	//光标位于方块中央
	ele.style.transform = "transform(-50%,-50%)";
	ele.style.backgroundColor = Colors[Math.floor(Math.random()*Colors.length)];
	
	/*animate(keysframes,options)函数,options可以是动画持续时间，也可以是多个属性值的对象
	 duration：持续时间，iterations：动画迭代次数(Infinity表示无限动画)，delay：添加到动画的延迟  
	*/
	const animation = ele.animate(
		[
			{
				transform:`translate(${(Math.random()-0.5)*500}px,${(Math.random()-0.5)*500}px) rotate(${Math.random()*520}deg)`,
				opacity: 0
			},
		],
		{ duration: 1000, iterations: 1 }
	);
	//向网页添加元素
	document.body.appendChild(ele);
	//结束后将DOM产生的div去除
	animation.onfinish = () => ele.remove();
}
   //创建点击事件
document.addEventListener("click",(e) =>{
   //获取当前光标位置
   const {clientX: x, clientY: y } = e;

   //创建多个粒子
   for (let index = 0; index < particlesNumber; index++) {
	   creatParticle(x,y);
   }

});


//----------------------------------------------------分割线----------------------------------------------------------------------------------------
