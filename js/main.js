var DEFAULT = {};


$(function() {
	init();
	$(window).resize(function() {
		setWindowDimension();
		setSize($("#container"), DEFAULT.W, DEFAULT.H);
	});
});

function hasLocalStorage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  }catch(e){ return false; }
}

function init(){
	setWindowDimension();
	setSize($("#container"), DEFAULT.W, DEFAULT.H);
}

function setWindowDimension(){
	DEFAULT.W = window.innerWidth;
	DEFAULT.H = window.innerHeight;
}

function setSize(dom, w, h){
	dom.css({
		"width" : w,
		"height" : h
	});
}
