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
window.cancelAnimFrame = ( function() {
	return window.cancelAnimationFrame          ||
		window.webkitCancelRequestAnimationFrame    ||
		window.mozCancelRequestAnimationFrame       ||
		window.oCancelRequestAnimationFrame     ||
		window.msCancelRequestAnimationFrame        ||
		clearTimeout
} )();

function Game(c, w, h){
	var canvas = c,
	ctx = canvas.getContext("2d"),
	W = w,
	H = h,
	animationFrame,
	delta,
	now,
	then;
	
	c.width = W;
	c.height = H;
	
	function clearScreen(){
		ctx.clearRect(0, 0, W, H);
	}
	 
	this.pause = function() {
		window.cancelAnimFrame(animationFrame);
	};
	 
	this.play = function() {
		then = Date.now();
		frame();
	};
	 
	function frame() {
		setDelta();
		update();
		render();
		animationFrame = window.requestAnimFrame(frame());
	};
	 
	function setDelta() {
		now = Date.now();
		delta = (now - then) / 1000;
		then = now;
	}
	function update(){
		
	}
	function render() {
		clearScreen();
		ctx.strokeStyle = "black";
		ctx.lineWidth = "2";
		ctx.strokeRect(10, 10, 100, 100);
	}
}
	