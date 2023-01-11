// determine if the number is a prime

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  const sqrtNum = Math.sqrt(num);
  for (let i = 2; i < sqrtNum; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1)); //  false
console.log(isPrime(2)); //  true
console.log(isPrime(4)); //  false
console.log(isPrime(5)); //  true
console.log(isPrime(15)); // false
console.log(isPrime(47)); // true

// Big O - O(n) without taking Math.sqrt  
// Big O - O(sqrt(n)) with, this is more optimal 