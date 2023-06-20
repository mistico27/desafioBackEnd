const jwt = require("../lib/jwt/jwt.lib")
const authWhenDelete =(req,res,next)=>{
    //verificar el token y obtener header de authorizacion
    try{
    const auth =req.headers.authorization || "";
      ///quitar Bearer  con split
      const newAuth =auth.split(" ")[1];
      ///verificar token
      const isVerified =jwt.verify(newAuth);
      console.log("si existe??", isVerified);
      if(!isVerified){
          res.status(400);
          res.json({
            success: false,
            message: "El usuario no puede eliminar el post"
          });
          return;
      }
      next();
      }catch(e){
          res.status(400);
          res.json({
            success: false,
            message: e.message
          });
      }
  }
  module.exports = authWhenDelete;