const express = require('express')
const Router = express.Router()
const Post = require('../../Models/PostSchema.js')
const Comment = require('../../Models/CommentSchema.js')

Router.delete('/post/:postId/comments/:commentId', async (req, res)=>{
    const {postId, commentId} = req.params
    const post = await Post.findById(postId)

    try{
        if(!post){
            return res.status(400).json({ message: "Please enter right post object Id" })
        }

        const comment = await Comment.findByIdAndDelete(commentId)

        if(!comment){
            return res.status(400).json({ message: "Comment not find" })
        }

        return res.status(200).json({ message: "Comment deleted sucesfully" })
    }catch(err){
        console.log(err);
        return res.status(500).json({ message: "Something went wrong" })
    }
})

module.exports = Router