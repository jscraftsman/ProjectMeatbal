var DEFAULT = {};
var GAME = null;

$(function() {
	init();
	
	$(window).resize(function() { setWindowDimension(); setSize($("body"), DEFAULT.W, DEFAULT.H); });
	$("#login-signup button").click(function(){		Account.processAction(this);	});
	
	setTimeout(function(){ $("#loading").hide(); }, 200);
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
	Account.toggleForm("signup");
	setSize($("#canvas"), DEFAULT.W, DEFAULT.H);
	//GAME = new Game(document.getElementById("canvas"), DEFAULT.W, DEFAULT.H);
	
	/*if user logged in start the game*/
	//GAME.play();
}
