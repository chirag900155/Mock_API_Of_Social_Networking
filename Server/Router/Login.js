const express = require('express')
const Router = express.Router()
const LoginSchema = require('../Models/Login_Register_Schema.js')

Router.post('/login', async (req, res)=>{
    const {username, password} = req.body

    try{

        if(!username ||!password){
                return res.status(400).json({message: 'Please enter username and password'})
        }

        const user = await LoginSchema.findOne({username})

        if(!user){
            return res.status(400).json({message: 'Invalid username or password'})
        }

        if(user.password!== password){
                return res.status(400).json({message: 'Invalid username or password'})
        }

        return res.status(200).json({message: 'Login Succesfully'})

    }catch(err){
        console.log(err)
        return res.status(500).json({message: 'Internal Server Error'})
    }
})

module.exports = Router