//alert("JavaScript works!");

// Richard Pingree
// SDI 1309
// Project 4

//Variables
var stringNum = "1981",
	people = "John,Jack,Simon",
	separator1 = ",",
	separator2 = "/"

;

// URL String
var urlAddress = prompt("Copy and paste web address.", "enter address here.");
	
var url = function (address) {
	var end = address.lastIndexOf("/")+1;
		
	
	if (address.substring(0,end) == "http://" || address.substring(0,end) == "https://") {
		
		return true;
		
	} else {
		
		return false;
	};
};

//String to Number

var number = function (sNum) {
	
	return parseInt(sNum)
	
	
};

//Changing Separators in a string

var changeSeparator = function (names, commas, slashes) {
	
	var changedSeparators = names.split(commas).join(slashes);
	
	return changedSeparators;
	
	
};




//outputs

//address(emailAddress)

var validUrl = url(urlAddress);

console.log(validUrl);


//String to number output
var numOutput = number(stringNum);

console.log(numOutput);

//Changing Separators Output

var changed = changeSeparator(people, separator1, separator2);

console.log(changed);