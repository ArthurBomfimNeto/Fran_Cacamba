const mongoose = require('mongoose')


//criar o esquema do banco de dados
let Schema = mongoose.Schema
let cacambaSchema = new Schema({
    codCacamba: {type:String, required: true},
    valor: {type:String, required: true},
    residuo: {type:String, required:true},
    tamanho: {type:String, required: true},
    status: {type:Boolean,required: true, default: false}
    
})// nomeou a coleção 

//criar o modelo de Dados
module.exports = mongoose.model('cacamba',cacambaSchema)