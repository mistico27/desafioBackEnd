const User = require("../Models/User.model");
const bcrypt = require('bcrypt');
const saltRounds = 10;
////enlistar Users
const listarUsers = () => {
    const users = User.find();
    return users;
  
  } 

///crear usuario
const createRegister =async(data)=>{
    let passwordEncryptada = await bcrypt.hash(data.password, saltRounds);
     data.password=passwordEncryptada;
     const user = await User.create(data);
     return user;
 }

 const loginSignUp =async(email,password)=>{
  const userFound = await User.findOne({email})
  console.log(userFound);
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



  module.exports = {listarUsers,createRegister,loginSignUp} 