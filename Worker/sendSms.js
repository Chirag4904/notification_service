const accountSid = "ACd44a817101e0794c3bcf4353c7811882";
const authToken = "b3f976a1adc51ae348d929a14eba7f48";
const client = require("twilio")(accountSid, authToken);

function sendSms(body) {
  client.messages
    .create({
      body: body,
      to: "+918708602727",
      from: "+13346978219",
    })
    .then((message) => console.log(message.sid))
    .catch((error) => {
      // You can implement your fallback code here
      console.log(error);
    });
}

module.exports = { sendSms };
