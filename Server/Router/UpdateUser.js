const express = require('express')
const Router = express.Router()
const Account = require('../Models/Login_Register_Schema.js')

Router.put('/user/:id', async (req, res) =>{
    const {username, password} = req.body;
    const {id} = req.params

    try{
        const user = await Account.findById(id)

        if(!user){
            return res.status(404).json({message: 'User not found'})
        }

        user.username = username || user.username;
        user.password = password || user.password;

        await user.save()

        return res.status(200).json({message: 'User updated'})

    }catch(err){
        console.log(err)
    }
})

module.exports = Router;