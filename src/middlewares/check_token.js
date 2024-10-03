import jwtService from "../services/jwt-service.js";

function check_token(req, res, next) {

  const token = req.headers['authorization']?.split(' ')[1];

  console.log(token)

  if (!token) {
    return res.status(401).json("Acesso negado (usuário não identificado)");
  }

  try {
    req.user = jwtService.verifyAccessToken(token);
  } catch (error) {
    console.log(error)
    res.status(401).json("Token inválido");
  }

  next();
}

export default check_token; 