const express = require('express')
const route = express.Router()
const clienteController = require('../controllers/cliente.controller')

route.get('/', clienteController.get)
route.get('/:id', clienteController.get1)
route.post('/', clienteController.post)
route.put('/:id', clienteController.put)
route.delete('/:id', clienteController.delete)

module.exports = route;

