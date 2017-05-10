function math() {
	var firstNumber = 17;
	var secondNumber = 32;
	console.log(firstNumber + secondNumber)
};

function Hi() {
	var Hello = "Hello";
	var World = "World";
	console.log(Hello + " " + World);
}
 
var Me = { 	
	firstName : "José",
	lastName : "Rasmussen",
	brithday : "19-09-1983",
	ILike : [ 
		"videogames", 
		"Star Trek", 
		"lots of ill shit"
	]
};

function Jose() { 
	var index = 0;
	while (index < Me.ILike.length) {
		console.log(" - ", Me.ILike[index]);
		index++;
	}
}

function HitPoints(HP) {
	if (HP < 10) {
		alert("Your health is low!!!")
	} 
	else {
		console.log("Your health is " + HP + ". Keep fighting!!")
	}
}

function supasecure(password) {
	if (password !== "12345") {
		alert("Intruder alert!!")
	} 
	else {
		console.log("Welcome")
	}
}

function message() {
	console.log("JavaScript baby steps.")
};
// message();

console.log("Choose a door. 1, 2 or 3");
function awesomeGameshow(door) {
	if ( door === 1) {
		console.log("You got a kiss from a pretty girl.")
	} else if (door === 2) {
		console.log("You got a ball shot.")
	} else if (door === 3) {
		console.log("You became a werewolf.")
	} else { 
		console.log("You bold S.O.B, You win.")
	}
}

function enter_last_door(door_options) {
	if (door_options.length === 0) {
		console.log("No doors are available.");
	} else if(door_options.length > 0) {
		console.log(
			"You have enterd door " + 
			door_options[door_options.length-1] + 
			". The last door.");
	}
}
enter_last_door([]);
enter_last_door([1,3,4,5]);

function countingArguments() {
	for (var i = 0; i < arguments.length; i++) {
		// console.log(arguments[i]);
		// console.log(arguments[i]-1);
		console.log(arguments[arguments.length-1]);
	}
}
countingArguments(1,4,5,7,8,20)




///////Assignment: JS Mini Challenges.//////////
//1.
var x = 4;
var y = 6;
var veryComplicatedOpperation = x + y;
console.log("The veryComplicatedOpperation answer is " + veryComplicatedOpperation);

var firstName = "José";
var lastName = "Rasmussen";
var myName = firstName + " " + lastName;
console.log("My name is " + myName);

//2.
