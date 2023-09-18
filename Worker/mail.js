const nodemailer = require('nodemailer');

const  transporter = nodemailer.createTransport({
    
        host: "smtp.gmail.com",
        port: 587,
        tls: {
            rejectUnauthorized: true,
            minVersion: "TLSv1.2"
        },
   
    auth: {
        user: 'aggarwalchirag4904@gmail.com',
        pass: 'wexp qgyd ritj avxw'
    }
});


module.exports = transporter;
