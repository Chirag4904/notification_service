const nodemailer = require('nodemailer');

const  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'aggarwalchirag4904@gmail.com',
        pass: 'dominick@4904'
    }
});

module.exports = {
    transporter
}

