

function sumOfPrimes(n) {
  let sum = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

// Input
const n = 10;

// Output
console.log(sumOfPrimes(n));
