//alert("JavaScript works!");


// Richard Pingree
// SDI 1309
// Project 2

// Variables
var identity = "Rich",
	name,
	myMovies = 30
	numberOfMovies = 3,
	watched = true,
	out = "out of stock"
;
// Functions
var myName = function (n) {
	
	if (n = n) {
		 console.log("My name is " + n + ".");
		
	} else
		console.log("No Name Entered");
};

var movies = function (watched) {
	
	output1 = watched
	
	
	while (watched > 0) {
	
			if (watched > 0) {
			
			return output1;
		} else {
			break;
			
		};
	};
};

var collection = function (nom) {

	for (var i = 0; i <= nom; output2 = i + 1) {
		var output2;
		if (i < nom) {
		
			
			return output2;
			
		} else {
			return nom - 30;
		};
	};
	
};

var soldOut = function (identity, out) {
	 var videos = 30
	output3 = identity + " has sold " + videos + " movies, so now he is " + out;
	
	return output3;
	
};
// Main code/Output

myName(name = prompt("Enter Name Here. i.e Rich"));
var myCollection = movies(watched = confirm("Have you watch a movie? Ok for yes and Cancel for no."));

console.log("It is " + myCollection + " that I have a watched a movie.");
var sale = collection(30);

console.log("I have sold " + sale + " movies.");

var info = soldOut(identity, out)

console.log(info)