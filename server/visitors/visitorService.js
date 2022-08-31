const pool = require('../db');
//move email functionality to host module and imported into the visitor service module
// the addVisitor will also query the database for complete visit details and return an object
// with all the necessary information which will be passed into the email and
// sms functionality

// loginVisitor[addVisitorToDB, sendNotifications[sendMail, sendSMS]]
// logoutVisitor


const addVisitorToDB = (body) => {
    return pool.query(
        `INSERT INTO visits (name, phone, email, company, purpose, host_id, photo_url)
        VALUES ($1, $2, $3, $4, $5, $6, $7)`, 
        [body.name, body.phone, body.email, body.company, body.purpose, body.host_id, body.photo_url]
    )
    .then((res) => {
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

module.exports = {
    addVisitorToDB,
}