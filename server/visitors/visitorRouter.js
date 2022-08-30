const express = require('express');
const router = express.Router();
const { addVisitorToDB } = require('./visitorService');
const { sendNotifications } = require('../host');

router.get('/', (req, res) => {
    //get all employee id, names, department and photo_url
})
router.post('/', async (req, res) => {
    //post visitor details to visit database
    try {
        const visitorId = await addVisitorToDB(req.body);
        await sendNotifications(visitorId)
        res.status(200).send("Successful")
    } catch (error) {
        console.error(error)
        res.status(error?.status || 500).send({ status: "FAILED", data: {error: error?.message || error}})
    }
})

router.put('/', (req, res) => {
})

module.exports = router;