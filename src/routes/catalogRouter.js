import { Router } from "express";
import { getProducts } from "../controllers/catalogController.js";
import tokenValidationMiddleware from "../middlewares/tokenValidationMiddleware.js";

const catalogRouter = Router();

catalogRouter.get("/catalog", getProducts);

export default catalogRouter;
