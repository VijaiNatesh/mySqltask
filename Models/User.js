const mongoose = require('mongoose')
const conn = mongoose.createConnection(process.env.MONGO_URI);

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const User = conn.model('User', UserSchema)

module.exports = User