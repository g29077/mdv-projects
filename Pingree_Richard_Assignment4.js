//alert("JavaScript works!");

// Richard Pingree
// SDI 1309
// Project 4

//Variables

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


//outputs

//address(emailAddress)

var validUrl = url(urlAddress);

console.log(validUrl);