const axios = require("axios");

const getGeo = (location) => {
  return new Promise((resolve, reject) => {
    const url2 =
      "https://api.openweathermap.org/geo/1.0/direct?q=" +
      location +
      "&limit=5&appid=01c16a230bfa84c9d537e48c8f07b1c7";

    // Make a request for a user with a given ID
    axios
      .get(url2)
      .then((response) => {
        // handle success
        resolve({
          name: response.data[0].name,
          lat: response.data[0].lat,
          lon: response.data[0].lon,
        });
      })
      .catch((error) => {
        // handle error
        reject({ error: "unable to find location" });
      });
  });
};

module.exports = getGeo;
