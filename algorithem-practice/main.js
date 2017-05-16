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

// this works but it's not the point.
// use if statement to build it.
function maxScore(score) {
	console.log( "The largest number is " +
		Math.max.apply(Math, score))
}
 maxScore(score);

//4
let bigArray = [ 5, 2, -1, 0, 1, -7 ]; 
let myNumber = 0;

function checkBigArray(bigArray, myNumber) {
	for (var i = 0; i < bigArray.length; i++) {
		let bigArrayNumber = bigArray[i];

		if(bigArrayNumber > myNumber) {
		console.log(bigArrayNumber);
		};
	};
};

checkBigArray(bigArray, myNumber);

//5
let NumbersArray = [ 2, 5, 3, 0, 6 ];

function checkForOddNum(NumbersArray) {
	let oddNUmbers = [];

	for (var i = 0; i < NumbersArray.length; i++) {
		let checkOdd = NumbersArray[i];
		if(checkOdd % 2 === 1){
			oddNUmbers.push(checkOdd);
		};
	};
	return oddNUmbers
};

console.log("output oddNUmbers")
console.log(checkForOddNum(NumbersArray));	


//6
function calculateTax(income) {
	if(income <= 5000) {
		let tax = (income / 100) * 10;
		return tax;
	} else if (income > 5000 && income <= 10000) {
		let extraTax = ((income - 5000) / 100) * 15;
		let tax = 500 + extraTax;
		return tax;
	} else if (income > 10000) {
		let extraTax = ((income - 10000) / 100) * 20;
		let tax = 500 + 750 + extraTax;
		return tax;
	};
};

console.log(calculateTax(4000)); // output: "400"
console.log(calculateTax(6000)); // output: "650"
console.log(calculateTax(10000)); // output: "1250"
console.log(calculateTax(12000)); // output: "1650"

//4 may 16
function chooseGreater(firstNumber, secondNumber) {
	if (firstNumber > secondNumber) {
		return firstNumber;
	} else if (secondNumber > firstNumber) {
		return secondNumber;
	} else if (firstNumber === secondNumber) {
		return "The numbers are equal."
	}
};
console.log("This is the greater number " + chooseGreater(12, -5));
console.log("This is the greater number " + chooseGreater(0, 0));

//5 may 16
function generateNumbers(arrayLength) {
	let numbersGenerated = [];

	for (var i = 0; i < arrayLength; i++) {
		numbersGenerated.push(i);
	};
	return numbersGenerated;
};

console.log(generateNumbers(3));
console.log(generateNumbers(1));
console.log(generateNumbers(0));

//6 may 16
function pair(x, y) {
	let object = {};

	object.x = x;
	object.y = y;

	return object; 
};

console.log(pair("first", "second"));
console.log(pair(5, "potato"));
console.log(pair(undefined, 3));

//7 may 16
let myArray = [ 3, 1, -2, 0, -9 ];

function multArray(myArray) {
	for (var i = 0; i < myArray.length; i++) {
		let oneNumber = myArray[i];
		let newArray =[];

		if (oneNumber > 0) {
			newArray.push(oneNumber * 2);
		} else if (oneNumber < 0) {
			
		}
	}
	return newArray
};