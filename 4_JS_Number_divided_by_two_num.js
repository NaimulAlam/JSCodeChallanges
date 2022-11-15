function printNum(n, l, r) {
  if (n === 0) {
    return 0;
  }
  if (n % l == 0 && n % r == 0) {
    return "FizzBuzz";
  } else if (n % l == 0) {
    return "Fizz";
  } else if (n % r == 0) {
    return "Buzz";
  }
  return n;
}

const n = 120;
const l = 3;
const r = 5;
console.log(printNum(n, l, r));
