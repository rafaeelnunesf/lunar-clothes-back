import { Router } from "express";
import {
  deleteMyBag,
  getMyBag,
  postMyBag,
  updateQuantityProduct,
  deleteManyMyBag,
} from "../controllers/myBagController.js";
import tokenValidationMiddleware from "../middlewares/tokenValidationMiddleware.js";

const myBagRouter = Router();

myBagRouter.use(tokenValidationMiddleware);
myBagRouter.post("/mybag", postMyBag);
myBagRouter.get("/mybag", getMyBag);
myBagRouter.delete("/mybag/:id", deleteMyBag);
myBagRouter.delete("/delete/checkout", deleteManyMyBag);
myBagRouter.put("/mybag/:id", updateQuantityProduct);

export default myBagRouter;
