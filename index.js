var express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
require("dotenv").config();
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
const weatherForecsat_router = require('./server/routes/weatherForecast');
var cors = require('cors')
app.options('*', cors())

var indexRouter = express.Router();

indexRouter.get('/', function(req, res) {
    res.status(200).send({ "status": "ok" });
});


indexRouter.use('/', weatherForecsat_router);
indexRouter.use('/api-docs', swaggerUi.serve);
indexRouter.get('/api-docs', swaggerUi.setup(swaggerFile));

app.use("", indexRouter);

let server = app.listen(process.env.PORT, process.env.IP_ADDRESS, function() {
    console.log('ONLINE on port ' + process.env.PORT);
});

module.exports = server;