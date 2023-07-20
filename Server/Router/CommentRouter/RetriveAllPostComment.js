const express = require('express')
const Router = express.Router()
const Post = require('../../Models/PostSchema.js')
const Comment = require('../../Models/CommentSchema.js')

Router.get('/posts/:postId/comments', async (req, res)=>{
    const {postId} = req.params
    const post = await Post.findById(postId)
    try{
        if(!post){
            return res.status(400).json({ message: "Post Not Found" })
        }

        const comments = await Comment.find({ post: postId })
        
        return res.status(200).json(comments)
    }catch(err){
        res.status(500).json({ message: `Something went wrong` })
        console.log(err);
    }
})

module.exports = Router