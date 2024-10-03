import { Router } from "express";
import {
  store,
  index,
  show,
  update,
  destroy,
} from "../controllers/movie.js";

import check_token from "../middlewares/check_token.js";
import check_role from "../middlewares/check_role.js"
import via_cep from "../middlewares/via_cep.js"

const router = Router();

router.post("/", /*check_token, check_role(["REC"]), via_cep,*/ store);
router.get("/", /*check_token, check_role(["REC"]),*/ index); 
router.get("/:id", check_token, show);
router.put("/:id", check_token,via_cep, update);
router.delete("/:id", check_token, destroy);

export default router