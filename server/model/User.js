const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userScehma = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})


userScehma.pre("save",async function(next){
    if(!this.isModified("password")) return next(); //if pass not changed keep as it is
    const salt = await bcrypt.genSalt(10);//create random salt
    this.password = await bcrypt.hash(this.password,salt)//hash the pass with salt
    next();
})

userScehma.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password)
}

const User = mongoose.model("User",userScehma)
module.exports = User;