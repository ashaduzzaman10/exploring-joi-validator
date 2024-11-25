const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

// application middleware

app.use([
	cors(),
	morgan("dev"),
	express.json(),
	express.urlencoded({ extended: true }),
]);

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
