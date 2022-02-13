import { Router } from "express";
import authRouter from "./authRouter.js";
import catalogRouter from "./catalogRouter.js";
import myBagRouter from "./myBagRouter.js";

const router = Router();

router.use(authRouter);
router.use(catalogRouter);
router.use(myBagRouter);

export default router;
