//alert("JavaScript works!");

// Richard Pingree
// SDI 1309
// Project 3

//JSON DATA

var jsonData = {
	"partyGuests" :
		[
			{
				"name" : "Rich",
				"invite" : "email",
				"attending" : true
			},
			{
				"name" : "Hutch",
				"invite" : "email",
				"attending" : true
			},
			{
				"name" : "Dusty",
				"invite" : "letter",
				"attending" : true
			},
			{
				"name" : "Brando",
				"invite" : "letter",
				"attending" : false
			},
			{
				"name" : "Angela",
				"invite" : "email",
				"attending" : true
			},
			{
				"name" : "Megan",
				"invite" : "letter",
				"attending" : true
			},
		]
};

//Variables

var partyType = "pizza party",
	slicesPerPizza = 8,
	numberOFPizzas = 4,
	
	
;	

var ordering = confirm("Do you want to order pizza? Ok for yes or Cancel for no.")

//functions

var pizza = function (order) {
	
	if (order === true) {
		
		console.log("We are going to have a " + partyType + ".");
		
	} else {
		
		console.log("We are not hungry.");
	}
};



//outputs

pizza(ordering)

