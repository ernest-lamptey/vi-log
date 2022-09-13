const pool = require('../db');
const qr = require('qrcode');


//move email functionality to host module and imported into the visitor service module
// the addVisitor will also query the database for complete visit details and return an object
// with all the necessary information which will be passed into the email and
// sms functionality

// loginVisitor[addVisitorToDB, sendNotifications[sendMail, sendSMS]]
// logoutVisitor

const generateQR = (body) => {
   let stringJson = JSON.stringify(body);
   qr.toFile('qr.png', stringJson, function(err, code) {
        if (err) return console.log(err);
        console.log(code)
   })
}

const addVisitorToDB = (body) => {
    return pool.query(
        `INSERT INTO visits (visitor_name, phone, email, company, purpose, host_id, photo_url)
        VALUES ($1, $2, $3, $4, $5, $6, $7)`, 
        [body.visitor_name, body.phone, body.email, body.company, body.purpose, body.host_id, body.photo_url]
    )
    .then(res => {
        generateQR(body)
    })
    .then((res2) => {
        return pool.query(`SELECT * FROM visits ORDER BY id DESC LIMIT 1`)
    })
    .then(data => {
        return data.rows[0].id
    })
    .catch(err => {
        console.log(pool.options)
        console.error(err);
        throw {status: err?.status || 500, message: err.message}
    })
}

const signOutVisitor = (id) => {
    return pool.query(`
        UPDATE visits
        SET sign_out = CLOCK_TIMESTAMP()::TIME(0)
        WHERE id = $1
    `, [id])
        .then((res) => console.log("Sign out successful"))
        .catch(err => {
            throw {status: err?.status || 500, message: err.message}
        })
}

module.exports = {
    addVisitorToDB,
    signOutVisitor
}