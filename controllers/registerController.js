const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const Joi = require( "joi" );

const userRegister = async (req, res) => {
	try {
		const { name, email, password } = req.body;
		const verifyUserData = Joi.object({
			name: Joi.string().min(3).max(21).required(),
			email: Joi.string().email().required(),
			password: Joi.string().min(6).max(21).required(),
		});
		const { error } = verifyUserData.validate(req.body, {
			abortEarly: false,
			errors: {
				wrap: {
					label: " ",
				},
			},
		});
		if (error) {
			const errorList = error.details.map((err) => err.message);
			return res.status(201).json({
				success: false,
				data: "not valid input ",
				error: errorList,
			});
		}
		const User = await userModel.findOne({ email: email });
		if (User) {
			return res.status(400).json({
				success: false,
				data: "user already exists",
				user: User,
			});
		}

		const salt = 10;
		const hashedPassword = await bcrypt.hash(password, salt);
		const createUser = new userModel({
			name,
			email,
			password: hashedPassword,
		});
		await createUser.save();
		res.status(201).json({
			success: true,
			data: { message: "user created successfully" },
			user: createUser,
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

module.exports = userRegister;
