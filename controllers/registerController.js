const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

const userRegister = async (req, res) => {
	try {
		const { name, email, password } = req.body;
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
