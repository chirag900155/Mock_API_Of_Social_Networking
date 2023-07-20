const express = require('express')
const Router = express.Router()
const User = require('../../Models/Login_Register_Schema.js')
const MakingFriends = require('../../Models/FriendsSchema.js')

Router.post('/users/:userId/friends/:friendId', async (req, res) =>{
    const {userId, friendId} = req.params
    const user = await User.findById(userId)
    const friend = await User.findById(friendId)

    try{
        if(!user && !friend){
            return res.status(400).json({ message: "Please enter the correct userId or friendId" })
        }

        const friends = new MakingFriends({ user: userId, friend: friendId })
        await friends.save()

        return res.status(200).json({ message: "Friend added sucesfully" })

    }catch(err){
        console.log(err);
        return res.status(500).json({ message: "Something went wrong" })
    }
})

module.exports = Router