const express = require('express')
const router = express.Router()
const userController = require('../controllers/users')
const authController = require('../controllers/auth')
//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////

router.post('/', userController.create)
router.get('/:id', authController.isAuthenticated,  userController.getUserById)
//
// router.get("/:userid/recipes", userController.getAllRecipe)
// router.get("/:userid/recipes/:recipeid", userController.getOneRecipe)


module.exports = router
