// Express
const express = require('express')
const router = express.Router()


// Tabela DB (MySQl)
const Users = require('../database/Users')


function saveEdit(req, res) {

    let name = req.body.name
    let email = req.body.email
    let admin = req.body.admin
    let id = req.body.id
    let checkAdminEdit = ''


    if(name === '') return res.redirect(`/edit/${id}`)
    if(email === '') return res.redirect(`/edit/${id}`)

    if(admin === 'on') {

        checkAdminEdit = 'Sim'
    } else {

        checkAdminEdit = 'Não'
    }

    Users.update({ name: name, email: email, admin: checkAdminEdit }, {

        where: { id: id }
    }).then(() => res.redirect('/registrations'))
}

router.post('/saveEdit', saveEdit)

module.exports = router