const nodemailer = require("nodemailer");

// Create a reusable transporter object
const transporter = nodemailer.createTransport({
  // host: "smtp.gmail.com",
  service: "gmail",
  // secure: true,
  // port: 587,
  auth: {
    user: "aggarwalchirag4904@gmail.com",
    pass: "wexp qgyd ritj avxw",
  },
});
function sendMail(sendTo, subject, text) {
  const mailOptions = {
    from: "aggarwalchirag4904@gmail.com",
    to: sendTo,
    subject: subject,
    text: text,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent!");
    }
  });
}

module.exports = { sendMail };
