const mongoose = require('mongoose')

const frinendsSchema =  mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    friend:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

const Frineds = mongoose.model('Friends', frinendsSchema)

module.exports = Frineds