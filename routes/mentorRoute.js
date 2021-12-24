const express = require('express')
const mentorRoute = express.Router()
const Mentor = require('../Models/Mentor')

mentorRoute.post('/', async(req,res) => {
    const{name, studentsAssigned} = req.body;
    const mentor = await Mentor.create({name, studentsAssigned})
    res.json(mentor)
})

mentorRoute.get('/list', async(req,res) => {
    const mentor = await Mentor.find()
    res.json(mentor)
})

mentorRoute.get('/list/:id', async(req, res) => {
    const students = await Mentor.findById(req.params.id)
    res.json({
        studentsRegistered: students.studentsAssigned
    })
})

module.exports = mentorRoute