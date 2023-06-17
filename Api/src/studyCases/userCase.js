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




  module.exports = {listarUsers,createRegister} 