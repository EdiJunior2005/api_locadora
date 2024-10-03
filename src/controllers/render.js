import Render from "../models/Render.js";

export const store = async (req, res) => {
    try {
      const content = await Render.create(req.body);
      res.status(201).json(content);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  
  export const index = async (req, res) => {
    try {
      const content = await Render.find(req.query).exec();
      res.json(content);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  
  export const show = async (req, res) => {
    try {
      const content = await Render.findById(req.params.id).exec();
      res.json(content);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  
  export const update = async (req, res) => {
    try {
      const content = await Render.findByIdAndUpdate(
        req.params.id,
        req.body
      ).exec();
      res.json(content);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  
  export const destroy = async (req, res) => {
    try {
      const content = await Render.findByIdAndDelete(req.params.id).exec();
      res.json(content);
    } catch (error) {
      res.status(400).send(error);
    }
  };