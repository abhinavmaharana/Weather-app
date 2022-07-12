const express = require("express");
const { getWeather, getWeatherForcast,getWeatherForcastHourly,getCurrentWeather,getCurrentAirPollution,getIcon } = require("../controllers/weatherController");
const router = express.Router();
const apicache = require('apicache')

// Init cache
let cache = apicache.middleware

// Routes
router.route("/", cache('5 minutes')).get(getWeather);
router.route("/forecast", cache('5 minutes')).get(getWeatherForcast);
router.route("/forecast/hourly", cache('5 minutes')).get(getWeatherForcastHourly);
router.route("/onecall", cache('5 minutes')).get(getCurrentWeather);
router.route("/airpollution", cache('5 minutes')).get(getCurrentAirPollution)
router.route("/icon", cache('5 minutes')).get(getIcon)

module.exports = router;