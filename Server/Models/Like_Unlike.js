const mongoose = require('mongoose')

const LikeUnlikeSchema = mongoose.Schema({
    targetType:{
        type: String,
        enum: ['Post', 'Comment'],
        required: true
    },

    targetId:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    isLiked:{
        type: Boolean,
        required: true
    }
})

const likeSchema = mongoose.model('LikeUnlike', LikeUnlikeSchema)

module.exports = likeSchema