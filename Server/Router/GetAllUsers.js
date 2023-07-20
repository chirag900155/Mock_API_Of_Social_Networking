const express = require('express')
const Router = express.Router()
const AllUsers = require('../Models/Login_Register_Schema.js')

Router.get('/users', (req, res) => {
    AllUsers.find()
    .then(users => {
        res.json(users)
      })
})

module.exports = Router