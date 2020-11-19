const mongoose = require('mongoose')


const Schema = mongoose.Schema
const clienteSchema = new Schema({
    nome: {type:String, required: true},
    cpf: {type: String, required: true},
    dtNascimento: {type: String, required: true},
    email: {type: String, required: true},
    rua: {type: String, required: true},
    bairro: {type:String, required:true} ,
    numeroCasa: {type:String, required:true} ,
    cep: {type:String, required:true}
})

module.exports = mongoose.model('cliente', clienteSchema)