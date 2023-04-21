const User = require('../model/user')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

exports.getuser = async (req,res) => {
    try{
        const data = await User.find();
        return res.json({ errors:true,message:error.message })

    }catch (error) {
        return res.status(400).json({ errors:true,messsage:error.messsage })
    }
}



exports.postUser = async (req, res) => {
    try{
        //duplicate user checking

        const userExists = await User.findOne({ email: req.body.email })
        if (userExists) return res.status(400).json({ errors:true,message: "user already exist" })

        //password encryption
        const salt = await bcrypt.genSalt(10)

        req.body.password = await bcrypt.hash(req.body.password, salt)

        const newUser = new User(req.body)

        const data = await newUser.save()
        return res.json({ errors: false,data: data })

    }catch (error) {
        return res.status(400).json({ errors:true, message: error.message })
    }
}

exports.login = async (req, res) => {
    try{
        //user already exist or not
        const userExists = await User.findOne({ email: req.body.email})
        if (!userExists) return res.status(400).json({ errors: true, message: "email or password is invalid" })

        //password compare
        const checkPassword = await bcrypt.compare(req.body.password, userExists.password)
        if (!checkPassword) return res.status(400).json({ errors: true, message: "email or password is invalid" })

        const token = await jwt.sign({_id: userExists._id},process.env.SEC)
       
        return res.json({ errors: false, data: {token:token,user:userExists} })
    }catch{
        return res.status(400).json({ errors:true,message:error.message })
    }
}