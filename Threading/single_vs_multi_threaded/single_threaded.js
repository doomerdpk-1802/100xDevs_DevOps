let startTime = Date.now();

let sum = 0;

for (let i = 1; i <= 10000000000; i++) {
  sum += i;
}

let endTime = Date.now();

console.log(`Time taken: ${endTime - startTime}ms`);
console.log(`Sum: ${sum}`);
