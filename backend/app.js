const express = require('express');
const server = express()
const morgan = require('morgan');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const cors = require('cors')

const rotaCacamba = require('./routes/cacamba');
const rotaCliente = require('./routes/cliente')
const rotaMotorista = require('./routes/motorista')
const rotaOrdemServico = require('./routes/ordemServico')
const rotaCartao = require('./routes/cartao')
const rotaUser = require('./routes/user')

// Ele fica escutando o serviço e quando eu passo uma rota ele vai entra monitora toda a execução e retorna um log 
server.use(morgan('dev')) 
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json())// só vai aceitar formato json no body
//Criando um documento no banco mongo chamado francaCacamba e conectando nesse banco 
mongoose.connect('mongodb://localhost/francaCacamba', { // cria um banco de dados imc
useNewUrlParser: true, 
useUnifiedTopology: true 
})


server.use(cors())
server.use('/cacamba', rotaCacamba);
server.use('/cliente', rotaCliente);
server.use('/motorista', rotaMotorista);
server.use('/ordemServico', rotaOrdemServico)
server.use('/cartao' , rotaCartao)
server.use('/user', rotaUser)


//uma vez que ele passa por todas as rotas e não for chamadas elas ele entra aqui 
server.use((req, res, next) => {
    const erro = new Error('Não encontrado')
    erro.status = 404;
    next(erro)
});

server.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            message: error.message
        }
    })
})
  
module.exports = server;



