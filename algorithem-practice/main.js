//1
function printArray(array) {
	for (var i = 0; i < array.length; i++) {
		console.log(array[i]);
	}
};

printArray([]);
printArray([1,2,3]);

//2
let TwoDimArray = [
	["1", "2"],
	["3", "4"]
]

function printTwoDimArray(TwoDimArray) {

	for (var i = 0; i < TwoDimArray.length; i++) {
		for (var b = 0; b < TwoDimArray[i].length; b++) {
			console.log(TwoDimArray[i][b]);
		};
		
		console.log("");
	};	
};

printTwoDimArray(TwoDimArray);
printTwoDimArray([]); //retruns nothing

//3
let score = [ 5, 7, -8, 2 ];

function maxScore(score) {
	console.log( "The largest number is " +
		Math.max.apply(Math, score))
}
 maxScore(score);

//4
let arrayGreater = [ 5, 2, -1, 0, 1, -7 ]; 
let myNumber = 0;

function whoo(arrayGreater){
	for (var i = 0; i < arrayGreater.length; i++) {
		return arrayGreater[i]
	};
};

function hoo(myNumber){
	if(whoo() > myNumber) {
		console.log(whoo());
	}
}

hoo(0);
