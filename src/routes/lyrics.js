const express = require('express')
const router = express.Router()
const lyricsController = require('../controllers/lyrics')
const authController = require('../controllers/auth')
//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////
//router.get("/:userId", lyricsController.getLyricsByUserId)
// router.get("/:userid/recipes/:recipeid", userController.getOneRecipe)
// router.get("/:userid/recipes/:recipeid/notes", userController.getNotes)


module.exports = router
