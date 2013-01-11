var DEFAULT = {};


$(function() {
	init();
	$(window).resize(function() { setWindowDimension(); setSize($("body"), DEFAULT.W, DEFAULT.H); });
	$("#login-signup button").click(function(){	processAccountAction(this);	});
	
	setTimeout(function(){$("#loading").hide();}, 500);
});

function hasLocalStorage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  }catch(e){ return false; }
}
function setSize(dom, w, h){ dom.css({ "width" : w, "height" : h });	}
function setWindowDimension(){ DEFAULT.W = window.innerWidth; DEFAULT.H = window.innerHeight;	}
function toggleForm(form){ $("#login-signup #" + form).toggle(); 	}

/* incomplete! */
function processAccountAction(button){
	var parentID = button.parentNode.parentNode.id;
	var buttonID = button.id;
	var msg = $("#" + parentID).find("#msg");
	var user = $("#" + parentID).find("#username").val();
	var pass = $("#" + parentID).find("#password").val();
	if(parentID == "login"){
		if(buttonID == "loginbtn"){
			if(validateLogin(user, pass)){
				msg.text("Login success!");
				$("#login-signup").hide();
			}else{
				msg.text("Incorrect username or password!");
			}
		}else{
			toggleForm("login");
			toggleForm("signup");
		}
	}else{
		if(buttonID == "signupbtn"){
			alert("signup done");
			toggleForm("login");
			toggleForm("signup");
		}else{
			toggleForm("login");
			toggleForm("signup");
		}
	}
}

function validateLogin(user, pass){
	var dummyuser = "user", dummypass = "1234qwer";
	return(user == dummyuser && pass == dummypass);
}
function init(){
	setWindowDimension();
	setSize($("body"), DEFAULT.W, DEFAULT.H);
	toggleForm("signup");
}
