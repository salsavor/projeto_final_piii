const jwt = require("jsonwebtoken");
const config = require("./config/config.js");

//cada pedido a um endpoint valida token de autenticação
const checkToken = (req, res, next) => {
  const token = req.headers["x-access-token"] || req.headers["authorization"];

  if (token != undefined && token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }

  //se token existe
  if (token) {
    jwt.verify(token, config.secret, (error, decoded) => {
      if (error) {
        return res.json({
          success: false,
          message: "token é inválido",
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({
      success: false,
      message: "token não fornecido",
    });
  }
};

module.exports = {
  checkToken: checkToken,
};
