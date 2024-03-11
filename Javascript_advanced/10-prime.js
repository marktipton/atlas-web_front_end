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
  return executionTime;
}

const totalTimeStart = performance.now();

for (let i=0; i < 100; i++) {
  countPrimeNumbers();
}

const totalTimeEnd = performance.now();
const totalTime = totalTimeEnd - totalTimeStart;

console.log(`Execution time of printing countPrimeNumbers was ${totalTime} milliseconds.`);

