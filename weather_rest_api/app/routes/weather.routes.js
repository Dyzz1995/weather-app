module.exports = (app) => {
    const controller = require('../controllers/weather.controller.js');

    // Get locationKey by CityName
    app.get('/get/forecast/cityName/:cityName', controller.getLocationKeyByCityName);
    
    
}