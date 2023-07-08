import { format } from "date-fns"; //Date Formatting
import clouds from "./clouds";
import emojis from "./emojis";

//Remember For Day and night.
function selectLottieByDescriptionDay(description) {
  switch (description) {
    //Rain
    case "light rain":
      return clouds.day["partlycloudy-rain"];
      break;
    case "moderate rain":
      return clouds.others.rain;
      break;
    case "heavy intensity rain":
      return clouds.day["extreme-rain"];
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
      return clouds.night["partlycloudy-rain"];
      break;
    case "moderate rain":
      return clouds.others.rain;
      break;
    case "heavy intensity rain":
      return clouds.night["extreme-rain"];
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
  const icon = weatherobject.weather[0].icon;
  const temperature = weatherobject.main.temp;
  const humidity = weatherobject.main.humidity;
  const windspeed = weatherobject.wind.speed;
  const visibility = weatherobject.visibility;
  const pressure = weatherobject.main.pressure;
  let lottie = null;

  //Format Date and Time
  const dateTime = new Date(dateTimeString);
  const hours = dateTime.getHours(); ///Get hours value
  const formattedTime = format(dateTime, "HH:mm"); // Time - 16:34
  const weekDayShort = format(dateTime, "EEE"); // Sun

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
    day: weekDayShort,
    time: formattedTime,
    description: description,
    lottie: lottie,
    temp: temperature,
    visibility: visibility,
    humidity: humidity,
    windspeed: windspeed,
    pressure: pressure,
    icon: icon,
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

function weekDataLogicHandling(weatherobject) {}

function airPressureCheck(value) {
  if (value > 0 && value <= 1009) {
    return "Low";
  } else if (value >= 1010 && value < 1016) {
    return "Normal";
  } else if (value >= 1016) {
    return "High";
  }
}
function airpressurelottie(airPressureComment) {
  switch (airPressureComment) {
    case "Low":
      return emojis.thumbsdown;
      break;
    case "Normal":
      return emojis.thumbsup;
      break;
    case "High":
      return emojis.weary;
      break;
    default:
      return { message: "Error occured" };
      break;
  }
}

function humidityCheck(value) {
  if (value < 30) {
    return "Dry";
  } else if ((value >= 30) & (value < 70)) {
    return "Normal";
  } else {
    return "Muggy";
  }
}
function humiditylottie(humiditycomment) {
  switch (humiditycomment) {
    case "Dry":
      return emojis.thumbsdown;
      break;
    case "Normal":
      return emojis.thumbsup;
      break;
    case "Muggy":
      return emojis.weary;
      break;
    default:
      return { message: "Error occured" };
      break;
  }
}

function metersToKilometers(meters) {
  const km = meters / 1000;
  return km.toFixed(1); // returns in one decimal place.
}

function visibilityCheck(value) {
  const km = parseFloat(metersToKilometers(value));
  // console.log(km);

  if (km >= 0 && km <= 0.5) {
  } else if (km >= 0 && km < 0.5) {
    return "Oh my";
  } else if (km >= 0.5 && km < 3.0) {
    return "Poor";
  } else if (km >= 3.0 && km < 5.0) {
    return "Moderate";
  } else if (km >= 5.0) {
    return "Excellent";
  }
}
function visibilitylottie(comment) {
  switch (comment) {
    case "Oh my":
      return emojis.monkeynosee;
      break;
    case "Poor":
      return emojis.diagonalmouth;
      break;
    case "Moderate":
      return emojis.relieved;
    case "Excellent":
      return emojis.relieved;
    default:
      return { message: "Error occurred" };
      break;
  }
}

function getWindDirection(degrees) {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const index = Math.round(degrees / 45) % 8;
  return directions[index];
}

function sliceDeterminerByHour(dt_string) {
  const dateTime = new Date(dt_string);
  const hours = dateTime.getHours();

  if (hours >= 0 && hours < 3) {
    return 7;
  } else if (hours >= 3 && hours < 6) {
    return 6;
  } else if (hours >= 6 && hours < 9) {
    return 5;
  } else if (hours >= 9 && hours < 12) {
    return 4;
  } else if (hours >= 12 && hours < 15) {
    return 3;
  } else if (hours >= 15 && hours < 18) {
    return 2;
  } else if (hours >= 18 && hours < 21) {
    return 1;
  } else {
    return 7;
  }
  // 00:00 slice 7
  // 03:00 slice 6
  // 06:00 slice 5
  // 09:00 slice 4
  // 12:00 slice 3
  // 15:00 slice 2
  // 18:00 sllice 1
  // 21:00 slice 0
}
//FIXME: Showing time based on the current user timezone.
function formatTime(date, offsetSeconds) {
  const utcOffsetHours = offsetSeconds / 3600; // Convert seconds to hours
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    hourCycle: "h23",
    timeZone: "UTC",
    // timeZone: `UTC${utcOffsetHours >= 0 ? "+" : "-"}${Math.abs(utcOffsetHours)
    //   .toString()
    //   .padStart(2, "0")}:${Math.abs((offsetSeconds % 3600) / 60)
    //   .toString()
    //   .padStart(2, "0")}`,
  }).format(date);

  const [time, period] = formattedDate.split(" ");
  const [hour, minute] = time.split(":");
  const formattedTime = `${hour.padStart(
    2,
    "0"
  )}:${minute}${period.toUpperCase()}`;

  return formattedTime;
}

export default {
  weekDataLogicHandling,
  todayhightlightslogic,
  todayDataLogicHandling,
  selectLottieByDescriptionDay,
  selectLottieByDescriptionNight,
  airpressurelottie,
  visibilitylottie,
  humiditylottie,
  airPressureCheck,
  visibilityCheck,
  humidityCheck,
  getWindDirection,
  metersToKilometers,
  sliceDeterminerByHour,
  formatTime,
};
