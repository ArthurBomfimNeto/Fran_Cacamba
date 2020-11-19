const mongoose = require('mongoose')

// criar o esquema do banco de dados
const Schema  = mongoose.Schema
const userSchema = new Schema({
    username: {type:String, required: true},
    password: {type:Number, required: true}
})

module.exports = mongoose.model('user', userSchema)
