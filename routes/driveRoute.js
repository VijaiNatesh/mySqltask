const express = require('express')
const driveRoute = express.Router();
const Drive = require('../Models/Drive')

driveRoute.post('/', async(req,res) => {
    const {attendedDrives, createdBy} = req.body;
    const drives = await Drive.create({attendedDrives, createdBy})
    res.json(drives)
})


module.exports = driveRoute