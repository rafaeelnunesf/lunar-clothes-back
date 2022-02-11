import { Router } from "express";
import authRouter from "./authRouter.js";
import catalogRouter from "./catalogRouter.js";

const router = Router();

router.use(authRouter);
router.use(catalogRouter);

export default router;
