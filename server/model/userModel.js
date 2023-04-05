const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
    place:{
        type:String,
        required:true,
    },
    experience:{
        type:String,
        required:true,
    },
    resume:{
        type:String,
        required:true,
    },
})
const User = mongoose.model('user',userSchema)
module.exports = User