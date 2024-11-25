const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		validate: {
			validator: function (value) {
				return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
			},
			message: "Invalid email address format",
		},
	},
	password: {
		type: String,
		require: true,
	},
});

const userModel = mongoose.model("UserSchema", UserSchema);
module.exports = userModel;
