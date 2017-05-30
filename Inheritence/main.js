function Animal(age) {
	this.age = age;
}

Animal.prototype.sleep = function() {
	console.log("zzzzzzz");
};

Animal.prototype.eat = function() {
	console.log("om nom nom");
}
//////////////////////////


function Fish() {
	Animal.apply(this, arguments);
};

Fish.prototype = Object.create(Animal.prototype);
Fish.prototype.swim = function () {
	console.log("blub blub");
};

function Shark() {
	Fish.apply(this, arguments);
};

Shark.prototype = Object.create(Fish.prototype);
Shark.prototype.roar = function () {
	console.log("Smile you son of a BOOOOOOMMM!!!");
}; 

///////////////////////////////////
function Elephant() {
	Animal.apply(this, arguments);
};

Elephant.prototype = Object.create(Animal.prototype);
Elephant.prototype.trample = function () {
	console.log("Jumanji!!!!");
};

///
// make an object.
// let jaws = new Shark(80);
//
// make it do something
// jaws.eat();


// animals.apply(this, arguments)
// it is expected that arguments is an array.
