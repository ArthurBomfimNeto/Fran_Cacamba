const express = require('express')
const route = express.Router()

route.get('/', (req, res, next) => {
    res.status(200).send({
        message: {
            teste: 'deu certo'
        }
    })
})
route.post('/', (req, res, next) => {
    const cliente = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        dtNascimento: req.body.dtNascimento,
        email: req.body.email,
        rua: req.body.rua,
        bairro: req.body.bairro,
        numeroCasa: req.body.numeroCasa,
        cep: req.body.cep
    }
    res.status(201).send({
        cliente
    })
})

route.put('/:teste', (req,res) => {
    const teste = req.params.teste
    res.status(200).send({
        message:{
            teste: teste
        }
    })
})

route.delete('/',(req, res) => {
    res.status(200).send({
        message : {
            teste : 'Removido'
        }
    })
})

module.exports = route;

