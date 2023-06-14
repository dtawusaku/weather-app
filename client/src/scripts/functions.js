import { format } from "date-fns"; //Date Formatting
import clouds from "./clouds";

//Remember For Day and night.
function selectLottieByDescritpion(description) {
  switch (description) {
    case "light rain":
      return clouds.day.extreme;
      break;
    case "overcast clouds":
      return clouds.day.extreme;
      break;
    case "broken clouds":
      return clouds.day.extreme;
      break;
    case "scattered clouds":
      return clouds.day.extreme;
      break;
    case "few clouds":
      return clouds.day.extreme;
      break;
    case "clear sky":
      return clouds.day.extreme;
      break;
    case "light snow":
      return clouds.day.extreme;
      break;
  }
}

function todayDataLogicHandling(weatherobject) {
  //Values
  const dateTimeString = weatherobject.dt_txt;
  const description = weatherobject.weather[0].description;
  const temperature = weatherobject.main.temp;
  let lottie = "";

  //Format Date and Time
  const dateTime = new Date(dateTimeString);
  const formattedTime = format(dateTime, "HH:mm");

  //Handle Lottie Data by description
  lottie = selectLottieByDescritpion(description);

  const data = {
    time: formattedTime,
    description: description,
    "day-lottie": "",
    "night-lottie": "",
    temp: temperature,
  };

  return data;
}
function weekDataLogicHandling() {
  //Format Date and Time
  const dateTimeString = weatherobject.dt_txt;
  const dateTime = new Date(dateTimeString);
  const formattedDate = format(dateTime, "EEEE");
  const formattedTime = format(dateTime, "HH:mm");
}
