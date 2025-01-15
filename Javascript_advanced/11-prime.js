function countPrimeNumbers() {
  function isPrime(n) {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  let prime = 0;
  for (let num = 2; num <= 100; num++) {
    if(isPrime(num)) {
      prime++;
    }
  }
  return prime;
}

const start = performance.now();

setTimeout(() => {
  for (let i = 1; i <= 100; i++) {
    countPrimeNumbers();
  }
  const end = performance.now();
  console.log(`Execution time of printing countPrimeNumbers was ${end - start} milliseconds.`);
});
