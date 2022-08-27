const pool = require('../db');
const nodemailer = require('nodemailer');
require('dotenv').config();

// setup for email
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
})
// email sending options and message
let mailOptions = {
    from: "Vilog",
    to: "",
    subject: "Meeting Details",
    text: ""
}

const addVisitor = (body) => {
    // add visitor details to visits table in db
    // check if visitor is already signed in
    //problem with handling errors
    pool.query(
        `INSERT INTO visits (name, phone, email, company, purpose, host_id, photo_url)
        VALUES ($1, $2, $3, $4, $5, $6, $7)`, 
        [body.name, body.phone, body.email, body.company, body.purpose, body.host_id, body.photo_url]
    )
    .then((res) => {
        console.log("Login details added to database");
        // sending the email
        mailOptions.to = body.email;
        mailOptions.text = `
        Dear ${body.name},

        Your meeting has been successfully scheduled.
        
        Best regards,
        Vilog Team.
        `;
        transporter.sendMail(mailOptions, function(err, success) {
            if (err) {
                console.error(err)
            } else {
                console.log("Email sent successfully")
            }
        })
    })
    .catch(e => {
        console.error(e.message)
        return {status: e?.status || 500, message: e.message}
    })
}

//import get all employees from admin module.

module.exports = {
    addVisitor,
}