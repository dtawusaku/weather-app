import express, { response } from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

// Config
const app = express();
dotenv.config(); //dot env things
app.use(cors());

app.get("/", function (req, res) {
  let location = req.query.location;
  let userLocationLatitude = req.query.lat;
  let userLocationLongitude = req.query.lon;
  console.log(location);
  // if (userLocationLatitude && userLocationLongitude) {
  //   console.log("User Location Dey");
  // }
  // if (userLocationLatitude && location) {
  //   console.log("Normal Location andd User Location Dey");
  // }

  let geolocationData = null; //Geolocation data from GeoCoding API
  let weatherData = null;

  if (location) {
    console.log("Only User Location dey");

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
        // console.log(weatherData,geolocationData);
        res.json({ weather: weatherData, location: geolocationData }); // response working!!!
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error({
          error: error,
          message: "Error occured from geo location",
        });
      });
  }

  // console.log(process.env.APP_ID);
});

app.listen(3000, function () {
  console.log("Server started at port 3000");
});
