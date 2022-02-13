import { Router } from "express";
import { getProducts, getSizes } from "../controllers/catalogController.js";
import tokenValidationMiddleware from "../middlewares/tokenValidationMiddleware.js";

const catalogRouter = Router();

catalogRouter.get("/catalog", getProducts);
catalogRouter.get("/catalog/:id", getSizes);

export default catalogRouter;
