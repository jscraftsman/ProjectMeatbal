window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame       || 
		window.webkitRequestAnimationFrame || 
		window.mozRequestAnimationFrame    || 
		window.oRequestAnimationFrame      || 
		window.msRequestAnimationFrame     ||  
		function( callback ){
			return window.setTimeout(callback, 1000 / 60);
		};
})();
window.cancelRequestAnimFrame = ( function() {
	return window.cancelAnimationFrame          ||
		window.webkitCancelRequestAnimationFrame    ||
		window.mozCancelRequestAnimationFrame       ||
		window.oCancelRequestAnimationFrame     ||
		window.msCancelRequestAnimationFrame        ||
		clearTimeout
} )();

window.APP = window.APP || {};
var canvas = document.getElementById("canvas"),
	ctx = canvas.getContext("2d"),
	W = window.innerWidth,
	H = window.innerHeight;

/*important*/	
canvas.width = W;
canvas.height = H;

APP.pause = function() {
	window.cancelRequestAnimFrame(APP.core.animationFrame);
};
 
APP.play = function() {
	APP.core.then = Date.now();
	APP.core.frame();
};
var text;
var count = 0;
 
APP.core = {
 
	frame: function() {
		APP.core.setDelta();
		APP.core.update();
		APP.core.render();
		APP.core.animationFrame = window.requestAnimFrame(APP.core.frame);
	},
 
	setDelta: function() {
		APP.core.now = Date.now();
		APP.core.delta = (APP.core.now - APP.core.then) / 1000; // seconds since last frame
		APP.core.then = APP.core.now;
	},
 
	update: function() {
		count += APP.core.delta;
		
		text = "delta: " + Math.round(count);
	},
 
	render: function() {
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, W, H);
			
		ctx.font = "18px Arial";
		ctx.fillStyle = "black";
		ctx.fillText(text, W/2, H/2 );
	}
};
 
APP.play();