require("dotenv").config();

const mongoose = require("mongoose");
const dbUrl = process.env.DBURL || "mongodb://localhost:27017/usersDB";

const dbConnection = async () => {
	try {
		await mongoose.connect(dbUrl);
		console.log(`db is connected successfully `);
	} catch (error) {
		console.log(`db is not Connected`);
		console.log(`error message : ${error.message}`);
	}
};

module.exports = dbConnection;
