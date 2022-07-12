const express = require("express");
const { getWeather, getWeatherForcast } = require("../controllers/weatherController");
const router = express.Router();
const apicache = require('apicache')

// Init cache
let cache = apicache.middleware

// Routes
router.route("/", cache('5 minutes')).get(getWeather);
router.route("/forcast", cache('5mins')).get(getWeatherForcast)

module.exports = router;