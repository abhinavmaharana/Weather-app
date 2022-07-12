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

        // Log the request to the public API
        if (process.env.NODE_ENV !== 'production') {
            console.log(`REQUEST: https://api.openweathermap.org/data/2.5/weather?${params}`)
        }
  
    } catch (error) {
        res.status(500).json({error})
    }
})

// To get Forecast data 
exports.getWeatherForcast = catchAsyncErrors(async (req,res, next) => {
    try {
        const params = new URLSearchParams({
            [API_KEY_NAME]: API_KEY_VALUE,
            ...url.parse(req.url, true).query,
        })
        const apiRes = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?${params}`
        )
            .then((response) => response.json())
            .then((data) => res.status(200).json(data))
            .catch((err) => console.log(err));
        // Log the request to the public API
        if (process.env.NODE_ENV !== 'production') {
            console.log(`REQUEST: https://api.openweathermap.org/data/2.5/forecast?${params}`)
        }
    } catch (error) {
        res.status(500).json({error})
    }
})

// To get Forecast Hourly data 
exports.getWeatherForcastHourly = catchAsyncErrors(async (req,res, next) => {
    try {
        const params = new URLSearchParams({
            ...url.parse(req.url, true).query,
        })
        const apiRes = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast/hourly?${params}&${API_KEY_NAME}=${API_KEY_VALUE}`
        )
            .then((response) => response.json())
            .then((data) => res.status(200).json(data))
            .catch((err) => console.log(err));
        // Log the request to the public API
        if (process.env.NODE_ENV !== 'production') {
            console.log(`REQUEST: https://api.openweathermap.org/data/2.5/forecast/hourly?${params}&${API_KEY_NAME}=${API_KEY_VALUE}`)
        }
    } catch (error) {
        res.status(500).json({error})
    }
})

// To get Current Weather data 
exports.getCurrentWeather = catchAsyncErrors(async (req,res, next) => {
    try {
        const params = new URLSearchParams({
            [API_KEY_NAME]: API_KEY_VALUE,
            ...url.parse(req.url, true).query,
        })
        const apiRes = await fetch(
            `https://api.openweathermap.org/data/2.5/onecall?${params}`
        )
            .then((response) => response.json())
            .then((data) => res.status(200).json(data))
            .catch((err) => console.log(err));
        // Log the request to the public API
        if (process.env.NODE_ENV !== 'production') {
            console.log(`REQUEST: https://api.openweathermap.org/data/2.5/onecall?${params}`)
        }
    } catch (error) {
        res.status(500).json({error})
    }
})

// To get Current Air Pollution data 
exports.getCurrentAirPollution = catchAsyncErrors(async (req,res, next) => {
    try {
        const params = new URLSearchParams({
            [API_KEY_NAME]: API_KEY_VALUE,
            ...url.parse(req.url, true).query,
        })
        const apiRes = await fetch(
            `https://api.openweathermap.org/data/2.5/air_pollution?${params}`
        )
            .then((response) => response.json())
            .then((data) => res.status(200).json(data))
            .catch((err) => console.log(err));
        // Log the request to the public API
        if (process.env.NODE_ENV !== 'production') {
            console.log(`REQUEST: https://api.openweathermap.org/data/2.5/air_pollution?${params}`)
        }
    } catch (error) {
        res.status(500).json({error})
    }
})

// To get Weather Icon

exports.getIcon = catchAsyncErrors(async (req,res,next) => {
    try {
        const apiRes = await fetch(
            `https://openweathermap.org/img/wn/`
        )
            .then((response) => response.json())
            .then((data) => res.status(200).json(data))
            .catch((err) => console.log(err));
        
            // Log the request to the public API
        if (process.env.NODE_ENV !== 'production') {
            console.log(`REQUEST: https://openweathermap.org/img/wn/`)
        }
    } catch (error) {
        res.status(500).json({error})
    }
})
