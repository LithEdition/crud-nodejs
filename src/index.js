// Requisitando o express
const express = require('express')
const server = express()


// Adicionando o ejs como view engine do projeto
server.set('view engine', 'ejs')


// Definindo a pasta public como estática
server.use(express.static('public'))


// Requisitando e configurando o body-parser
const bodyParser = require('body-parser')
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())


// Banco de dados
//---------------//
// Conexão
const connection = require('./database/database')
    .authenticate()
    .then(() => console.log('Conexão com o bd feita com sucesso!'))
    .catch((error) => console.log(error))



// Rotas do servidor
const pageHome = require('./routes/pageHome')
const registrations = require('./routes/registrations')
const singUp = require('./routes/singUp')
const edit = require('./routes/edit')
const editSave = require('./routes/editSave')
const deleteUser = require('./routes/delete')

server
    .use('/', pageHome)
    .use('/', singUp)
    .use('/', registrations)
    .use('/', edit)
    .use('/', editSave)
    .use('/', deleteUser)
    .listen(8080)