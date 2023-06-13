import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

// Config
const app = express();
dotenv.config(); //dot env things
app.use(cors());

app.get("/weather", function (req, res) {
  let location = req.query.location;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=Tokyo&APPID=${process.env.APP_ID}`
    )
    .then((response) => {
      // Handle the response data here
      const data = response.data;
      res.json(data);
    })
    .catch((error) => {
      // Handle any errors that occur during the request
      console.error(error);
    });

  // console.log(process.env.APP_ID);
});

app.listen(3000, function () {
  console.log("Server started at port 3000");
});
