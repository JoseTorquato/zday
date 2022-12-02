const axios = require("axios");
require('dotenv').config()

const city = 'Canoas'
const apiKey = process.env.API_KEY

console.log(city, apiKey)
const options = {
  method: 'GET',
  url: `https://api.openweathermap.org/data/2.5/weather?q=${city},br&appid=${apiKey}&units=metric&lang=pt_br`
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});