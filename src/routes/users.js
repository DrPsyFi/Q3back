const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')
const authController = require('../controllers/auth')
//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

router.post('/', usersController.create)
router.get('/:id', authController.isAuthenticated,  usersController.getUserById)
router.get('/:id/lyrics', authController.isAuthenticated, usersController.getLyricsByUserId)
router.post('/:id/lyrics', authController.isAuthenticated, usersController.addNewLyricById)
router.get('/:id/search/:artistName/:songName', authController.isAuthenticated, usersController.search)
// router.get("id/lyrics/lyricsId/comments",authController.isAuthenticated, commentsController.getCommentsByLyricsId)
// router.post("id/lyrics/lyricsId/comments",authController.isAuthenticated, commentsController.getCommentsByLyricsId)




module.exports = router
