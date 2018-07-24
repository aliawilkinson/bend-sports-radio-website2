
'use strict';
const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'Sportsradio949@gmail.com',
        pass: 'Ratings949'
    }
});
let mailOptions = {
    from: '"Alia test" <foo@example.com>', // sender address
    to: 'Sportsradio949@gmail.com', // list of receivers
    subject: 'Hello Test', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
};
// send mail with defined transport object

transporter.sendMail(mailOptions, function (err, info) {
    if (err)
        console.log(err)
    else
        console.log(info);
});