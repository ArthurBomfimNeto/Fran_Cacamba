const express = require('express');
const server = express()
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors')

const rotaProdutos = require('./routes/cacamba');

// Ele fica escutando o serviço e quando eu passo uma rota ele vai entra monitora toda a execução e retorna um log 
server.use(morgan('dev')) 
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json())// só vai aceitar formato json no body

server.use(cors())
server.use('/cacamba', rotaProdutos);

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



