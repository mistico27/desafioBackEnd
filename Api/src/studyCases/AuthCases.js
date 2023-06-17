const User = require("../Models/User.model");
const bcrypt = require('bcrypt');
const createError = require("http-errors")
const jwt =require("../lib/jwt/jwt.lib")

///login
const loginSignUp =async(email,password)=>{
    const userFound = await User.findOne({email})
    const isValidPassword= await bcrypt.compare(password, userFound.password)
    if(!userFound){
        throw createError(400, "Invalid data");
    }
    if(!isValidPassword){
        throw createError(400, "Invalid data");
    }
    ///este viene de la librearia jwt.lib.js
    const token = jwt.sign({user: userFound.email, id:userFound._id })
    console.log(token);
    return token;
}



module.exports = {loginSignUp}