import express, { response } from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

// Config
const app = express();
dotenv.config(); //dot env things
app.use(cors());

app.get("/api/", function (req, res) {
  let location = req.query.location;
  let userLocationLatitude = req.query.lat;
  let userLocationLongitude = req.query.lon;

  let geolocationData = null; //Geolocation data from GeoCoding API
  let weatherData = null;

  // FOR LOCATION INPUTS
  if (location) {
    console.log(location);

    // First use the Geo-location API
    axios
      .get(
        ` https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=${process.env.LIMIT}&appid=${process.env.APP_ID}`
      )
      .then((response) => {
        // Handle the response data here
        geolocationData = response.data[0]; //it is an object

        //Get the latitude and longitude
        let latitude = geolocationData.lat.toString(); // convert to string
        let longitude = geolocationData.lon.toString();

        // For Open Weather
        return axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.APP_ID}`
        );
      })
      .then((response) => {
        weatherData = response.data;
        // console.log(latitude,longitude);
        // res.json(geolocationData);
        // console.log(weatherData);
        res.json({
          weather: weatherData,
          location: geolocationData,
        }); // response working!!!
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error({
          error: error,
          message: "Error occured from geo location",
        });
      });
  }
  // FOR USER LOCATION
  else if (userLocationLatitude) {
    console.log(userLocationLatitude, userLocationLongitude);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${userLocationLatitude}&lon=${userLocationLongitude}&units=metric&appid=${process.env.APP_ID}`
      )
      .then((response) => {
        weatherData = response.data;
        // console.log(latitude,longitude);
        // res.json(geolocationData);
        // console.log(weatherData,geolocationData);
        res.json({
          weather: weatherData,
          location: {
            name: weatherData.city.name,
            country: weatherData.city.country,
          },
        }); // response working!!!
      });
  }

  // console.log(process.env.APP_ID);
});

app.listen(3000, function () {
  console.log("Server started at port 3000");
});
