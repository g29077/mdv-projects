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
	numberOFPizzas = 0,
	namesArray = ["Rich", "Hutch", "Dusty", "Brando", "Angela"],
	attendArray = [true, true, true, false, true, true]
	
	
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

var guests = function (nameList) {
	nameList[5] = "Megan";
	var listLength = nameList.length;
	
	for (var i = 0; i <= listLength; i++) {
		
		if (i < listLength)
			console.log(listLength)
		return listLength;
	}; 
	
};

//outputs

pizza(ordering);

var listnumber = guests(namesArray);

console.log("There were " + listnumber + " people invited to the pizza party.");