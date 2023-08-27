const express = require('express')
const UsersController = require('../controller/users')
const router = express.Router()

router.get('/',UsersController.getUsers)

router.get('/:id', UsersController.getUserById)

router.post('/',UsersController.createUser)

router.put('/:id',UsersController.editUserById)

router.delete('/:id',UsersController.deleteUserById)

module.exports = router
