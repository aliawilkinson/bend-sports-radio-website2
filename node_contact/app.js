const express = require('express');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const creds = require('./node-config/real-credentials.config');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/api/send-email', (req, res, next) => {

    console.log('WE MADE IT HERE:', req.body.message.val);

    const output = `
    <p>You have a new contact request.</p>
    <h3>Contact Details:</h3>
    <ul>
        <li>Name: ${req.body.name.val}</li>
        <li>Phone: ${req.body.phone.val}</li>
        <li>Email: ${req.body.email.val}</li>
    </ul>
    <h3>Message: </h3>
    <p>${req.body.message.val}</p>
    `

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: creds.USER,
            pass: creds.PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });


    let mailOptions = {
        from: '"Website Email 94.9" <Sportsradio949@gmail.com>', // sender address
        to: 'Sportsradio949@gmail.com', // list of receivers
        subject: `${req.body.name.val} has contacted you from the 94.9 Website`, // Subject line
        text: output, // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send('Failed to send message');
            return console.log(error);
        }

        res.render('contact', { msg: 'Email has been sent.' })
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
})

app.listen(3001, () => console.log('server started'));