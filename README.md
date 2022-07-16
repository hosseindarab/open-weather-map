# Weather Forecast using Node.js(Express.js) and [openweather-apis package](http://openweathermap.org/appid)

This application retrieves the weather data related to the chosen city name.

## How to run the application

After pulling the application in your local machine, open your terminal and run the following command in
the right directory(for example C:\dev\open-weather-map):

```bash
npm install node_modules
```

After installing node_modules packages, we can start the app in two ways
* Or using the following command that makes your app to be listening to the requests and observe the
results in terminal
```bash
ndoe .\index.js
```
* Or using the following command that makes your app to be listening to the requests and see the Swagger
API documentation as well.
```bash
node .\swagger.js
```

## How to observe and test existing APIs in Swagger documentation

After, running your app in Swagger mode, go to the following link http://localhost:3000/api-docs/ and you will see the documentation related to /get-weather-data .
You can also test it by inserting your desired city name and click on the execute to see the results.

