const CLIENTE = require('../models/cliente.model')

exports.get = async (req, res, next) => {
    CLIENTE.find()
        .populate('user')
        .exec()
        .then(resultado => {
            res.status(200).send({ resultado })
        })
        .catch(err => {
            res.status(500)
            return res.send({ error: err })
        })
}

exports.get1 = async (req, res) => {
    CLIENTE.findById(req.params.id)
        .then(resultado => {
            res.status(200).send({ resultado })
        })
        .catch(err => {
            res.status(500)
            return res.send({ error: err })
        })
}

exports.post = async (req, res) => {
    const cliente = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        dtNascimento: req.body.dtNascimento,
        email: req.body.email,
        rua: req.body.rua,
        bairro: req.body.bairro,
        numeroCasa: req.body.numeroCasa,
        cep: req.body.cep,
        user: req.body.user
    }
    const novo = new CLIENTE(cliente)
    novo.save()
        .then(() => {
            res.status(201).send({ cliente })
        })
        .catch(err => {
            res.status(500)
            return req.send({ error: err })
        })
}

exports.put = async (req, res) => {
    CLIENTE.updateOne({ _id: req.params.id }, {
        nome: req.body.nome,
        cpf: req.body.cpf,
        dtNascimento: req.body.dtNascimento,
        email: req.body.email,
        rua: req.body.rua,
        bairro: req.body.bairro,
        numeroCasa: req.body.numeroCasa,
        cep: req.body.cep
    })
        .then(() => {
            res.status(202).send({
                message: 'Atualizado com sucesso',
                cliente: {
                    nome: req.body.nome,
                    cpf: req.body.cpf,
                    dtNascimento: req.body.dtNascimento,
                    email: req.body.email,
                    rua: req.body.rua,
                    bairro: req.body.bairro,
                    numeroCasa: req.body.numeroCasa,
                    cep: req.body.cep
                }
            })
        })
        .catch(err => {
            res.status(500)
            return res.send({ error: err })
        })
}

exports.delete = async (req, res) => {
    CLIENTE.deleteOne( {_id: req.params.id})
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
