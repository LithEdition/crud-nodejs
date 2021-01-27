// Express
const express = require('express')
const router = express.Router()


// Tabela DB (MySQl)
const Users = require('../database/Users')


function edit(req, res) {

    let id = req.params.id

    Users.findOne({

        where: { id: id }
    }).then(user => {

        if(user != undefined) {

            res.render('edit', {

                user: user
            })
        } else {

            res.redirect('/registrations')
        }
    })
}

router.get('/edit/:id', edit)

module.exports = router