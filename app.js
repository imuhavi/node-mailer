require('dotenv').config();

const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
   host: "smtp.gmail.com",
   port: 465,
   secure: true,
   auth: {
     user: process.env.EMAIL_USERNAME,
     pass: process.env.EMAIL_PASSWORD
   }
});

const mailOptions = {
     from: 'sender@gmail.com', // Sender address
     to: 'receiver@gmail.com', // List of recipients
     subject: 'Node Mailer', // Subject line
     text: 'Hello this is a test', // Plain text body
};

transport.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});