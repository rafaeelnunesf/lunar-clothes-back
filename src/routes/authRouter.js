import { Router } from "express";
import { postLogin, postRegistration } from "../controllers/authController.js";
import authSigninValidationMiddleware from "../middlewares/authValidationMiddleware/authSigninValidationMiddleware.js";
import authSignupValidationMiddleware from "../middlewares/authValidationMiddleware/authSignupValidationMiddleware.js";

const authRouter = Router();

authRouter.post("/auth/signin", authSigninValidationMiddleware, postLogin);
authRouter.post(
  "/auth/signup",
  authSignupValidationMiddleware,
  postRegistration
);

export default authRouter;
