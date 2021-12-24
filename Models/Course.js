const mongoose = require('mongoose')
const conn = mongoose.createConnection(process.env.MONGO_URI);

const CourseSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }
})

const Course = conn.model("Course", CourseSchema)
module.exports = Course