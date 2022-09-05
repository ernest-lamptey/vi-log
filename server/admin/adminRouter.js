const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
require('dotenv').config({ path: '../../.env'});
const jwt = require('jsonwebtoken');
const { getAllEmployees, addAdmin, getAdminPassword } = require('./adminService')


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


router.post('/login', async (req, res) => {
    const password = await getAdminPassword(req.body.email)
    if (!password){
        res.status(404).send("Invalid credentials")
    }
    try {
        if (await bcrypt.compare(req.body.password, password)){
            const user = { name: req.body.email}
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
            console.log("login success")
            res.json({accessToken: accessToken})
        } else {
            res.status(401).send("Invalid credentials")
        }
    } catch (err) {
        res.status(500).send()
    }
})

router.get('/employees', async (req, res) => {
    try {
        const allEmployees = await getAllEmployees();
        res.status(200).send(allEmployees)
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: {error: error?.message || error}})
    }
})

router.get('*', authenticateToken, (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

module.exports = router;
