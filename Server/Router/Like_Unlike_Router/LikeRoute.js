const express = require('express')
const Router = express.Router()
const Post = require('../../Models/PostSchema.js')
const Like = require('../../Models/Like_Unlike.js')

Router.post('/posts/:postId/like', async (req, res) => {
    try {
      const { postId } = req.params;
      const post = await Post.findById(postId);
  
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      // Check if the user already liked the post
      const existingLike = await Like.findOne({ targetType: 'Post', targetId: postId });
  
      if (existingLike && existingLike.isLiked) {
        return res.status(400).json({ message: 'You already liked this post' });
      }
  
      const like = new Like({ targetType: 'Post', targetId: postId, isLiked: true });
      await like.save();
  
      return res.status(201).json({ message: 'Post liked successfully', like });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  });

module.exports = Router