import authSigninSchema from "../../schemas/authSchema/authSigninSchema.js";

export default function authSigninValidationMiddleware(req, res, next) {
  const validation = authSigninSchema.validate(req.body, { abortEarly: false });
  if (validation.error) {
    const err = validation.error.details.map((detail) => detail.message);
    return res.status(422).send(err);
  }

  next();
}
