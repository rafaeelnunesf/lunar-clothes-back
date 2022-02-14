import { Router } from "express";
import authRouter from "./authRouter.js";
import catalogRouter from "./catalogRouter.js";
import myBagRouter from "./myBagRouter.js";
import checkout from "./checkoutRouter.js";

const router = Router();

router.use(authRouter);
router.use(catalogRouter);
router.use(myBagRouter);
router.use(checkout);

export default router;
