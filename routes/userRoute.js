const { userLogIn } = require("../controllers/loginControler");
const userRegister = require("../controllers/registerController");
const {
	verifyUserDataForLogInSchema,
	verifyUserDataForRegisterSchema,
} = require("../middlewares/validation/userInputSchema");
const { runValidation } = require("../middlewares/validation/userValidation");

const userRoute = require("express").Router();

// user registration
userRoute.post(
	"/register",
	runValidation(verifyUserDataForRegisterSchema),
	userRegister
);

// user login
userRoute.get("/login", runValidation(verifyUserDataForLogInSchema), userLogIn);

module.exports = {
	userRoute,
};
