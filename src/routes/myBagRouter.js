import { Router } from "express";
import {
  deleteMyBag,
  getMyBag,
  postMyBag,
  deleteManyMyBag,
} from "../controllers/myBagController.js";
import tokenValidationMiddleware from "../middlewares/tokenValidationMiddleware.js";

const myBagRouter = Router();

myBagRouter.use(tokenValidationMiddleware);
myBagRouter.post("/mybag", postMyBag);
myBagRouter.get("/mybag", getMyBag);
myBagRouter.delete("/mybag/:id", deleteMyBag);
myBagRouter.delete("/delete/checkout", deleteManyMyBag);

export default myBagRouter;
