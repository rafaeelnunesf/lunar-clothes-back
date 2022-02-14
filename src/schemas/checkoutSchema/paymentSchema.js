import joi from "joi";

const paymentSchema = joi.object({
  name: joi.string().required(),
  cardNumber: joi
    .string()
    .pattern(/[0-9]{16}/)
    .required(),
  expireDate: joi
    .string()
    .pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))/)
    .required(),
  cvv: joi
    .string()
    .pattern(/[0-9]{3}/)
    .required(),
});

export default paymentSchema;
