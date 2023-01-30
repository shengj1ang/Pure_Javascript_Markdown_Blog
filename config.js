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

//
(function fairyDustCursor() {
 
var possibleColors = ["#D61C59", "#E7D84B", "#1B8798"]
var width = window.innerWidth;
var height = window.innerHeight;
var cursor = { x: width / 2, y: width / 2 };
var particles = [];

function init() {
	bindEvents();
	loop();
}

// Bind events that are needed
function bindEvents() {
	document.addEventListener('mousemove', onMouseMove);
	window.addEventListener('resize', onWindowResize);
}

function onWindowResize(e) {
	width = window.innerWidth;
	height = window.innerHeight;
}

function onMouseMove(e) {
	cursor.x = e.clientX;
	cursor.y = e.clientY;

	addParticle(cursor.x, cursor.y, possibleColors[Math.floor(Math.random() * possibleColors.length)]);
}

function addParticle(x, y, color) {
	var particle = new Particle();
	particle.init(x, y, color);
	particles.push(particle);
}

function updateParticles() {

	// Updated
	for (var i = 0; i < particles.length; i++) {
		particles[i].update();
	}

	// Remove dead particles
	for (var i = particles.length - 1; i >= 0; i--) {
		if (particles[i].lifeSpan < 0) {
			particles[i].die();
			particles.splice(i, 1);
		}
	}

}

function loop() {
	requestAnimationFrame(loop);
	updateParticles();
}

/**
 * Particles
 */

function Particle() {

	this.character = "*";
	this.lifeSpan = 120; //ms
	this.initialStyles = {
		"position": "fixed",
		"display": "inline-block",
		"top": "0px",
		"left": "0px",
		"pointerEvents": "none",
		"touch-action": "none",
		"z-index": "10000000",
		"fontSize": "25px",
		"will-change": "transform"
	};

	// Init, and set properties
	this.init = function (x, y, color) {

		this.velocity = {
			x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
			y: 1
		};

		this.position = { x: x + 10, y: y + 10 };
		this.initialStyles.color = color;

		this.element = document.createElement('span');
		this.element.innerHTML = this.character;
		applyProperties(this.element, this.initialStyles);
		this.update();

		document.querySelector('.js-cursor-container').appendChild(this.element);
	};

	this.update = function () {
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
		this.lifeSpan--;

		this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px, 0) scale(" + (this.lifeSpan / 120) + ")";
	}

	this.die = function () {
		this.element.parentNode.removeChild(this.element);
	}

}

/**
 * Utils
 */

// Applies css `properties` to an element.
function applyProperties(target, properties) {
	for (var key in properties) {
		target.style[key] = properties[key];
	}
}

if (!('ontouchstart' in window || navigator.msMaxTouchPoints)) init();
})();
//----------------------------------------------------分割线----------------------------------------------------------------------------------------
