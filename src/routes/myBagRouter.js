import { Router } from "express";
import { getMyBag, postMyBag } from "../controllers/myBagController.js";

const myBagRouter = Router();

myBagRouter.post("/mybag", postMyBag);
myBagRouter.get("/mybag", getMyBag);

export default myBagRouter;
