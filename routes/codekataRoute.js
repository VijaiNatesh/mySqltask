const express = require('express')
const codekataRoute = express.Router()
const Codekata = require('../Models/CodeKata')

codekataRoute.post('/', async(req,res) => {
    const {problemSolved, createdBy} = req.body;
    const codekataSolved = await Codekata.create({problemSolved, createdBy})
    res.json(codekataSolved)
})


module.exports = codekataRoute