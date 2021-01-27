// Express
const express = require('express')
const router = express.Router()

function pageHome(req, res) {

    res.render('index')
}

router.get('/', pageHome)

module.exports = router