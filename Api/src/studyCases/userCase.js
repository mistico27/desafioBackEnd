const User = require("../Models/User.model");
////enlistar Users
const list = () => {
    // Accion -> use case;
    const users = User.find();
    return users;
  
  } 
  ///crear User
  const createUser= (data) => {
    const Newuser = User.create(data);
    return Newuser;
}
  



  module.exports = { list,createUser} 