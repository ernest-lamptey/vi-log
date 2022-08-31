const express = require('express');
const router = express.Router();
const { getAllEmployees } = require('./adminService')

router.get('/employees', async (req, res) => {
    try {
        const allEmployees = await getAllEmployees();
        console.log(allEmployees)
        res.status(200).send({ status: "Successful", data: allEmployees })
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: {error: error?.message || error}})
    }
})

module.exports = router;
