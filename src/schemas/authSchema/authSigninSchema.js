import joi from "joi";

const authSigninSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

export default authSigninSchema;
