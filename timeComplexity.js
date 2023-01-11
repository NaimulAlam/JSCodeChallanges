function summation(num) {
  let sum = 0; // 1 input
  for (let i = 1; i <= num; i++) {
    sum += i; // n inputs
  }
  return sum; // 1 inputs
}

// summation has O(n)- Liner Time complexity n+2 inputs it takes

function sum2(num) {
  return (num * (num + 1)) / 2; // 1 input only
}

// sum2 has O(1)- constant Time Complexity caz it takes only 1 input
console.log(sum2(100));
