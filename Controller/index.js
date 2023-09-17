const Queue = require("bull");

console.log("controller started");

const jobQueue = new Queue("multiply", "redis://127.0.0.1:6379");
// jobQueue.empty();

const a = [1];

for (let index = 0; index < a.length; index++) {
  const element = a[index];
  jobQueue.add({ number: element });
}
