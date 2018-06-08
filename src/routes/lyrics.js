const express = require('express')
const router = express.Router()
const lyricsController = require('../controllers/lyrics')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////
router.get("/:userId/lyrics", lyricsController.getUsersLyrics)
// router.get("/:userid/recipes/:recipeid", userController.getOneRecipe)
// router.get("/:userid/recipes/:recipeid/notes", userController.getNotes)


module.exports = router
