///middleware  de auth que vamos a usar
const jwt = require("../lib/jwt/jwt.lib")

const auth = (request, response, next) => {
    try {
      // Obtener mi header de autorizacion
      const authorization = request.headers.authorization || "";
      // Quitarle Bearer a mi header para obtener el token de JWT
      const token = authorization.replace("Bearer ", "");
      // Verificar el token
      const isVerified = jwt.verify(token);
      next()
    } catch (err) {
      response.status(401).json({
        success: false,
        message: err.message
      })
    }
  }

  module.exports = auth;