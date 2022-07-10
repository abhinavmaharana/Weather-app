const url = require('url')
const fetch = require('node-fetch')
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Env vars
const API_KEY_NAME = process.env.API_KEY_NAME
const API_KEY_VALUE = process.env.API_KEY_VALUE


exports.getWeather =  catchAsyncErrors(async (req, res, next) => {
    try {
        const params = new URLSearchParams({
            [API_KEY_NAME]: API_KEY_VALUE,
            ...url.parse(req.url, true).query,
        })
        const apiRes = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?${params}`
        )
            .then((response) => response.json())
            .then((data) => res.status(200).json(data))
            .catch((err) => console.log(err));  
    } catch (error) {
        res.status(500).json({error})
    }
})
