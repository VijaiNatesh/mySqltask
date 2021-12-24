const express = require('express')
const courseActivated = express.Router()
const StudentsActivatedCourse = require('../Models/StudentsActivatedCourse')

courseActivated.post('/', async(req, res) => {
    const{name, createdBy} = req.body;
    const coursesActivated = await StudentsActivatedCourse.create({name, createdBy})
    res.json(coursesActivated)
})

module.exports = courseActivated