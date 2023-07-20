const express = require('express')
const Router = express.Router()
const User = require('../../Models/Login_Register_Schema.js')
const MakingFriends = require('../../Models/FriendsSchema.js')

Router.delete('/users/:userId/friends/:friendId', async (req,res) =>{
    const {userId, friendId} = req.params
    const UserVerify = await User.findById(userId)
    const Friend = await User.findById(friendId)

    try{
        if(!UserVerify && !Friend){
            return res.status(400).json({ message: "Please enter the correct userId or friendId" })
        }

        const friendDelete = await MakingFriends.findOneAndDelete({ user: userId, friend: friendId })

        return res.status(200).json({ message: "Friend Deleted Sucessfully" })
    }catch(err){
        console.log(err);
        return res.status(500).json({ message: "Something went wrong" })
    }
})

module.exports = Router