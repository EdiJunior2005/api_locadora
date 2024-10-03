import User from "../models/User.js";
import jwtService from "../services/jwt-service.js";

export const signup = async (req, res) => {
  try {
    const user = await User.create({
      nome: req.body.nome,
      email: req.body.email,
      password: req.body.password,
    });

    res.status(201).send({
      user
    });

  } catch (error) {
    console.log(error)
    res.status(400).send(error);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    }).exec();

    if (user && (await user.senhaCorreta(req.body.password))) {
      const token = jwtService.generateAccessToken({
        tipo: user.tipo,
        email: user.email,
        _id: user._id,
      });

      res.send({
        token,
      });
    } else {

      res.status(404).send("Email ou senha inválidos");
    }

  } catch (error) {
    console.log(error)
    res.status(400).send(error);
  }
};