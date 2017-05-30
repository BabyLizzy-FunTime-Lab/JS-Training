function UberDriver(name, carClass, maxPassengers) {
	this.name = name;
	this.carClass = carClass;
	this.maxPassengers = maxPassengers;
	this.currentPassengers = 0;
	this.driverEngaged = false;
};

UberDriver.prototype.call = function(carClassrequest, spotsrequested) {
	if (this.carClass !== carClassrequest) {
		return false + "The drive drive a different car class.";
	} 

	if (this.maxPassengers - this.currentPassengers < spotsrequested) {
		return false + "there are not enough seats.";
	}

	this.currentPassengers += spotsrequested;

	if (this.currentPassengers === this.maxPassengers) {
		// the car is now full

	}
	else {
		// car not yet full
		let remainingSeats = this.maxPassengers - this.currentPassengers;
		console.log("there is room for you. Now there are " + remainingSeats "empty seats.");
	}

	return true;


	// if (this.carClass === carClassrequest && 
	// 	(this.maxPassengers - this.currentPassengers) === spotsrequested) {

	// 	this.currentPassengers = this.maxPassengers;
	// 	return true + "there is room! However the car is now full.";

	// }

	// if (this.carClass === carClassrequest && 
	// 	(this.maxPassengers - this.currentPassengers) <= spotsrequested) {

	// 	this.currentPassengers = spotsrequested + this.currentPassengers;
	// 	let remainingSeats = this.maxPassengers - this.currentPassengers;
	// 	return true + "there is room for you. Now there are " + remainingSeats "empty seats."; 

	// }
};

UberDriver.prototype.deliver = function() {
	if (this.currentPassengers === 0) {

		return false + ", there are no passangers to deliver.";
	} else {

		return true + ",the passangers are being deliverd.";
	}
};



let Gabor = new UberDriver("Gabor", "economy", 3);
let Jose = new UberDriver("José", "offroad", 4);
let Brown = new UberDriver("Dr. Brown", "timemachine", 1);

