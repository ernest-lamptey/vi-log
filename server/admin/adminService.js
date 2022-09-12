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

const addEmployee = (body) => {
    return pool.query(
        `INSERT INTO employees (f_name, l_name, department, email, phone)
        VALUES ($1, $2, $3, $4, $5)`, [body.f_name, body.l_name, body.department, body.email, body.phone]
    )
    .then(res => console.log("Added new employee"))
    .catch(err => {
        throw {status: err?.status || 500, message: err.message}
    })
}

const editEmployee = (body) => {
    return pool.query(
        `UPDATE employees
         SET f_name = $1, l_name = $2, department = $3, email = $4, phone = $5
         WHERE id = $6
        `, [body.f_name, body.l_name, body.department, body.email, body.phone, body.id]
    )
    .then((res) => console.log("Employee updated"))
    .catch(err => {
        throw {status: err?.status || 500, message: err.message}
    })
}

const deleteEmployee = (body) => { 
    return pool.query(
        `DELETE FROM employees
         WHERE id = $1
        `, [body.id]
    )
    .then((res) => console.log("Employee deleted"))
    .catch(err => {
        console.log('failing in admin service')
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
        `SELECT id, f_name, l_name, department, photo_url FROM employees`
    )
    .then(res => {
        return res.rows
    })
    .catch(err => {
        throw {status: err?.status || 500, message: err.message}
    })
}

const getVisits = () => {
    return pool.query(
        `SELECT * FROM visits`
    )
    .then(res => {
        return res.rows
    })
    .catch(err => {
        throw {status: err?.status || 500, message: err.message}
    })
}

const getDailyVisits = () => {
    return pool.query(
        `SELECT date, count(*) FROM visits
        WHERE date > current_date - interval '30' day
        GROUP BY date
        ORDER BY date asc`
    )
    .then(res => {
        return res.rows
    })
    .catch(err => {
        throw {status: err?.status || 500, message: err.message}
    })
}

const getBusiestHosts = () => {
    return pool.query(
        `SELECT host_id, count(*) FROM visits
        WHERE date > current_date - interval '90' day
        GROUP BY host_id`
    )
    .then(res => {
        return res.rows
    })
    .catch(err => {
        throw {status: err?.status || 500, message: err.message}
    })
}

module.exports = {
    getAllEmployees,
    addAdmin,
    getAdminPassword,
    getVisits,
    getDailyVisits,
    getBusiestHosts,
    addEmployee,
    editEmployee,
    deleteEmployee
}