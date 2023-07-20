const express = require('express')
const Router = express.Router()
const User = require('../../Models/Login_Register_Schema.js')
const MakingFriends = require('../../Models/FriendsSchema.js')

Router.get('/users/:userId/friends', async (req, res)=>{
    const {userId} = req.params
    const user = await User.findById(userId)
    try{
        if(!user){
            return res.status(400).json({ message: "Enter correct ID" })
        }

        const reterivingFriends = await MakingFriends.find({ user: userId })

        return res.status(200).json({ message: reterivingFriends })

    }catch(err){
        console.log(err);
        return res.status(500).json({ message: "Something went wrong" })
    }
})

module.exports = Router