function countPrimeNumbers() {
  const start = performance.now();
  let i = 2;
  let count = 0;
  for (; i < 101; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      count++;
    }
  }
  const end = performance.now();
  const executionTime = end - start;
  console.log(`Execution time of printing countPrimeNumbers was ${performance.now(countPrimeNumbers)} milliseconds.`);
  return count;
}

countPrimeNumbers();