const mongoose = require('mongoose')
const conn = mongoose.createConnection(process.env.MONGO_URI);

const StudentsActivatedCourseSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

const StudentsActivatedCourse = conn.model("StudentsActivatedCourse", StudentsActivatedCourseSchema)
module.exports = StudentsActivatedCourse