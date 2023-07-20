const express = require('express')
const Router = express.Router()
const Post = require('../../Models/PostSchema.js')
const Comment = require('../../Models/CommentSchema.js')

Router.put('/posts/:postId/comments/:commentId', async (req, res) =>{
    const {postId, commentId} = req.params
    const {text} = req.body

    const post = await Post.findById(postId)
    const comment = await Comment.findById(commentId)

    try{
        if(!post){
            return res.status(400).json({ message: "Please enter valid Post Id" })
        }

        if(!comment){
            return res.status(400).json({ message: "Please enter text" })
        }

        comment.text = text || comment.text

        await comment.save()

        return res.status(200).json({ message: "Comment updated sucesuflly" })
    }catch(err){
        console.log(err);
        return res.status(500).json({ message: "Something went wrong" })
    }
})

module.exports = Router