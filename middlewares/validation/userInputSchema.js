const Joi = require("joi");

const verifyUserDataForRegisterSchema = Joi.object({
	name: Joi.string().min(3).max(21).required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(6).max(21).required(),
});

const verifyUserDataForLogInSchema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().min(6).max(21).required(),
});

module.exports = {
	verifyUserDataForRegisterSchema,
	verifyUserDataForLogInSchema,
};
