const Sequelize = require('sequelize')
const connection = require('./database')

let Users = connection.define('users', {

    name: {

        type: Sequelize.STRING,
        allowNull: false
    },
    email: {

        type: Sequelize.STRING,
        allowNull: false
    },
    admin: {

        type: Sequelize.STRING,
        allowNull: false
    }
})

Users.sync({ force: false })

module.exports = Users