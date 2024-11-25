const { userLogIn } = require( "../controllers/loginControler" );
const userRegister = require( "../controllers/registerController" );

const userRoute = require("express").Router();

// user registration
userRoute.post("/register", userRegister);

// user login
userRoute.get("/login", userLogIn);

module.exports = {
	userRoute,
};
