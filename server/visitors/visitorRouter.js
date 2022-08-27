const express = require('express');
const router = express.Router();
const { addVisitor } = require('./visitorService')

router.get('/', (req, res) => {
    //get all employee id, names, department and photo_url
})
router.post('/', async (req, res) => {
    //post visitor details to visit database
    try {
        await addVisitor(req.body);
        res.status(200).send("Created successfully")
    } catch (error) {
        console.error(error)
        res.status(error?.status || 500).send({ status: "FAILED", data: {error: error?.message || error}})
    }
})

router.put('/', (req, res) => {
    //update the sign out time
})

module.exports = router;