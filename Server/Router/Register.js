const express = require('express')
const Router = express.Router()
const Account = require('../Models/Login_Register_Schema.js')

Router.post('/register', async (req, res)=>{
    
    const user = req.body;
    if(!user){
        return res.status(400).json({message: "Please enter all fields"})
    }
    try{
        const account = await Account.create(user)
        await account.save();
        return res.status(201).json({message: "Account Created Sccesuflly Created"})
    }catch(err){
        console.log(err)
    }
})

module.exports = Router