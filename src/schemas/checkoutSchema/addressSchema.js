import joi from "joi";

const addressSchema = joi.object({
  street: joi.string().required(),
  number: joi.number().integer().required(),
  city: joi.string().required(),
  state: joi.string().required(),
  country: joi.string().required(),
  zipcode: joi
    .string()
    .pattern(/^\d{5}-\d{3}$/)
    .required(),
});

export default addressSchema;
