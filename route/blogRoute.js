const { getBlog ,postBlog , putBlog , deleteBlog, getblogbyid } = require('../Controller/blogController');
const auth = require('../middleware/auth');

const route = require('express').Router()

route.get('/',getBlog)


route.get('/byid/:id',getblogbyid)

route.post('/',postBlog)

route.put('/:id' , putBlog)

route.delete('/:id' , deleteBlog)


module.exports = route