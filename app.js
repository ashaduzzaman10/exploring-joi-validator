const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const userModel = require("./models/userModel");
const bcrypt = require("bcrypt");

// application middleware

app.use([
	cors(),
	morgan("dev"),
	express.json(),
	express.urlencoded({ extended: true }),
]);

// user validation
app.post("/api/register", async (req, res) => {
	try {
		const { name, email, password } = req.body;
		const User = await userModel.findOne({ name: name, email: email });
		if (User)
			return res.status(400).json({
				success: false,
				data: "user already exist",
				user: User,
			});

		if (!User) {
			const salt = 10;
			bcrypt.hash(password, salt, async (err, hash) => {
				if (err) {
					res.status(500).json({
						success: false,
						data: {
							message: "something wrong when user was created",
							error: err.message,
						},
					});
				}
				if (!err) {
					const createUser = new userModel({
						name,
						email,
						password: hash,
					});
					await createUser.save();
					res.status(201).json({
						success: true,
						data: { message: "user created successfully" },
					});
				}
			});
		}
	} catch (error) {
		res.status(500).json({
			success: true,
			data: {
				error: "error.message",
			},
		});
	}
});

// home route
app.get("/", (req, res) => {
	res.status(200).json({
		success: true,
		data: {
			message: "welcome to home ",
		},
	});
});

// health route
app.get("/health", (req, res) => {
	res.status(200).json({
		success: true,
		data: {
			message: true,
		},
	});
});

// error
app.use((req, res, next) => {
	res.status(400).json({
		success: false,
		data: {
			message: "resource not found",
		},
	});
	next();
});

// server error
app.use((error, req, res, next) => {
	res.status(500).json({
		data: {
			success: false,
			message: "server error",
			error: error.message,
		},
	});
	console.log(`server error : ${error.message}`);
});
module.exports = app;
