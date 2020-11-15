const express = require('express')
const route = express.Router()

route.get('/', (req,res) => {
    res.status(200).send({
        message: {
            teste:'Teste Get'
        }
    })
})
route.post('/', (req, res) => {
    res.status(201).send({
        nome: req.body.nome,
        cpf: req.body.cpf,
        cnh : req.body.cnh,
        dtValidadeCnh : req.body.dtValidadeCnh,
        dtNascimento: req.body.dtNascimento,
        email : req.body.email,
        rua: req.body.rua,
        bairro: req.body.bairro,
        numeroCasa: req.body.numeroCasa,
        cep: req.body.cep
    })
})

route.put('/:teste', (req, res) => {
    const teste = req.params.teste
    res.status(200).send({
        message : {
            teste: teste
        }
    })
})

route.delete('/' , (req, res) => {
    res.status(200).send({
        message : {
            teste : 'Teste Delete '
        }
    })
})
module.exports = route