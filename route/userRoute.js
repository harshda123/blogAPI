const {getuser, postUser, login} = require("../Controller/userController")
const auth = require('../middleware/auth')

const route = require("express").Router()

route.get('/',getuser)

route.post('/',auth,postUser)

route.post('/',login)

module.exports = route