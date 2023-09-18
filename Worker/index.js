const Queue = require("bull");
const { sendSms } = require("./sendSms");
const { sendMail } = require("./sendMail");
console.log("started the worker");
// Create a Bull queue instance
const jobQueue = new Queue("multiply", "redis://127.0.0.1:6379");

// Define the worker function that will process jobs
const workerFunction = async (job) => {
  try {
    const data = job.data;
    const number = data.number;

    const start = Date.now();

    // Your job processing logic goes here
    console.log(`Processing job with data: ${JSON.stringify(data)}`);
    sendMail(
      "chiragaggarwal69@gmail.com",
      "subject",
      `testing the worker ${number}`
    );
    // sendSms(`number ${number}`);

    // await new Promise((resolve) => setTimeout(resolve, 5000));

    // Mark the job as completed
    return { status: "completed", time: Date.now() - start };
  } catch (error) {
    // Handle any errors that occur during job processing
    console.error(`Job ${job.id} failed with error: ${error.message}`);
    throw error; // This will cause the job to be retried unless maxAttempts is reached
  }
};

// Create a Bull worker and specify the worker function
jobQueue.process(11, workerFunction);

// Listen for completed and failed job events
jobQueue.on("completed", (job, result) => {
  console.log(`Job ${job.id} completed with ${result.time}`);
});

jobQueue.on("failed", (job, err) => {
  console.error(`Job ${job.id} failed with error: ${err.message}`);
});
