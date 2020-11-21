const express = require('express')
const route = express.Router()
const OsController = require('../controllers/ordemServico.controller')


route.get('/', OsController.get)
route.get('/:id', OsController.get1)
route.post('/', OsController.post)
route.put('/:id', OsController.put)
route.delete('/:id', OsController.delete)
module.exports = route