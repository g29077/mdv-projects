//alert("JavaScript works!");

// Richard Pingree
// SDI 1309
// Project 3


//Variables

var partyType = "pizza party",
	numberOfPizzas = 4
	soda = true
	
;	

var ordering = confirm("Do you want to order pizza? Ok for yes or Cancel for no.")

//functions

var pizza = function (order) {
	
	if (order === true) {
		
		console.log("We are going to order " + numberOfPizzas + " pizzas.");
		
	} else {
		
		console.log("We are not hungry.");
	}
};


//outputs

pizza(ordering)