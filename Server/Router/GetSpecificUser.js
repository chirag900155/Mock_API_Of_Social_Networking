const express = require('express')
const Router = express.Router()
const AccountSchema = require('../Models/Login_Register_Schema')

Router.get('/user/:id', async (req, res) => {
    const user = await AccountSchema.findOne({ _id: req.params.id })
    try{
        if (!user){
            return res.status(404).json({ message: 'User not found' })
        }
        res.json(user)
    }catch(err){
        res.status(500).json({ message: 'Internal server error' })
    }
})

module.exports = Router