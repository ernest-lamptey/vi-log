const express = require('express');
const router = express.Router();
const { addVisitorToDB, signOutVisitor } = require('./visitorService');
const { sendNotifications } = require('../host');

router.post('/', async (req, res) => {
    if (!req.body){
        res.sendFile('../../client/build/index.html');
    }
    try {
        const visitorId = await addVisitorToDB(req.body);
        await sendNotifications(visitorId)
        res.status(200).sendFile(path.join(__dirname, '../client/build/index.html'))
    } catch (error) {
        console.error(error)
        res.status(error?.status || 500).send({ status: "FAILED", data: {error: error?.message || error}})
    }
})

router.put('/', async (req, res) => {
    try {
        await signOutVisitor(req.body.id)
        res.status(204).send("Signout successful")
    } catch (error) {
        console.error(error)
        res.status(error?.status || 500).send({ status: "FAILED", data: {error: error?.message || error}})
    }
})

router.get('*', (req, res) => {
    res.sendFile('../../client/build/index.html');
})

module.exports = router;