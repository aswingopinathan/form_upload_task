const User = require('../model/userModel')

module.exports = {
    signUp:async(req,res)=>{
        try {
            console.log('signUp working')
            const { name, lastname, place, experience } = req.body
            const previousUser = await User.find({name:name})
            if(previousUser.length != 0){
                console.log('user exists')
                return res.status(400).json({message:'user exists'})
            }
            console.log('req.files',req.files);
            const resume = req.files[0].path
            const user = await User.create({name, lastname, place, experience, resume})
            // const user = { fake:"fake" }
            res.status(200).json(user)
        } catch (error) {
            console.log('error',error)
        }
    }
}