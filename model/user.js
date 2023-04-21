const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type: Boolean
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model("myuser1",userSchema)