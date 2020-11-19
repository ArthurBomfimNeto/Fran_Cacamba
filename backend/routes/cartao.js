const express = require('express')
const route = express.Router()
const cartaoController = require('../controllers/cartao.controller')
route.get('/', cartaoController.get)

route.get('/:id', cartaoController.get1)

route.post('/', cartaoController.post)

route.put('/:id', cartaoController.put)

route.delete('/:id', cartaoController.delete)

module.exports = route;

