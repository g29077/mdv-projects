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
	namesArray = ["Rich", "Hutch", "Dusty", "Brando", "Angela"],
	attendArray = [true, true, true, false, true, true]
	
	
;	

var ordering = confirm("Do you want to order pizza? Ok for yes or Cancel for no.");
var orderconfirm = confirm("Did you order pizza? Ok for yes or Cancel for no.");
//functions

var pizza = function (order) {
	
	if (order === true) {
		
		console.log("We are going to have a " + partyType + ".");
		
	} else {
		
		console.log("We are not hungry.");
	}
};

var ordered = function (order, placedOrder) {
	
	if (order === true && placedOrder === false) {
		
		console.log("We did not order pizza.");
		
	} else if (order === true && placedOrder === true) {
		
		console.log("We did order pizza!");
		
	} else {
		
		return false;
		
	};
	
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

var notAttending = function (name, type) {
	var attend = false
	attending = "It is " + attend + " that " + name + " is coming to the " + type;
	
	return attending	
	
};

var slices = function (pizzas, pieces) {
	
	var totalPieces = pizzas * pieces
	
	for (var i = 0; i < pizzas; i++) {
		
		for (var j = 0; j < totalPieces; j = j + pieces)
		
		return totalPieces;
	};
		
		
};

//outputs

pizza(ordering);

var listnumber = guests(namesArray);

console.log("There were " + listnumber + " people invited to the pizza party.");

var willNotBe = notAttending(namesArray[3], partyType);

console.log(willNotBe);

var ordcon = ordered(orderconfirm, ordering);

console.log(ordcon)

var totalSlices = slices(numberOFPizzas, slicesPerPizza);

console.log("There are " + totalSlices + " slices of pizza.");