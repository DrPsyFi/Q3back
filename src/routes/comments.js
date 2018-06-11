const express = require('express')
const router = express.Router()
const commentsController = require('../controllers/comments')
const authController = require('../controllers/auth')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////
router.get("/:lyricsId", commentsController.getCommentsByLyricsId)

module.exports = router
