const pool = require('../db');

const addAdmin = (body) => {
    return pool.query(
        "INSERT INTO admins (email, password) VALUES ($1, $2)", [body.email, body.password]
    )
    .then(res => console.log("Added new admin"))
    .catch(err => {
        throw {status: err?.status || 500, message: err.message}
    })
}

const getAdminPassword = (email) => {
    return pool.query(
        "SELECT password FROM admins WHERE email = $1", [email]
    )
    .then(res => {
        // console.log(res.rows[0].password
        if (!res.rows[0]){
            console.log("Doesn't exist")
            return 
        } else {
            return res.rows[0].password
        }
    })
    .catch(err => {
        console.error(err)
        throw {status: err?.status || 500, message: err.message}
    })
}
const getAllEmployees = () => {
    return pool.query(
        `SELECT * FROM employees`
    )
    .then(res => {
        return res.rows
    })
    .catch(err => {
        throw {status: err?.status || 500, message: err.message}
    })
}

const getAllVisitDetails = () => {
    return pool.query(
    
    )
}


module.exports = {
    getAllEmployees,
    addAdmin,
    getAdminPassword,
}