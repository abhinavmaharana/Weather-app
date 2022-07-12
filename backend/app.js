const express = require ('express')
const app = express();
const cors = require('cors');
const rateLimit = require('express-rate-limit')
const path = require("path");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "backend/config/config.env" });
}


// Rate limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 Mins
    max: 100,
})

app.use(limiter)
app.set('trust proxy', 1)

//Enable cors
app.use(cors())

//Route Impports
const weather = require("./routes/weatherRoute");

app.use("/api/weather", weather);

app.use(express.static(path.join(__dirname,"../frontend/build")))

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

module.exports = app;

