const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const Joi = require( "joi" );


const userLogIn = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await userModel.findOne({ email: email });
		if (!user) {
			return res.status(401).json({
				success: false,
				message: "not a valid user",
			});
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(401).json({
				success: false,
				message: "incorrect password",
			});
		}

		return res.status(200).json({
			success: true,
			message: "user login successfully",
			user: user,
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			data: {
				error: error.message,
			},
		});
	}
};

module.exports = {
	userLogIn,
};
