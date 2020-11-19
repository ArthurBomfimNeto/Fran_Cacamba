const CACAMBA = require('../models/cacamba.model')

exports.get = async (req, res, next) => {
    CACAMBA.find()
    .then(cacambas => {
        res.status(200).json({cacambas})
    })
    .catch(err => {
        res.status(500).send({error:err})
    })
}

exports.get1 = async (req, res, next) => {
    let id = req.params.id
    CACAMBA.findById(id)
    .then(cacamba => {
        res.status(200).json({cacamba})
    })
    .catch(err => {
        res.status(500).send({error:err})
    })
    
}

exports.post = async  (req, res, next) => {

    const cacamba = {
        valor: req.body.valor,
        residuo: req.body.residuo,
        tamanho: req.body.tamanho
    }
    //inserção no Banco CACAMBA os dados da cacamba
    var novo = new CACAMBA(cacamba)
    novo.save()
    .then(() => {// salva no banco de dados 
    //envia resultado para ususario 
    res.status(201).json({cacamba});
   })
   .catch(err => {
       res.status(500).send({error:err})
   })
}

exports.put = async (req, res, next) => {
    CACAMBA.updateOne({_id: req.params.id},{
        valor: req.body.valor,
        residuo: req.body.residuo,
        tamanho: req.body.tamanho
    })
    .then(resultado => {
        res.status(202).send({
            message: 'Atualizado com sucesso',
            cacamca : {
                valor: req.body.valor,
                residuo: req.body.residuo,
                tamanho: req.body.tamanho
            }
        })
    })
    .catch(err => {
        res.status(401).send({
            error : err
        })
    }) 
}

exports.delete = async (req, res, next) => {
    CACAMBA.deleteOne({_id: req.params.id})
    .then(resultado => {
        const results = {
            message: 'Removido com sucesso',
            resultado
        }
        res.status(202).send(results)
    })

    .catch(err => {
        res.status(500)
        return req.send({error: err})
    })
    
}