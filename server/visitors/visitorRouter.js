const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //get all employee id, names, department and photo_url
})
router.post('/', (req, res) => {
    //post visitor details to visit database
    console.log(req.body)
    res.status(200).send('Created successfully!')
})

router.put('/', (req, res) => {
    //update the sign out time
})

module.exports = router;