var firstName = "Naimul";
var lastName = "Alam";

var fullName = firstName + " " + lastName;

// console.log(fullName);

var nameCapital = firstName.toUpperCase();

// console.log(nameCapital);

var bananaPrice = "5.2";
var applePrice = 7;

var total = bananaPrice + applePrice;

console.log(total); //57 added side by side like string

// so we convert string to interger number
var bananaPriceNumber = parseInt(bananaPrice); 
var bananaPriceNumberFloat = parseFloat(bananaPrice); 

total = bananaPriceNumber + applePrice;
console.log(total);
total = bananaPriceNumberFloat + applePrice;
console.log(total);
