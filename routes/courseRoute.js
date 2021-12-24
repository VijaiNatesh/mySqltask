const express = require('express')
const courseRoute = express.Router()
const Course = require('../Models/Course')

courseRoute.post('/', async(req, res) => {
    const {name} = req.body;
    const course = await Course.create({name})
    res.json(course)
})

module.exports = courseRoute