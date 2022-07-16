const bodyParser = require('body-parser');
var express = require('express');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
require("dotenv").config();
const axios = require('axios');
var weather = require('openweather-apis');

// configuration of package 
weather.setLang('en');
weather.setAPPID(process.env.APPID);


async function getWeatherData(req, res) {
    // #swagger.tags = ['Accessing to the weather forecast data by inserting city name']
    /* #swagger.parameters['q'] = {
        in: 'query',
        type: "string",
        required: 'true',
        description: "Name of the city in order to access the weather forecast data"      
} */
    /* #swagger.security = [{
               "AUTHORIZATION": []
        }] */
    console.log(req.query.q)
    weather.setCity(req.query.q);
    try {
        weather.getAllWeather(function (err, JSONObj) {
            console.log(JSONObj);
            res.status(200).send({ "status": "ok", JSONObj });
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ "status": "ko", "error": err.message });
    }
}

module.exports = {
    getWeatherData: getWeatherData,
}
