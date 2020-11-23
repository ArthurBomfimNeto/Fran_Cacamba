const USER = require('../models/user.model')

exports.get = async (req, res) => {
    USER.find()
        .then(resultado => {
            res.status(200).send(resultado)
        })
        .catch(err => {
            res.status(500)
            return res.send({ error: err })
        })
}

exports.get1 = async (req, res) => {
    USER.findById(req.params.id)
        .then(resultado => {
            res.status(200).send(
                resultado
            )
                .catch(err => {
                    res.status(500)
                    return res.send({ error: err })
                })
        })
}

exports.post = async (req, res) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    }
    const novo = new USER(user)
    novo.save()
        .then(() => {
            res.status(500).send(user)
        })
        .catch(err => {
            res.status(500)
            return send({ error: err })
        })
}

exports.put = async (req, res) => {
    let id = req.params.id
    USER.updateOne({ _id: id }, {
        username: req.body.username,
        password: req.body.password
    })
        .then(() => {
            res.status(202).send({
                message: 'Atualizado com sucesso',
                user: {
                    user: req.body.username,
                    password: req.body.password
                }

            })
        })
        .catch(err => {
            res.status(500)
            return res.send({ error: err })
        })
}

exports.delete = async (req, res) => {
    USER.deleteOne({ _id: req.params.id })
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