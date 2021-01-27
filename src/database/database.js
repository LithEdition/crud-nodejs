const Sequelize = require('sequelize')
const connection = new Sequelize('crud-nodejs', 'root', '123456', {

    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection