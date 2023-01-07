// Array is a collecttion of multiple items which is saved under one variable. JavaScript arrays are resizable and can contain a mix of different data types. Array values are will stay inside of [] third bracket.
var friendsAge = [20, 22, 23, 20, 29, 30];

var vowels = ["a", "e", "i", "o", "u"];
// console.log(fruits);

// arrays are accessable by non-negetive integers starting from 0 index. Or array's elements position in the array revealed by its position , which is called index
var fruits = ["apple", "banana", "orange", "water melon", "papaya"];
var fndIndex = fruits.indexOf("lime"); // -1, if something is not available inside array it gives -1.
console.log(fndIndex);
var firstFruitsName = fruits[0];
var secondFruitsName = fruits[1];
var fruitsName = fruits[100]; // if the position has no value it will return undefined.

// replacing a value with new value by position
fruits[0] = "lime";
// console.log(firstFruitsName);
// console.log(secondFruitsName);
console.log(fruitsName);
console.log(fruits);

// length of array or how many elements are in array, to check
console.log(vowels.length);

// Array Push and Pop

var lastBencher = ["naim", "rakib", "tanjim"];

lastBencher.push("alam"); // push add element at the end
lastBencher.pop(); // pop remove one element from the end
var lastItem = lastBencher.pop(); // pop remove one element from the end and saves it as variable
console.log(lastBencher);
console.log(lastItem);

var firstItemRemove = lastBencher.shift(); // removing first item from array
var firstItemAdd = lastBencher.unshift("Naimul"); // adding first item from array
// Easy Diagram to remember
// unshift -> [array] < - push
// shift   <- [array] -> pop
console.log(firstItemRemove);
console.log(firstItemAdd);
console.log(lastBencher);

// adding to arrays or one element to array with concat

var first3Months = ["jan", "feb", "mar"];
var next3Month = ["apr", "may", "jun"];
var newMonth = "july";
var allMonths = first3Months.concat(next3Month);

allMonths = first3Months.concat(newMonth);
allMonths = [newMonth].concat(first3Months);

console.log(allMonths);

var bootleColor = "yellow";
var waterQuantity = 1;
var isFull = false;

// array summary
var items = ["bottle", "mug", "paper", "pen"];
items.indexOf("logens"); // -1
items.push("envelope");
items.push("watch");
items.pop();
items.unshift("firstItem");
items.shift(); // remove first item

//conditionals
if (items.length >= 4) {
  console.log("you have a lot of items");
} else if (items.length == 4) {
  console.log("you only have a quarter of items");
} else {
  console.log("WOW! You have a clean desk.");
}
