const pool = require('../db');

const getAllEmployees = () => {
    return pool.query(
        `SELECT * FROM employees`
    )
    .then(res => {
        return res.rows
    })
}

const getAllVisitDetails = () => {
    return pool.query(
    
    )
}
module.exports = {
    getAllEmployees,
}