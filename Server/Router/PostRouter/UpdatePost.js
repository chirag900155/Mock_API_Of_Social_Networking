const express = require('express')
const Router = express.Router()
const postManagment = require('../../Models/PostSchema.js')

Router.put('/posts/:id', async (req, res)=>{
    const {text} = req.body
    const {id} = req.params

    try{
        const postUpdate = await postManagment.findById(id)

        if(!postUpdate){
            return res.status(400).json({ message: "Please enter the right object ID" })
        }

        postUpdate.text = text || postUpdate.text

        await postUpdate.save()

        return res.status(200).json({ message: "The post is Updated sucesfully" })

    }catch(err){
        console.log(err);
        return res.status(500).json({ message: "Something went wrong" })
    }
})

module.exports = Router