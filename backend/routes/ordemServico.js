const express = require('express')
const route = express.Router()

route.get('/', (req, res) => [
    res.status(200).send({
        message: {
            teste: 'Teste Get'
        }
    })
])

route.post('/', (req, res) => {
    const ordemServico = {
        dtLocacao : req.body.dtLocacao,
        dtRemocao : req.body.dtRemocao,
        rua : req.body.rua,
        bairro : req.body.bairro,
        cep : req.body.cep,
        tamanho : req.body.tamanho,
        residuo : req.body.residuo,
        quantidade : req.body.quantidade,
        valor : req.body.valor
    }

    res.status(201).send({
        ordemServico
    })
})

route.put('/:teste', (req, res) => {
    const teste = req.params.teste
    res.status(200).send({
        message : {
            teste : `Teste ${teste}`
        }
    })
})

route.delete('/', (req, res) => {
    res.status(200).send({
        message : {
            teste: 'Teste delete '
        }
    })
})
module.exports = route