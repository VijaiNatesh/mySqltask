var ObjectId = require('mongodb').ObjectID
const express = require('express')
const userRoute = express.Router()
const User = require('../Models/User')


userRoute.post('/', async(req,res) => {
    const { name, email, password } = req.body;
    const user = await User.create({name, email, password})
    res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password
    });
})
userRoute.get('/users', async(req,res) => {
    const user = await User.find()
    res.json(user)
})
userRoute.get('/courseActivated/:id', async(req, res) => {
    const courses = await User.aggregate([
        {
            $match: {
                _id: new ObjectId(req.params.id)
            }
        },
        {
            $lookup: {
                from: "studentsactivatedcourses",
                localField: "_id",
                foreignField: "createdBy",
                as: "course"
            }
        },
        {
            $unwind: "$course"
        },
        {
            $addFields:{
                coursesActivated: "$course.name"
            }
        },
        {
            $project:{               
                coursesActivated: 1
            }
        }

    ])
    res.send(courses)
})





module.exports = userRoute;