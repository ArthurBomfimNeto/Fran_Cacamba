const mongoose = require('mongoose')

const Schema = mongoose.Schema
const ordemServico = new Schema({
    dtLocacao : {type:String, required:true},
    dtRemocao : {type:String, required:true},
    rua : {type:String, required:true},
    bairro : {type:String, required:true},
    cep : {type:String, required:true},
    tamanho :{type:String, required:true},
    residuo : {type:String, required:true},
    quantidade : {type:String, required:true},
    valor : {type:String, required:true},
    cacamba: {type: Schema.Types.ObjectId, ref :'cacamba'}
})

module.exports = mongoose.model('ordemServico', ordemServico)