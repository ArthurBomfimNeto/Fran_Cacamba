const express = require('express')
const route = express.Router()


route.get('/', (req, res) => {
    
    res.status(200).send({
        nome : req.body.nome,
        numeroCartao : req.body.numeroCartao,
        cvv : req.body.cvv,
        mes : req.body.mes,
        ano : req.body.ano
        
    })   
})

route.get('/:id', (req, res) => {
    const id = req.params.id
    res.status(200).send({
        id
    })
})

route.post('/', (req, res) => {
   const cartao = {
        nome : req.body.nome,
        numeroCartao : req.body.numeroCartao,
        cvv : req.body.cvv,
        mes : req.body.mes,
        ano : req.body.ano
    }
    res.status(201).send({
        cartao
    })
})

route.put('/:teste', (req, res) => {
    const teste = req.params.teste
    res.status(200).send({
        message : {
            teste : `Testando ${teste}`
        }
    })
})

route.delete('/', (req,res) => {
    res.status(200).send({
        message: {
            teste : 'Teste DELETE'
        }
    })
})

module.exports = route;

