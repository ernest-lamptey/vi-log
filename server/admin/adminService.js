const pool = require('../db');

const getAllEmployees = () => {
    return pool.query(
        `SELECT * FROM employees`
    )
    .then(res => {
        return res.rows
    })
}

module.exports = {
    getAllEmployees,
}