const express = require('express');
const router = express.Router();
const { addVisitorToDB } = require('./visitorService');
const { sendNotifications } = require('../host');

router.post('/', async (req, res) => {
    if (!req.body){
        res.sendFile('../../client/build/index.html');
    }
    try {
        const visitorId = await addVisitorToDB(req.body);
        // await sendNotifications(visitorId)
        res.status(200).send("Successful")
    } catch (error) {
        console.error(error)
        res.status(error?.status || 500).send({ status: "FAILED", data: {error: error?.message || error}})
    }
})

router.put('/', (req, res) => {
})

router.get('*', (req, res) => {
    res.sendFile('../../client/build/index.html');
})

module.exports = router;