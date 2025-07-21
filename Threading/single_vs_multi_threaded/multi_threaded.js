const cluster = require("cluster");
const os = require("os");

const numCPUs = os.cpus().length;
const target = 10000000000;

const chunkSize = Math.floor(target / numCPUs);

if (cluster.isPrimary) {
  let startTime = Date.now();
  let totalSum = 0;
  let completedWorkers = 0;

  for (let i = 0; i < numCPUs; i++) {
    const worker = cluster.fork();
    const start = i * chunkSize;

    const end = i === numCPUs - 1 ? target : (i + 1) * chunkSize - 1;

    worker.send({ start, end });

    worker.on("message", (msg) => {
      totalSum += msg.partialSum;
      completedWorkers++;

      if (completedWorkers === numCPUs) {
        let endTime = Date.now();

        console.log(`Time taken: ${endTime - startTime}ms`);
        console.log(`Sum: ${totalSum}`);
        process.exit();
      }
    });
  }
} else {
  process.on("message", (msg) => {
    const { start, end } = msg;
    let partialSum = 0;

    for (let i = start; i <= end; i++) {
      partialSum += i;
    }

    process.send({
      partialSum,
    });
  });
}
