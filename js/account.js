var Account = {
	
	/*this is incomplete*/
	processAction : function (button){
		var parentID = button.parentNode.parentNode.id;
		var buttonID = button.id;
		var msg = $("#" + parentID).find("#msg");
		var user = $("#" + parentID).find("#username").val();
		var pass = $("#" + parentID).find("#password").val();
		if(parentID == "login"){
			if(buttonID == "loginbtn"){
				if(this.validateLogin(user, pass)){
					msg.text("Login success!");
					$("#login-signup").hide();
				}else{
					msg.text("Incorrect username or password!");
				}
			}else{
				this.toggleForm("login");
				this.toggleForm("signup");
			}
		}else{
			if(buttonID == "signupbtn"){
				alert("signup done");
				this.toggleForm("login");
				this.toggleForm("signup");
			}else{
				this.toggleForm("login");
				this.toggleForm("signup");
			}
		}
	},

	/*this is incomplete*/
	validateLogin : function(user, pass){
		//var dummyuser = "user", dummypass = "1234qwer";
		var dummyuser = "", dummypass = "";
		return(user == dummyuser && pass == dummypass);
	},
	
	toggleForm : function(form){ 
		$("#login-signup #" + form).toggle(); 	
	}
}