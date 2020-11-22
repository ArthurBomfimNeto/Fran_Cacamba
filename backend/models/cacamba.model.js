const mongoose = require('mongoose')


//criar o esquema do banco de dados
let Schema = mongoose.Schema
let cacambaSchema = new Schema({
    codCacamba: {type:Number, required: true},
    valor: {type:Number, required: true},
    residuo: {type:String, required:true},
    tamanho: {type:Number, required: true},
    status: {type:Boolean,required: true, default: false},
    user : {type: Schema.Types.ObjectId, ref:'user'}
})// nomeou a coleção 

//criar o modelo de Dados
module.exports = mongoose.model('cacamba',cacambaSchema)