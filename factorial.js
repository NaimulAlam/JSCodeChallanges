function factorial(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result = result * i;
  }
  return result;
}

const factWhile = (number) => {
  let result = 1;
  let i = 2;
  while (i <= number) {
    result = result * i;
    i++;
  }
  return result;
};

console.log(factorial(0)); //   1 expected
console.log(factorial(1)); //   1 expected
console.log(factorial(5)); // 120 expected
console.log(factWhile(5)); // 120 expected

// Big = O(n) - linear, there is one for loop.
