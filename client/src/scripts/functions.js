import { format } from "date-fns"; //Date Formatting
import clouds from "./clouds";

//Remember For Day and night.
function selectLottieByDescriptionDay(description) {
  switch (description) {
    //Rain
    case "light rain":
      return clouds.others.rain;
      break;
    case "moderate rain":
      return clouds.others.rain;
      break;
    case "heavy intensity rain":
      return clouds.day.extremedayrain;
      break;
    //Clouds
    case "overcast clouds":
      return clouds.day.overcast;
      break;
    case "broken clouds":
      return clouds.day.extreme;
      break;
    case "scattered clouds":
      return clouds.day.partlycloudy;
      break;
    case "few clouds":
      return clouds.day.partlycloudy;
      break;
    //Sky
    case "clear sky":
      return clouds.others.clearday;
      break;
    //Snow
    case "light snow":
      return clouds.others.snow;
      break;
    case "snow":
      return clouds.others.snow;
      break;
  }
}
function selectLottieByDescriptionNight(description) {
  switch (description) {
    //Rain
    case "light rain":
      return clouds.others.rain;
      break;
    case "moderate rain":
      return clouds.others.rain;
      break;
    case "heavy intensity rain":
      return clouds.night.extremedayrain;
      break;
    //Clouds
    case "overcast clouds":
      return clouds.night.overcast;
      break;
    case "broken clouds":
      return clouds.night.extreme;
      break;
    case "scattered clouds":
      return clouds.night.partlycloudy;
      break;
    case "few clouds":
      return clouds.night.partlycloudy;
      break;
    //Sky
    case "clear sky":
      return clouds.others.clearday;
      break;
    //Snow
    case "light snow":
      return clouds.others.snow;
      break;
    case "snow":
      return clouds.others.snow;
      break;
  }
}

function todayDataLogicHandling(weatherobject) {
  //Values
  const dateTimeString = weatherobject.dt_txt;
  const description = weatherobject.weather[0].description;
  const temperature = weatherobject.main.temp;
  const visibility = weatherobject.visibility;
  let lottie = null;

  //Format Date and Time
  const dateTime = new Date(dateTimeString);
  const hours = dateTime.getHours(); ///Get hours value
  const formattedTime = format(dateTime, "HH:mm");

  //Handle Lottie Data by description
  const day_lottie = selectLottieByDescriptionDay(description);
  const night_lottie = selectLottieByDescriptionNight(description);

  //Lottie based on time (hours)
  if (hours >= 0 && hours < 6) {
    //Early Day - Usenight
    lottie = night_lottie;
  } else if (hours >= 6 && hours <= 17) {
    //Day - Useday
    lottie = day_lottie;
  } else if (hours >= 18 && hours <= 24) {
    //Night -Usenight
    lottie = night_lottie;
  } else {
    lottie = day_lottie;
  }

  const data = {
    time: formattedTime,
    description: description,
    lottie: lottie,
    temp: temperature,
    visibility: visibility,
  };

  return data;
}

function todayhightlightslogic(obj) {
  // Convert timestamps to milliseconds
  const sunriseTime = new Date(weatherobject.city.sunrise * 1000);
  const sunsetTime = new Date(weatherobject.city.sunset * 1000);

  //Get time strings
  const sunrise = sunriseTime.toLocaleTimeString();
  const sunset = sunsetTime.toLocaleTimeString();
}

function weekDataLogicHandling() {
  //Format Date and Time
  const dateTimeString = weatherobject.dt_txt;
  const dateTime = new Date(dateTimeString);
  const formattedDate = format(dateTime, "EEEE");
  const formattedTime = format(dateTime, "HH:mm");
}

export default {
  weekDataLogicHandling,
  todayhightlightslogic,
  todayDataLogicHandling,
  selectLottieByDescriptionDay,
  selectLottieByDescriptionNight,
};
