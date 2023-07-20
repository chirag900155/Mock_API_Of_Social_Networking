const mongoose = require('mongoose')

async function connectMongodb(){
    const URI = `mongodb+srv://ChiragGwalani:Chirag123@cluster0.6smf1n8.mongodb.net/SocialMediaApis?retryWrites=true&w=majority`

    try{
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('MongoDB Connected')
    }catch(err){
        console.log(err)
    }
}

module.exports = connectMongodb