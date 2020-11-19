const express = require('express')
const route = express.Router()
const userController = require('../controllers/user.controller')

route.get('/', userController.get)

route.get('/:id', userController.get1)

route.post('/', userController.post)

route.put('/:id', userController.put)

route.delete('/:id', userController.delete)

module.exports = route