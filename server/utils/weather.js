//import axios from 'axios';
const axios = require("axios");

const getWeather = (lat, lon) => {
  return new Promise((resolve, reject) => {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
      lat +
      "&lon=" +
      lon +
      "&units=metric&appid=01c16a230bfa84c9d537e48c8f07b1c7";

    // Make a request for a user with a given ID
    axios
      .get(url)
      .then(function (response) {
        // handle success
        resolve(response.data);
      })
      .catch(function (error) {
        // handle error
        reject(error.response.data.message);
      });
  });
};

module.exports = getWeather;
