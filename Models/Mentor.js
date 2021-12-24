const mongoose = require('mongoose')
const conn = mongoose.createConnection(process.env.MONGO_URI);

const MentorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    studentsAssigned: {
        type: Number,
        required: true
    }
})

const Mentor = conn.model("Mentor", MentorSchema)

module.exports = Mentor