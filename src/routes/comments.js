const express = require('express')
const router = express.Router()
const commentsController = require('../controllers/comments')
const authController = require('../controllers/auth')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////
router.get("/:lyricsId",authController.isAuthenticated, commentsController.getCommentsByLyricsId)
router.post
module.exports = router
