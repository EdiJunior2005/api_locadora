import Movie from "../models/Movie.js";

export const store = async (req, res) => {
    try {
      const content = await Movie.create(req.body);
      res.status(201).send(content);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  
  export const index = async (req, res) => {
    try {
      const content = await Movie.find(req.query).exec();
      res.send(content);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  
  export const show = async (req, res) => {
    try {
      const content = await Movie.findById(req.params.id).exec();
      res.send(content);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  
  export const update = async (req, res) => {
    try {
      const content = await Movie.findByIdAndUpdate(
        req.params.id,
        req.body
      ).exec();
      res.send(content);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  
  export const destroy = async (req, res) => {
    try {
      const content = await Movie.findByIdAndDelete(req.params.id).exec();
      res.send(content);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  