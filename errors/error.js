const notFoundHandler = (req, res, next) => {
	res.status(400).json({
		success: false,
		data: {
			message: "resource not found",
		},
	});
	next();
};

const serverError = (error, req, res, next) => {
	res.status(500).json({
		data: {
			success: false,
			message: "server error",
			error: error.message,
		},
	});
	console.log(`server error: ${error.message}`);
};

module.exports = {
	serverError,
	notFoundHandler,
};
