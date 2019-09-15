function parseBody1DailyForecast(body){

    var parseBody = JSON.parse(body);
    var weatherSchema = {
        status: parseBody.cod,
        cityName: parseBody.name,
        text: parseBody.weather[0].description,
        temperature: {
            actual: parseBody.main.temp,
            minimum: parseBody.main.temp_min,
            maximum: parseBody.main.temp_max
        },
        sunLight: {
            sunrise: convert(parseBody.sys.sunrise),
            sunset: convert(parseBody.sys.sunset)
        }
    };

    return weatherSchema;
}


function convert(timestamp){

   
    // Months array
    var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
   
    // Convert timestamp to milliseconds
    var date = new Date(timestamp*1000);
   
    // Year
    var year = date.getFullYear();
   
    // Month
    var month = months_arr[date.getMonth()];
   
    // Day
    var day = date.getDate();
   
    // Hours
    var hours = date.getHours();
   
    // Minutes
    var minutes = "0" + date.getMinutes();
   
    // Seconds
    var seconds = "0" + date.getSeconds();
   
    // Display date time in MM-dd-yyyy h:m:s format
    var convdataTime = month+'-'+day+'-'+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    
    return convdataTime;
    
   }

module.exports = parseBody1DailyForecast;


/* var WeatherSchema = {
    Text: String, //Headline.Text
    Severity: String, //Headline.Severity
    Temperature: { //DailyForecasts.Temperature
        minimum: Number, 
        maximum: Number,
        unit: String,
    },
    RealFeelTemerature: { //DailyForecasts.RealFeelTemperature
        minimum: Number, 
        maximum: Number,
        unit: String,
    },
    Sunrise: Date, // DailyForecasts.Sun.EpochRise
    Sunlight: Date, //DailyForecasts.Sun.EpochSet
    HoursOfSun: Number, //DailyForecasts.HoursOfSun
};

module.exports = WeatherSchema; */