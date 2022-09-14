const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
require('dotenv').config({ path: '../../.env'});
const jwt = require('jsonwebtoken');
const { getAllEmployees, 
        addAdmin, 
        getAdminPassword, 
        getVisits, 
        getDailyVisits,
        getBusiestHosts,
        addEmployee,
        editEmployee,
        deleteEmployee,
        updateVisitsforDelete
        } = require('./adminService')


/**
 * @swagger
 * /admin/newAdmin:
 *  post:
 *      description: Add a new admin account
 *      responses:
 *          '201':
 *              description: Created
 *          '500':
 *              description: Server error
 */
router.post('/newAdmin', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const admin = { email: req.body.email, password: hashedPassword }
        await addAdmin(admin)
        res.status(201).send("Successful")
    } catch (err) {
        res.status(err?.status || 500).send({ status: "FAILED", data: {error: err?.message || err}}) 
    }
})


/**
 * @swagger
 * /admin/login:
 *  post:
 *      description: Login to account
 *      responses:
 *          '201':
 *              description: Created
 *          '404':
 *              description: Invalid credentials
 *          '401':
 *              description: Invalid credentials
 *          '500':
 *              description: Server error
 */
router.post('/login', async (req, res) => {
    const password = await getAdminPassword(req.body.email)
    if (!password){
        res.status(404).send("Invalid credentials")
    }
    try {
        if (await bcrypt.compare(req.body.password, password)){
            const user = { name: req.body.email}
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15m"})
            console.log("login success")
            res.json({accessToken: accessToken})
        } else {
            res.status(401).send("Invalid credentials")
        }
    } catch (err) {
        res.status(500).send(err?.message || "Internal Server")
    }
})


/**
 * @swagger
 * /admin/employees:
 *  get:
 *      description: Get all employees
 *      responses:
 *          '200':
 *              description: Successful
 *          '500':
 *              description: Server error
 */
router.get('/employees', async (req, res) => {
    try {
        const allEmployees = await getAllEmployees();
        res.status(200).send(allEmployees)
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: {error: error?.message || error}})
    }
})

/**
 * @swagger
 * /admin/employees:
 *  put:
 *      description: Update employee info
 *      responses:
 *          '204':
 *              description: Updated
 *          '500':
 *              description: Server error
 */
router.put('/employees', async (req, res) => {
    try {
        await editEmployee(req.body);
        res.status(204).send("Employee updated")
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: {error: error?.message || error}})
    }
})

/**
 * @swagger
 * /admin/employees:
 *  delete:
 *      description: Delete employee
 *      responses:
 *          '204':
 *              description: Successful
 *          '500':
 *              description: Server error
 */
router.delete('/employees', async (req, res) => {
    try {
        await updateVisitsforDelete(req.body)
        await deleteEmployee(req.body);
        res.status(204).send("Employee deleted")
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: {error: error?.message || error}})
    }
})

/**
 * @swagger
 * /admin/employees:
 *  post:
 *      description: Add new employee
 *      responses:
 *          '201':
 *              description: Created
 *          '500':
 *              description: Server error
 */
router.post('/employees', async (req, res) => {
    try {
        await addEmployee(req.body)
        res.status(201).send("Successful")
    } catch (err) {
        res.status(err?.status || 500).send({ status: "FAILED", data: {error: err?.message || err}}) 
    }
})

/**
 * @swagger
 * /admin/visits:
 *  get:
 *      description: Get all visits information
 *      responses:
 *          '200':
 *              description: Successful
 *          '500':
 *              description: Server error
 */
router.get('/visits', async (req, res) => {
    try {
        const allVisits = await getVisits();
        res.status(200).json(allVisits)
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: {error: error?.message || error}})
    }
})

/**
 * @swagger
 * /admin/dailyVisits:
 *  get:
 *      description: Get number of visitors per day for the last 30 days
 *      responses:
 *          '200':
 *              description: Successful
 *          '500':
 *              description: Server error
 */
router.get('/dailyVisits', async (req, res) => {
    try {
        const dailyVisits = await getDailyVisits();
        res.status(200).json(dailyVisits)
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: {error: error?.message || error}})
    }
})

/**
 * @swagger
 * /admin/busiestHosts:
 *  get:
 *      description: Get all busiest host in the last 90 days
 *      responses:
 *          '200':
 *              description: Successful
 *          '500':
 *              description: Server error
 */
router.get('/busiestHosts', async (req, res) => {
    try {
        const busiestHosts = await getBusiestHosts();
        res.status(200).json(busiestHosts)
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: {error: error?.message || error}})
    }
})

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})


module.exports = router;
