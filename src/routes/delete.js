// Express
const express = require('express')
const router = express.Router()


// Tabela DB (MySQl)
const Users = require('../database/Users')


function deleteUser(req, res) {

    let id = req.body.id

    Users.destroy({

        where: { id: id}
    }).then(() => res.redirect('/registrations'))
}

router.post('/delete', deleteUser)

module.exports = router