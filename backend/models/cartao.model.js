const mongoose = require('mongoose')

const Schema =  mongoose.Schema
const cartaoSchema = new Schema({
    nome: {type:String, required: true},
    numeroCartao: {type: String, required: true},
    cvv: {type: String, required: true},
    mes: {type:String, required: true},
    ano: {type: String, required: true}
})

module.exports = mongoose.model('cartao', cartaoSchema)