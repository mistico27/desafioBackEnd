const User = require("../Models/User.model");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const createError = require("http-errors");
const jwt = require("../lib/jwt/jwt.lib");

////enlistar Users
const listarUsers = (filters) => {
    const users = User.find(filters);
    return users;
  
  } 

///getUSer
const getUser = async (id) => {
  const user = await User.findById(id);
  if(!user) throw createError(404, "User with that id not found");
  return user;
}  

///crear usuario
const createRegister =async(data)=>{
    let passwordEncryptada = await bcrypt.hash(data.password, saltRounds);
     data.password=passwordEncryptada;
     const user = await User.create(data);
     console.log("hey soyt el nuevo registro user",user);
     return user;
 }

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



  module.exports = {listarUsers,createRegister,loginSignUp,getUser} 