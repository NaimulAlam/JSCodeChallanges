// a positive integer 'n', find if the number is a power of 'x' such that 'n' === 2^x

function isPowerOfTwo(num) {
  if (num < 1) {
    return false;
  }
  while (num > 1) {
    if (num % 2 !== 0) {
      return false;
    }
    num = num / 2;
  }
  return true;
}

console.log(isPowerOfTwo(1024));

// Big O = O(logn) because number is going down half every time.

function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitWise(8));

// more optimized Big -O = O(1)
