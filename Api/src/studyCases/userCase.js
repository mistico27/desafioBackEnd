const User = require("../Models/User.model");
////enlistar Users
const listarUsers = () => {
    const users = User.find();
    return users;
  
  } 
  ///crear User
  const createUser= (data) => {
    const Newuser = User.create(data);
    return Newuser;
}


  module.exports = { listarUsers,createUser} 