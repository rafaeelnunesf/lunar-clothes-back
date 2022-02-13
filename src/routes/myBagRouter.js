import { Router } from "express";
import { getMyBag, postMyBag } from "../controllers/myBagController.js";
import tokenValidationMiddleware from "../middlewares/tokenValidationMiddleware.js";

const myBagRouter = Router();

myBagRouter.use(tokenValidationMiddleware);
myBagRouter.post("/mybag", postMyBag);
myBagRouter.get("/mybag", getMyBag);

export default myBagRouter;
