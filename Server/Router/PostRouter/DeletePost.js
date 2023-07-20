const express = require('express')
const postManagment = require('../../Models/PostSchema.js')
const Router = express.Router()

Router.delete('/posts/:id', async (req, res)=>{
    try{
        const postDetails = await postManagment.findByIdAndDelete(req.params.id)

        if(!postDetails){
            return res.status(400).json({ message: "Post not found" })
        }

        return res.status(200).json({ message: "post Deleted Succesfully" })

    }catch(err){
        console.log(err);
        return res.status(500).json({ message: "Something went wrong" })
    }
})

module.exports = Router;