const CARTAO = require('../models/cartao.model')

exports.get = async (req, res) => {
    CARTAO.find()
        .then(resultado => {
            res.status(200).send(resultado)
        })
        .catch(err => {
            res.status(500)
            return res.send({ error: err })
        })
}

exports.get1 = async (req, res) => {
    CARTAO.findById(req.params.id)
        .then(resultado => {
            res.status(200).send(resultado)
        })
        .catch(err => {
            res.status(500)
            return res.send({ error: err })
        })
}

exports.post = async (req, res) => {
    const cartao = {
        nome: req.body.nome,
        numeroCartao: req.body.numeroCartao,
        cvv: req.body.cvv,
        mes: req.body.mes,
        ano: req.body.ano
    }
    const novo = new CARTAO(cartao)
    novo.save()
        .then(() => {
            res.status(201).send(cartao)
        })
        .catch(err => {
            res.status(500)
            return res.send({ error: err })
        })
}

exports.put = async (req, res) => {
    const id = req.params.id
    CARTAO.updateOne({ _id: id }, {
        nome: req.body.nome,
        numeroCartao: req.body.numeroCartao,
        cvv: req.body.cvv,
        mes: req.body.mes,
        ano: req.body.ano
    })
        .then(() => {
            res.status(202).send({
                message: 'Atualizado com sucesso',
                cartao: {
                    nome: req.body.nome,
                    numeroCartao: req.body.numeroCartao,
                    cvv: req.body.cvv,
                    mes: req.body.mes,
                    ano: req.body.ano
                }
            })
        })
        .catch(err => {
            res.status(500)
            return res.send({ error: err })
        })
}

exports.delete = async (req, res) => {
    CARTAO.deleteOne({ _id: req.params.id })
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
}