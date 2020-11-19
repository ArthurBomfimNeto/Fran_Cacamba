const express = require('express')
const route = express.Router()
let mongoose = require('mongoose')

// criar o esquema do banco de dados
let Schema  = mongoose.Schema
let userSchema = new Schema({
    username: {type:String, required: true},
    password: {type:Number, required: true}
})


//criando um modelo Dados 
const USER = mongoose.model('User', userSchema) 

route.get('/', (req, res) => {
    USER.find()
        .then(resultado => {
            res.status(200).send({
                resultado
            })
        .catch(err => {
            res.status(500)
              return res.send({ error: err })
                })
        })
})

route.get('/:id', (req, res) => {
    USER.findById(req.params.id)
        .then(resultado => {
            res.status(200).send({
                resultado
            })
                .catch(err => {
                    res.status(500)
                    return res.send({ error: err })
                })
        })
})

route.post('/', (req, res) => {
    let user = {
        username: req.body.username,
        password: req.body.password
    }
    var novo = new USER(user)
    novo.save()
    .then(() => {
        res.status(500).send({user})
    })
    .catch(err => {
        res.status(500)
        return send({error:err})
    })
     
    
})

route.put('/:id', (req, res) => {
    let id = req.params.id
    USER.updateOne({ _id: id }, {
        user_name: req.body.user_name,
        password: req.body.password
    })
        .then(() => {
            res.status(202).send({
                user: {
                    user: req.body.user_name,
                    password: req.body.password
                },
                message: 'Atualizado com sucesso'
            })
        })
        .catch(err => {
            res.status(500)
            return res.send({ error: err })
        })
})

route.delete('/:id', (req, res) => {
    USER.deleteOne({ _id: req.params.id })
        .then(resultado => {
            res.status(202).send({
                message: 'Removido',
                resultado
            })
                .catch(err => {
                    res.status(500)
                    return res.send({ error: err })
                })
        })
})

module.exports = route