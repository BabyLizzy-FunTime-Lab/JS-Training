// Copyright (c) Jose Enterprises 2017

// constructor
function UberDriver(/*...*/) {
  // ...
  // this.stuff = otherStuff;
}

UberDriver.prototype.call = function(/**/) {
  // ...
};

let gabor = new UberDriver("Gabor", /*carClass=*/"economy", /*maxPassangers=*/3);

console.log(gabor.deliver()); // => false, there are no passangers to deliver

console.log(gabor.call(/*carClass=*/"luxory", /*numPassangers=*/2)); // false
console.log(gabor.call("economy", 4)); // false
console.log(gabor.call("economy", 2)); // true
console.log(gabor.call("economy", 1)); // => true, there is still 1 spot free in the car
console.log(gabor.call("economy", 1)); // => false, the car is full

console.log(gabor.deliver()); // => true, passangers are delivered

console.log(gabor.call("economy", 3)); // => true, the previous passangers have already been delivered