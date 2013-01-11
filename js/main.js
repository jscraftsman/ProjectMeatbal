var DEFAULT = {};


$(function() {
	init();
	$(window).resize(function() {
		setWindowDimension();
		setSize($("body"), DEFAULT.W, DEFAULT.H);
	});
	
	setTimeout(function(){$("#loading").hide();}, 1000);
});

function hasLocalStorage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  }catch(e){ return false; }
}
function setSize(dom, w, h){ dom.css({ "width" : w, "height" : h });	}
function setWindowDimension(){ DEFAULT.W = window.innerWidth; DEFAULT.H = window.innerHeight;	}

function init(){
	setWindowDimension();
	setSize($("body"), DEFAULT.W, DEFAULT.H);
	
}
