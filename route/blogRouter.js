const express = require('express')

const controller = require('../controller/blogController')


const blogRouter = express.Router()

blogRouter.post('/post',controller.postBlog)
blogRouter.get('/getpost/:_id',controller.getBlog)


module.exports = {
    blogRouter
}