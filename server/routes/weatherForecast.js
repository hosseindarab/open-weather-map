var express = require('express');
var router = express.Router();
var weatherForecast_controller = require('../controller/weatherForecast');

router.get('/get-weather-data', weatherForecast_controller.getWeatherData);

module.exports = router;