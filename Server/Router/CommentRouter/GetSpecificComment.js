const express = require('express')
const Router = express.Router()
const Post = require('../../Models/PostSchema.js')
const Comment = require('../../Models/CommentSchema.js')

Router.get('/posts/:postId/comments/:commentId', async (req, res)=>{
    const {postId, commentId} = req.params
    const post = await Post.findById(postId)

    try{
        if(!post){
            return res.status(400).json({ message: "Enter correct post object id" })
        }

        const comment = await Comment.findById(commentId)

        if(!comment){
            return res.status(400).json({ message: "Comment not found" })
        }

        return res.status(200).json(comment)
    }catch(err){
        console.log(err);
        return res.status(500).json({ message: "Something went wrong" })
    }
})

module.exports = Router