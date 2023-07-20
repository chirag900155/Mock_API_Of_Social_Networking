const mongoose = require('mongoose')

const commentOnThePost = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
    },

    text:{
        type: String,
        required: true
    },

    createdAt:{
        type: Date,
        default: Date.now
    }
})

const comment = mongoose.model('Comment', commentOnThePost)

module.exports = comment