
// Print random number between two number including them. and print till a given num

function randomNum(min, max) {
  return Math.floor(Math.random() * (max-min + 1)) +min
}

const PrintNo = 5;

for (let i = 0; i < PrintNo; i++) {
  console.log(randomNum(1, 6));
}