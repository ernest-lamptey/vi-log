const pool = require('../db');

const addVisitor = (body) => {
    // add visitor details to visits table in db
    // check if visitor is already signed in
    //problem with handling errors
    pool.query(
        `INSERT INTO visits (name, phone, email, company, purpose, host_id, photo_url)
        VALUES ($1, $2, $3, $4, $5, $6, $7)`, 
        [body.name, body.phone, body.email, body.company, body.purpose, body.host_id, body.photo_url]
    )
    .then((res) => { console.log("Login details added to database") })
    .catch(e => {
        console.error(e.message)
        return {status: e?.status || 500, message: e.message}
    })

}

//import get all employees from admin module.

module.exports = {
    addVisitor,
}