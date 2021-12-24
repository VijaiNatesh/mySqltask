const mongoose = require('mongoose')
const conn = mongoose.createConnection(process.env.MONGO_URI);

const DriveSchema = new mongoose.Schema({
    attendedDrives:{
        type: Number,
        required: true
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

const Drive = conn.model("Drive", DriveSchema)
module.exports = Drive