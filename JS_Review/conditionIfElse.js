var tasksArray = [
  "salat",
  "study",
  "coding",
  "projects",
  "call to family",
  "driving thery lessons",
];

// for (var i = 0; i < tasksArray.length; i++) {
//   console.log(tasksArray[i]);
// }

var i = 0;

while (i < tasksArray.length) {
  console.log(tasksArray[i]);
  i++;
}

// odd number with while loop
var num = 0;
var oddNumbers = [];

while (num <= 10) {
  if (num % 2 != 0 && num != 0) {
    oddNumbers.push(num);
  }
  num++;
}
console.log(oddNumbers);

// even number with for loop

var evenNumbers = [];

for (var i = 0; i <= 10; i++) {
  if (i % 2 == 0 && i != 0) {
    evenNumbers.push(i);
  }
}

console.log(evenNumbers);
