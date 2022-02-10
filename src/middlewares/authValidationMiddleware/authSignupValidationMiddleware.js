import authSignupSchema from "../../schemas/authSchema/authSignupSchema.js";

export default function authSignupValidationMiddleware(req, res, next) {
  const validation = authSignupSchema.validate(req.body, { abortEarly: false });
  if (validation.error) {
    const err = validation.error.details.map((detail) => detail.message);
    return res.status(422).send(err);
  }

  next();
}
