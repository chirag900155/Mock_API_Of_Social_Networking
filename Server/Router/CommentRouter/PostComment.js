const express = require('express')
const Router = express.Router()
const Post = require('../../Models/PostSchema.js')
const Comment = require('../../Models/CommentSchema.js')

Router.post('/posts/:postId/comments', async (req, res)=>{
    const {postId} = req.params
    const {text} = req.body

    try{
        const post = await Post.findById(postId)

        if(!post){
            return res.status(400).json({ message: "object Id is wrong" })
        }

        const comment = new Comment({ post: postId, text })
        await comment.save()

        return res.status(200).json({ message: `Comment added sucesfully ${comment}` })

    }catch(err){
        console.log(err);
        return res.status(500).json({ message: "Something went wrong" })
    }
})

module.exports = Router