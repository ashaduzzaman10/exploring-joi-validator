const express = require("express");
const app = express();

const { userRoute } = require("./routes/userRoute");
const { serverError, notFoundHandler } = require("./errors/error");
const checker = require("./middlewares/common/checker");

// application middleware
app.use(checker);

//  my route
app.use("/api", userRoute);
// home route
app.get("/", (req, res) => {
	res.status(200).json({
		success: true,
		data: {
			message: "welcome to home",
		},
	});
});

// health route
app.get("/health", (req, res) => {
	res.status(200).json({
		success: true,
		data: {
			message: " successful",
		},
	});
});

// error
app.use(notFoundHandler);

// server error
app.use(serverError);

module.exports = app;
