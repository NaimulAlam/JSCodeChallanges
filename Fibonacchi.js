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
