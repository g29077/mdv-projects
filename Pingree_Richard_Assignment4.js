//alert("JavaScript works!");

// Richard Pingree
// SDI 1309
// Project 4

//Variables
var stringNum = "1981",
	people = "John,Jack,Simon",
	separator1 = ",",
	separator2 = "/",
	address = "name@domain.com",
	telephone = "555-555-5555"
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
	
	return parseInt(sNum);
	
	
};

//Changing Separators in a string

var changeSeparator = function (names, commas, slashes) {
	
	var changedSeparators = names.split(commas);
	
	return changedSeparators.join(slashes);
	
	
};

//Title-case a Sting

var phrase = prompt("Write a phrase.");

var title = function (words) {

	var eachWord = words.toLowerCase().split(" "); //changes sentence to lower case then split turns string into array
    for ( var i = 0; i < eachWord.length; i++ ) //counts how many words are in the string
	{
		var j = eachWord[i].charAt(0).toUpperCase(); //selects the first letter of each word and capitalizes it
        eachWord[i] = j + eachWord[i].substring(1); //addes the capitalized first letter to each word
	};

	return eachWord.join(" ");	// array method join returns all words back into a string
		
};

//Phone number function

var phoneNumber = function (ctn) {
	
	var dash = ctn.indexOf("-");
	
	if (isNaN(ctn.substring(0, 2) && ctn.substring(4, 6) && ctn.substring(8, 11))) {
		
		return false;
	} else if (ctn.length == 12 && ctn.substring(0, dash) && ctn.substring(4, dash)) {
		
		return true;
		
	} else {
		return false;
	};
};

// Email format
var address = "name@domain.com"

var emailAddress = function (email) {
	var period = email.length - 4;
	
	if (email.contains("@") && email.charAt(period) == "." ) {
		
		return true;
		
	} else {
		
		return false;
	};
};


//outputs

//address(emailAddress)

var validUrl = url(urlAddress);

console.log("Is the URL valid? " + validUrl);


//String to number output
var numOutput = number(stringNum);

console.log(numOutput);

//Changing Separators Output

var changed = changeSeparator(people, separator1, separator2);

console.log(people + " had been changed to " + changed);

//Title-case output

var titled = title(phrase);

console.log(titled);

//Phone number output

var checkNumber = phoneNumber(telephone);

console.log("Does the number have a phone number pattern? " + checkNumber);

//Email format Output

console.log("Is the address formated as an email address? " + emailAddress(address));