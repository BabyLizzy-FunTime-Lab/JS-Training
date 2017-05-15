// password 1 - 8
// username can't have a number
// if condicions are not met send out an alert
// If login is good display message on screen.	

//Part 1.
function checkUsername() {
	var Username = document.getElementById("Username").value;
	if( Username === "Jose") {
		return true;
	} else if (Username.indexOf() == true) {
		alert("Username can't contain numbers.");
		return false;
	} else {
		return false;
	}
};

function checkEmail() {
	var Email = document.getElementById("Email").value;
	if( Email === "code@gmail.com") {
		return true;
	} else {
		return false;
	};
};

function checkPassword() {
	var password = document.getElementById("password").value;
	if( password === "12345678") {
		return true;
	} else {
		return false;
	};
}

window.onload = function() {
	document.getElementById("Submit").onclick = function() {
		var UsernameCheck = checkUsername();
		var EmailCheck = checkEmail();
		var PasswordCheck = checkPassword();

		if(UsernameCheck == true && EmailCheck == true && PasswordCheck == true) {
			document.getElementById("UserWelcome").innerHTML = "Welcome, " + document.getElementById("Username").value;
			alert("Welcome")

		} else {
			alert("Try again.")
		}

	};
};
