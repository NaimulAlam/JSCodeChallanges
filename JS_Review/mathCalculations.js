var bananaPrice = 5;
var applePrice = 7;
var total = bananaPrice + applePrice;
bananaPrice += 10;
applePrice -= 2;

// you can do addition like below in any format age +=1 and age++ is the same thing to increase the value by 1
var age = 10;
age = age + 1;
age += 1;
age++;
var total = bananaPrice + applePrice;
// console.log(bananaPrice);
// console.log(applePrice);
// console.log(age);

var num1 = 0.1;
var num2 = 0.2;
var totalOfNum = num1 + num2;
// console.log(totalOfNum);
// console.log(totalOfNum.toFixed(2)); // get as string

totalOfNum = totalOfNum.toFixed(2); // get limited amount of digit after point
totalOfNum = parseFloat(totalOfNum); // get as Number
// console.log(totalOfNum);

// modulus or reminder after division of to number calculations

var mangoes = 57;
var people = 12;

// division will give you how people will get the mangoes eqally even dividing the reminder
var dividing = mangoes / people;
// reminder will give you the rest of mangoes will be left after giving people whole mangoes available to give;
var reminder = mangoes % people;

var perPersonWillGet = (mangoes - reminder) / people;

console.log(dividing);
console.log(reminder);
console.log(perPersonWillGet);
