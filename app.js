const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')

const userRoute = require("./route/userRoute")
const blogRoute = require("./route/blogRoute")
//initialization
const app = express()

//middleware
app.use(express.json())

//default route
app.get('/',(req,res) => {
    res.send("home")
})

app.use("/api/user",userRoute)
app.use("/api/blog",blogRoute)

//connection
app.listen(process.env.PORT)

async function main() {
    const res = await mongoose.connect(process.env.DB,{useNewUrlParser: true,
    useUnifiedTopology: true})
    const data = await res.default
    console.log(data.STATES['1']);
}
main()