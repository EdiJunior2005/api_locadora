import dotenv from "dotenv";
import express from "express";
import userRouters from "./routers/userRouters.js";
import movieRouters from "./routers/movieRouters.js";
import renderRouters from "./routers/renderRouter.js";

const app = express();
dotenv.config();

app.use(express.json());

app.use("/user", userRouters);
app.use("/movie", movieRouters);
app.use("/render", renderRouters);

app.listen(process.env.API_PORT, () => console.log("Servidor pet auth executando na porta " + process.env.API_PORT));