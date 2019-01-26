const express = require('express')

const feedController = require('../controllers/feed')

const router = express.Router()

// ***** BEGIN: api routes *****

// GET /feed/posts
router.get('/posts', feedController.getPosts)

// POST /feed/post
router.post('/post', feedController.createPost)

// ***** END: api routes *****

module.exports = router
