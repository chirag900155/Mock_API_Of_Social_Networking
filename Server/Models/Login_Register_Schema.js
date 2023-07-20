const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Account',accountSchema)