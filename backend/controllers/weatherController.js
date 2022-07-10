const ErrorHandler = require('../utils/errorhandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');

exports.getWeather =  catchAsyncErrors(async(req,res,next) => {
    res.json({ success: true })
})