const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true
    },
    isAdmin:{
        type: Boolean
    }
})

module.exports = mongoose.model("myblog",blogSchema)