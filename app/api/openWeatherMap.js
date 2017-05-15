import axios from 'axios';

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?";
const APP_ID = "c01a97137b8e4371991e660712bd1d43";
const UNITS = 'metric';

function getWeather(location) {
    var encodedLocation = encodeURIComponent(location);
    var weatherURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}&appId=${APP_ID}&units=${UNITS}`;
    
    return axios.get(weatherURL).then(function(response) {
        if(response.status == 200) {
            return response.data.main.temp;
        }
    }, function(err) {
        throw new Error(err.response.data.message);
    });
}

module.exports = {
    getWeather
};