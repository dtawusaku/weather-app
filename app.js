import express from "express";
import https from "https";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

// Config
const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs"); // set the view engine to ejs
dotenv.config();
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/assets", express.static(path.join(__dirname, "src/assets")));

app.get("/", function (req, res) {
  res.render("index");
});
app.post("/", function (req, res) {
  const query = req.body.cityName;
  const apiKey = "4df172f8d01decd62e7709cc092d3bbd";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&APPID=" +
    apiKey;
  https.get(url, function (response) {
    response.on("data", (data) => {
      var weatherData = JSON.parse(data);
      if (weatherData.cod == 404) {
        res.send("Error");
      } else {
        var description = weatherData.weather[0].description;
        var temperature = weatherData.main.temp;
        var condition = weatherData.weather[0].main; //Yet to use this
        var icon = weatherData.weather[0].icon;
        var location = weatherData.name;
        var imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

        console.log(weatherData);
        // res.sendFile(__dirname + "//index.html");
        res.render("succes", {
          description: description, // property: data aka variable name kini
          temperature: temperature,
          state: condition,
          location: location,
        });
        // res.send("<img src= " + imageURL + " alt='weather_icon'><br>Temperature in "+ location+ " is about "+temperature+" degrees Celsuis, and it is "+description );
      }
    });
  });
});

// app.post("/weather", function (req) {
//     const city = req.body.city;
//  });

app.listen(3000, function () {
  console.log("Server started at port 3000");
});
