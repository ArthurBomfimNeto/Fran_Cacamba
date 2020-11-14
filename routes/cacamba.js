const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        messagem: 'Usando o get dentro da rota de produtos'
    })
})

router.post('/', (req, res, next) => {
    const cacamba = {
        valor: req.body.valor,
        residuo: req.body.residuo,
        tamanho: req.body.tamanho
    }
    res.status(201).json({
       cacamba
    })
});

router.put('/', (req, res, next) => {
    res.status(200).json({
        messagem:'alterado com sucesso ',
        
    })
})

router.delete('/', (req, res, next) => {
    res.status(201).json({
        message: 'deletado com sucesso '
    })
})

module.exports = router