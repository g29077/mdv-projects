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

var movies = function (watchMovie, nom) {
	
	watchMovie = confirm("Have you watch a movie? Ok for yes and Cancel for no.")
	
	output1 = watchMovie
	
	while (nom > 0) {
		
		 nom--;
		
		if (nom > 0) {
			
			return output1;
		
		} else {
			break;
			
		};
	};
};

var collection = function (nom) {

	for (var output2 = 0; output2 <= nom; output2 = output2 + 1) {
		
			
	};
		return output2;
};

var soldOut = function (identity, out) {
	 var videos = 30
	output3 = identity + " has sold " + videos + " movies, so now he is " + out;
	
	return output3;
	
};
// Main code/Output

myName(name = prompt("Enter Name Here. i.e Rich"));
var myCollection = movies(watched, numberOfMovies);

console.log("It is " + myCollection + " that I have a watched a movie.");
var sale = collection(myMovies);

console.log("I am selling my movies and I have sold " + sale + " of them.");

var info = soldOut(identity, out)

console.log(info)