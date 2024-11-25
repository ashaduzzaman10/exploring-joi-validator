const cors = require("cors");
const morgan = require("morgan");
const express = require("express");

const checker = [
	cors(),
	morgan("dev"),
	express.json(),
	express.urlencoded({ extended: true }),
];

module.exports = checker;
