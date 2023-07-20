const express = require('express')
const Router = express.Router()
const postManagment = require('../../Models/PostSchema.js')

Router.get('/posts', (req, res)=>{
    postManagment.find()
    .then(users =>{
        res.json(users)
    })
})

module.exports = Router