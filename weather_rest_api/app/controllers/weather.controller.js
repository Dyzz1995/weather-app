const dailyForecast = require('../models/weather.model.js');
var log4js = require('log4js');

const apiKey = '37a607818d13b20b2d6b143b4e0f762a';
const url = 'http://api.openweathermap.org/data/2.5/weather?';

log4js.configure({
    appenders: { weather: { type: 'file', filename: './app/log/weather.log' } },
    categories: { default: { appenders: ['weather'], level: 'trace' }}
});

var logger = log4js.getLogger();

exports.getLocationKeyByCityName = (req, res) => {

    let request = require('request');

    let city = req.params.cityName;

    let urlPath = url + `q=${city}&units=metric&appId=${apiKey}`;


    request(urlPath, function (err, response, body) {
        logger.info("Request: " + urlPath);
        if(response.statusCode == 404){
            logger.error("Response Status: " + response.statusCode +" " + response.statusMessage);
            logger.error("City " + city + " doesn't exist.");
            res.send({'status': response.statusCode, 'message': response.statusMessage});
        } else if(response.statusCode == 401){
            logger.error("Response Status: " + response.statusCode +" Invalid API Key ");
            res.send({'status': response.statusCode, 'message': response.statusMessage});            
        }else{
            logger.info("Response Status: " + response.statusCode + " " + response.statusMessage +  " For city " + city);
            var weather = dailyForecast(body);
            res.send(weather);    
        }

    });

};
