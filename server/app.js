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
  console.log(location);
  res.json({
    user: [
      { name: "David", age: "11" },
      { name: "Tony", age: "15" },
    ],
  });
});
app.post("/", (req, res) => {
  res.json({});
});

app.listen(3000, function () {
  console.log("Server started at port 3000");
});
