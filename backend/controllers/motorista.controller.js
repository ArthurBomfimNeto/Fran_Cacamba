const MOTORISTA = require('../models/motorista.model')

exports.get = async (req, res) => {
    MOTORISTA.find()
        .then(resultado => {
            res.status(200).send({ resultado })
        })
        .catch(err => {
            res.status(500)
            return res.send({ error: err })
        })
}

exports.get1 = async (req, res) => {
    MOTORISTA.findById(req.params.id)
        .then(resultado => {
            res.status(200).send({ resultado })
        })
        .catch(err => {
            res.status(500)
            return res.send({ error: err })
        })
}

exports.post = async (req, res) => {
    const motorista = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        cnh: req.body.cnh,
        dtValidadeCnh: req.body.dtValidadeCnh,
        dtNascimento: req.body.dtNascimento,
        email: req.body.email,
        rua: req.body.rua,
        bairro: req.body.bairro,
        numeroCasa: req.body.numeroCasa,
        cep: req.body.cep
    }
    const novo = new MOTORISTA(motorista)
    novo.save()
        .then(() => {
            res.status(201).send({ motorista })
        })
        .catch(err => {
            res.status(500)
            return res.send({ error: err })
        })
}

exports.put = async (req, res) => {
    MOTORISTA.updateOne({ _id: req.params.id }, {
        nome: req.body.nome,
        cpf: req.body.cpf,
        cnh: req.body.cnh,
        dtValidadeCnh: req.body.dtValidadeCnh,
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
                motorista: {
                    nome: req.body.nome,
                    cpf: req.body.cpf,
                    cnh: req.body.cnh,
                    dtValidadeCnh: req.body.dtValidadeCnh,
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

exports.delete = async  (req, res) => {
    MOTORISTA.deleteOne({ _id: req.params.id })
        .then(resultado => {
            res.status(202).send({
                message: 'Atualizado com sucesso',
                resultado
            })
        })
        .catch(err => {
            res.status(500)
            return req.send({ error: err })
        })
}
