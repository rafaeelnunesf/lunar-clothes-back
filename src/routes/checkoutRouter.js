import { Router } from "express";

import tokenValidationSchema from "../middlewares/tokenValidationMiddleware.js";
import addressValidationMiddleware from "../middlewares/checkoutValidationMiddleware/addressValidationMiddleware.js";
import paymentValidationMiddleware from "../middlewares/checkoutValidationMiddleware/paymentValidationMiddleware.js";

import {
  postAddress,
  postCreditCard,
  getAddress,
  getCreditCard,
} from "../controllers/checkoutController.js";

const checkout = Router();
checkout.use(tokenValidationSchema);

checkout.post("/add-new-address", addressValidationMiddleware, postAddress);
checkout.get("/add-new-address", getAddress);

checkout.post(
  "/add-new-payment-method",
  paymentValidationMiddleware,
  postCreditCard
);
checkout.get("/add-new-payment-method", getCreditCard);

export default checkout;
