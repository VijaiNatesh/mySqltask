const mongoose = require('mongoose')
const conn = mongoose.createConnection(process.env.MONGO_URI);

const CodekataSchema = new mongoose.Schema({
    problemSolved:{
        type: Number,
        required: true
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

const Codekata = conn.model('Codekata', CodekataSchema)

module.exports = Codekata