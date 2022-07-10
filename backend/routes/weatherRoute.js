const express = require("express");
const { getWeather } = require("../controllers/weatherController");
const router = express.Router();

// Routes
router.route("/").get(getWeather);


module.exports = router;