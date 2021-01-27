// Express
const express = require('express')
const router = express.Router()


// Tabela DB (MySQl)
const Users = require('../database/Users')


function registrations(req, res) {

    Users.findAll({

        raw: true
    }).then(users => {

        res.render('registrations', {

            users: users
        })
    })
}

router.get('/registrations', registrations)

module.exports =  router