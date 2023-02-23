//import dependencies
const express = require("express");
const cors = require("cors");
const geo = require("./utils/geo");
const weather = require("./utils/weather");
const forcast = require("./utils/forcast");

//Creat an express app
const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    res.send({ error: "address not found" });
  } else {
    geo(req.query.address)
      .then((data) => {
        return weather(data.lat, data.lon);
      })
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.send(error);
      });
  }
  //res.send(req.query);
});

app.get("/forcast", (req, res) => {
  if (!req.query.address) {
    res.send({ error: "address not found" });
  } else {
    geo(req.query.address)
      .then((data) => {
        return forcast(data.lat, data.lon);
      })
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        res.send(error);
      });
  }
  //res.send(req.query);
});

const PORT = 8000;

app.listen(PORT, () => console.log(`Appis running on ${PORT}`));
