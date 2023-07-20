const express = require('express')
const Router = express.Router()
const PostManagment = require('../../Models/PostSchema.js')

Router.post('/post', async (req, res) =>{
    const {objectid, text} = req.body

    try{
        if(!objectid || !text){
            return res.status(400).json({message: "Please enter the objectid and text both"})
        }

        const post = new PostManagment({user: objectid, text})
        await post.save()

        return res.status(200).json({message: `post created succesfully : ${post}`})
    }catch(err){
        console.log(err)
        return res.status(500).json({message: "Something went wrong"})
    }
})

module.exports = Router