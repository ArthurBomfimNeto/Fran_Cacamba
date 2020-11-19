const express = require('express')
const route = express.Router()
const motoristaController = require('../controllers/motorista.controller')

route.get('/', motoristaController.get)
route.get('/:id', motoristaController.get1)
route.post('/', motoristaController.post)
route.put('/:id', motoristaController.put)
route.delete('/:id', motoristaController.delete)

module.exports = route