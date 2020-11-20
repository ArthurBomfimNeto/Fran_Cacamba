const express = require('express')
const route = express.Router()
const OS = require('../models/ordemServico.model')

route.get('/', (req, res) => {
    OS.find()
        .then(resultado => {
            res.status(200).send({ resultado })
        })
        .catch(err => {
            res.status(500)
            return res.send({ error: err })
        })
})

route.get('/:id', (req, res) => {
    OS.findById(req.params.id)
        .then(resultado => {
            res.status(200).send({ resultado })
        })
        .catch(err => {
            res.status(500)
            return res.send({ error: err })
        })
})

route.post('/', (req, res) => {
    const ordemServico = {
        dtLocacao: req.body.dtLocacao,
        dtRemocao: req.body.dtRemocao,
        rua: req.body.rua,
        bairro: req.body.bairro,
        cep: req.body.cep,
        tamanho: req.body.tamanho,
        residuo: req.body.residuo,
        quantidade: req.body.quantidade,
        valor: req.body.valor
    }
    const novo = new OS(ordemServico)
    novo.save()
        .then(() => {
            res.status(201).send({ ordemServico })
        })
        .catch(err => {
            res.status(500)
            return res.send({ error: err })
        })
})

route.put('/:id', (req, res) => {
    OS.updateOne({ _id: req.params.id }, {
        dtLocacao: req.body.dtLocacao,
        dtRemocao: req.body.dtRemocao,
        rua: req.body.rua,
        bairro: req.body.bairro,
        cep: req.body.cep,
        tamanho: req.body.tamanho,
        residuo: req.body.residuo,
        quantidade: req.body.quantidade,
        valor: req.body.valor
    })
        .then(() => {
            res.status(202).send({
                message: 'Atualizado com sucesso',
                ordemServico: {
                    dtLocacao: req.body.dtLocacao,
                    dtRemocao: req.body.dtRemocao,
                    rua: req.body.rua,
                    bairro: req.body.bairro,
                    cep: req.body.cep,
                    tamanho: req.body.tamanho,
                    residuo: req.body.residuo,
                    quantidade: req.body.quantidade,
                    valor: req.body.valor
                }
            })
        })
        .catch(err => {
            res.status(500)
            return res.send({ error: err })
        })
})

route.delete('/:id', (req, res) => {
    OS.deleteOne({ _id: req.params.id })
        .then(resultado => {
            res.status(202).send({
                message: 'Removido com sucesso',
                resultado
            })
        })
        .catch(err => {
            res.status(500)
            return res.send({ error: err })
        })
})
module.exports = route