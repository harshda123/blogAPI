const Blog = require('../model/blog')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

// get data by id
exports.getblogbyid = async (req, res)=>{
    try{
        const data = await Blog.FindById(req.params,id)
        return res.json({ errors: false, data: data })

    }catch (error){
        return res.status(400).json({ errors: true, message: error.message })

    }
}

//get data
exports.getBlog = async (req, res) => {
    try {
        const data = await Blog.find()
        return res.json({errors: false, data:data})
    } catch (error) {
        return res.status(404).json({ errors: true, message: error.message})
    }
}

//post data
exports.postBlog = async (req, res) => {
    try {
        const newBlog = new Blog(req.body)
        const data = await newBlog.save();
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message });
    }
}


//put data
exports.putBlog = async (req,res) =>{
    try {
        const id = req.params.id;
        const data = await Blog.findByIdAndUpdate(id,req.body,{new:true})
        return res.json({errors:false, data:data})
    } catch (error) {
        return res.status(400).json({errors:true, message:error.message})
        
    }
}

//delete data
exports.deleteBlog = async (req,res)=>{
    try {
        const data = await Blog.findByIdAndDelete(req.params.id);
        return res.json({errors:false, data:data})

    } catch (error) {
        return res.status(400).json({errors:true, message:error.message})
        
    }
}

