import paymentSchema from "../../schemas/checkoutSchema/paymentSchema.js";
export default function addressValidationMiddleware(req, res, next) {
  const validation = paymentSchema.validate(req.body, { abortEarly: false });
  if (validation.error) {
    const err = validation.error.details.map((detail) => detail.message);
    return res.status(422).send(err);
  }

  next();
}
