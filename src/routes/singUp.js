// Express
const express = require('express')
const router = express.Router()


// Tabela DB (MySQl)
const Users = require('../database/Users')


function singUp(req, res) {

    let name = req.body.name
    let email = req.body.email
    let admin = req.body.admin
    let checkAdmin = ''

    if(name === '') return res.redirect('/')
    if(email === '') return res.redirect('/')

    if (admin === 'on') {

        checkAdmin = 'Sim'
    } else {

        checkAdmin = 'Não'
    }

    Users.create({

        name: name,
        email: email,
        admin: checkAdmin
    })

    res.redirect('/')
}

router.post('/signUp', singUp)

module.exports = router