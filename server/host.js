// Email and SMS functionality
const nodemailer = require('nodemailer');
const pool = require('./db');
require("dotenv").config();
const axios = require('axios');
const fs = require('fs');


const getReceiverDetails = (id) => {
    return pool.query(`
        SELECT employees.f_name AS host_name, employees.email AS host_email, employees.phone AS host_phone, visits.name AS visitor_name, visits.email AS visitor_email, visits.phone AS visitor_phone 
        FROM employees
        JOIN visits
        ON employees.id = visits.host_id
        WHERE visits.id = $1
        `, [id])
            .then(data => {
                return data.rows[0]
            })
            .catch(err => {
                throw {status: err?.status || 500, message: err.message }
            })
}

// Email setup starts here
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

let mailOptions = {
    from: "Vilog",
    to: "",
    subject: "Meeting Details",
    text: "",
    attachments: ""
}

const visitorNotificationMessage = (receiver_name) => {
    return  `
    Dear ${receiver_name},

    Your meeting has been scheduled and your host has been notified.

    Kindly use the QR code on your next visit to sign in faster.

    Best regards,
    Vilog Team
`
}

const hostNotificationMessage = (receiver_name, visitor_name) => {
    return `
    Dear ${receiver_name},

    Your visitor ${visitor_name} has arrived and is waiting for you.

    Best regards,
    Vilog Team
`
} 

const sendMail = () => {
    transporter.sendMail(mailOptions, function(err, success) {
        if (err) {
            console.error(err)
        } else {
            console.log("Email sent successfully")
            fs.unlink('qr.png', (err) => {
                if (err) {
                    console.error(err)
                    return
                }
            })
        }
    })
};

//SMS setup
const sms_data = {
    'recipient': [],
    'sender': 'Vilog',
    'message': 'API messaging is fun!',
    'is_schedule': 'false',
    'schedule_date': ''
}

const config = {
    method: 'post',
    url: `https://api.mnotify.com/api/sms/quick?key=F4qlW9cO6FEiStNYtyd4XMbFcJOtE0kj4KF1TRQ0wuipY`,
    headers : {
    'Accept': 'application/json'
    },
    data : sms_data
};
    
const sendSMS = () => {
    axios(config)  
    .then(function (response)  {
    console.log(JSON.stringify(response.data));  
    })  
    .catch(function (error)  {
    console.log(error);  
    }) 
}

const sendNotifications =  async (id) => {
        const receiverDetails = await getReceiverDetails(id);
        console.log(receiverDetails);

        mailOptions.to = receiverDetails.visitor_email;
        mailOptions.attachments = [{ filename: 'qr.png', path: './qr.png'}]
        mailOptions.text = visitorNotificationMessage(receiverDetails.visitor_name);
        sendMail();
    
        sms_data.recipient[0] = `${receiverDetails.visitor_phone}`;
        sms_data.message = `Your meeting has been set and your host has been notified.`;
        sendSMS()
        
        
        mailOptions.to = receiverDetails.host_email;
        mailOptions.text = hostNotificationMessage(receiverDetails.host_name, receiverDetails.visitor_name);
        sendMail();
    
        sms_data.recipient[0] = `${receiverDetails.host_phone}`;
        sms_data.message = `Your visitor has arrived and is waiting for you.`;
        sendSMS()
}

module.exports = { sendNotifications }