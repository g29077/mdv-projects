//alert("JavaScript works!");

// Richard Pingree
// SDI 1309
// Project 4

//Variables
var stringNum = "1981";

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


//outputs

//address(emailAddress)

var validUrl = url(urlAddress);

console.log(validUrl);


//String to number output
var numOutput = number(stringNum);

console.log(numOutput);