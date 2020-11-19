const express = require('express')
const router = express.Router();

const cacambaController = require('../controllers/cacamba.controller')

router.get('/',cacambaController.get)
router.get('/:id',cacambaController.get1)
router.post('/',cacambaController.post);
router.put('/:id',cacambaController.put)
router.delete('/:id',cacambaController.delete)

module.exports = router