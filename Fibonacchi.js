// Give a number 'n', find nth element of the Fibonacchi sequence
function fibonacchi(num) {
  const numArr = [0, 1];

  if (num === 1 || num === 2) {
    return numArr;
  } else {
    for (let i = 2; i < num; i++) {
      numArr[i] = numArr[i - 1] + numArr[i - 2];
    }
    return console.log(numArr);
  }
}
fibonacchi(7); //[0, 1, 1, 2, 3, 5, 8]

const fiboWithWhile = (num) => {
  const numArr = [0, 1];

  if (num === 1 || num === 2) {
    return numArr;
  }

  let i = 2;

  while (i < num) {
    numArr[i] = numArr[i - 1] + numArr[i - 2];
    i++;
  }
  return console.log(numArr);
};

fiboWithWhile(9); //[0, 1, 1, 2, 3, 5, 8, 13, 21]

function recutionFib(n) {
  if (n < 2) {
    return n;
  }
  return recutionFib(n - 1) + recutionFib(n - 2);
}

console.log(recutionFib(8));

// Big-O = O(2^n)  it's very bad solution than the iterative one
