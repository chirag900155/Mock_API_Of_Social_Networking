const express = require('express')
const Router = express.Router()
const Account = require('../Models/Login_Register_Schema.js')

Router.delete('/user/:id', async (req, res)=>{

    try{
        const deleteUser = await Account.findByIdAndDelete(req.params.id)

        if(!deleteUser){
            return res.status(404).json({
                message: 'User Not Found'
            })
        }

        return res.status(200).json({
            message: 'User Deleted'
        })
    }catch(err){
    console.log(err)
}
})

module.exports = Router