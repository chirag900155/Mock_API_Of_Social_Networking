const express = require('express')
const Router = express.Router()
const postManagment = require('../../Models/PostSchema.js')

Router.get('/posts/:id', async (req, res) =>{
    const {id} = req.params.id

    try{
        const postDetails = await postManagment.findOne(id)

        if(!postDetails){
            return res.status(400).json({ message: "Please enter correct object Id" })
        }

        return res.status(200).json(postDetails)
    }catch(err){
        console.log(err);
        return res.status(500).json({ message: "Something went wrong" })
    }
})

module.exports = Router