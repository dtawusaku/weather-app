import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import monkey from "../src/assets/lotties/emojis/monkeynosee.json";
import "./custom.css";
import Tab from "./components/Tab";
import Today from "./components/Today";
import Week from "./components/Week";
import { format } from "date-fns"; //For Date formatting
import "./scripts/script";
import functions from "./scripts/functions";
import TypeWriterContainer from "./components/TypeWriterContainer";
import ThemeButton from "./components/ThemeButton";
import whiteLogo from "./assets/png/Logodark.png";
import darkLogo from "./assets/png/Logowhite.png";

function App() {
  const [userLocation, setUserLocation] = useState(null); // User's Location
  const [location, setLocation] = useState(null); // Location from input
  const [locationData, setlocationData] = useState(null); // Locaton data gotten from API
  const [weatherData, setweatherData] = useState(null); // wetaher data gotten from API
  const [temperature, setTemperature] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme")); // Theme is stored in local storage.
  const themeQuery = window.matchMedia("(prefer-color-scheme:dark)"); //For theme FIXME: Why are you still here?

  /*
   *  ACCESSING USER LOCATION
   *
   */
  useEffect(() => {
    const successCallback = (position) => {
      setUserLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
      // console.log(userLocation); //Output location
    };

    const errorCallback = (error) => {
      setUserLocation(null);
    };

    //Grants and later denies or denies and later grants
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    } else {
      setUserLocation(null);
    }
  }, []);

  useEffect(() => {
    // console.log(userLocation);
  }, [userLocation]);

  /*
   *  NOTE: THEME SETTINGS
   *
   */
  useEffect(() => {
    switch (theme) {
      case "dark":
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        break;
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };
  const handleSetLocation = (event) => {
    setLocation(event.target.value);
  };
  // IF YOU CAN DO WITHOUT POST
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target[0].value);
    setLocation(event.target[0].value);
  };

  //TODO: Add temperature degree as dependencies
  useEffect(() => {
    if (location) {
      // fetch(`http://localhost:3000?location=${location}`) // Dev
      fetch(
        `https://weather-app-backend-czwq.onrender.com/api/weather?location=${location}`
      ) //Prod
        .then((response) => response.json())
        .then((data) => {
          setlocationData(data.location);
          setweatherData(data.weather);
        });
    } else if (userLocation) {
      const { lat, lon } = userLocation;
      // fetch(`http://localhost:3000?&lat=${lat}&lon=${lon}`) //Dev
      fetch(
        `https://weather-app-backend-czwq.onrender.com/api/weather?&lat=${lat}&lon=${lon}`
      ) //Prod
        .then((response) => response.json())
        .then((data) => {
          setlocationData(data.location);
          setweatherData(data.weather);
        });
    }
  }, [location, userLocation]);

  const dateTime = new Date();
  const formattedDate = format(dateTime, "EEEE, HH:mm"); // Saturday, 16:23
  const formattedTime = format(dateTime, "HH:mm");

  /*
  const formattedDate = format(dateTime, "MMMM dd, yyyy"); //June 14, 2023
  const formattedTime = format(dateTime, "HH:mm:ss"); //00:00:00
  */

  /* 
  WEATHER DATA GROUPING KINI

  fullcityname = weatherData.city.name + ", " + weatherData.city.country

  today = weatherData.list.slice(0,7);
  week =  today = weatherData.list.slice(8,39);
  
  ------------------------------------
const date = new Date(); // Assuming you have a Date object

const options = {
  weekday: 'short' // Specify 'short' for abbreviated day of the week
};

const formattedDay = date.toLocaleString('en-US', options);

console.log(formattedDay); // Output: Mon (if today is Monday)
---------------------------------------



  */

  // console.log(emojis.eyes);
  // console.log(window);
  // console.log(locationData);
  // console.log(weatherData);
  // console.log(userLocation);

  return (
    <>
      <div className=" bg-[#BED7F3] lg:hidden container relative h-full dark:bg-mblue-dark transition-all">
        <div className=" bg-mblue dark:bg-mblue-dark mscreen transition-all">
          {/* Search input */}
          <div className=" mt-8 mx-6">
            <div className="relative">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full py-2.5 pl-10 pr-5 rounded-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white "
                  placeholder="Search for a city, country or state"></input>
                {/* <button
                  type="submit"
                  className=" bg-blue-500 block">
                  {" "}
                  Submit
                </button> */}
              </form>
            </div>
          </div>
          {/* Searh cinput end */}

          {/* Switch Theme Button */}
          {theme && (
            <div
              onClick={handleThemeSwitch}
              className=" absolute left-[19.9rem] top-[8rem] md:left-[41rem] md:top-[8rem]">
              <ThemeButton theme={theme} />
            </div>
          )}
          {/* Switch Theme Button End  */}

          {!weatherData && (
            <div>
              <div className=" w-[15rem] h-[15rem] ml-[6.5rem] md:w-[20rem] md:h-[20rem] md:ml-[15rem] mt-[10rem] hidden dark:block">
                <img
                  src={darkLogo}
                  alt="Logo"
                />
              </div>
              <div className=" w-[15rem] h-[15rem] ml-[6.5rem] md:w-[20rem] md:h-[20rem] md:ml-[15rem] mt-[10rem] dark:hidden block">
                <img
                  src={whiteLogo}
                  alt="Logo"
                />
              </div>
              <div className=" text-center mt-10">
                <h1 className=" dark:text-white text-dark-white text-s2">
                  Enter a location
                </h1>
              </div>
            </div>
          )}

          {/* Weather Details */}
          {weatherData && (
            <div>
              <div className=" flex-row mt-[5rem]">
                {/* location */}
                <div>
                  {" "}
                  <h1 className=" font-bold capitalize text-s4 md:text-s5 text-center text-mblue-text ">
                    {locationData.name}
                  </h1>
                </div>
                {/* Wether */}
                <div className="flex-row md:-mt-2">
                  <div>
                    {" "}
                    <h1 className=" font-bold text-s9 md:text-s12 ml-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-bluegradient from-50% to-white to-90% dark:bg-gradient-to-b dark:from-white dark:from-50%  dark:to-bluegradient dark:to-90%">
                      {
                        functions.todayDataLogicHandling(
                          weatherData.list.slice(0, 1)[0]
                        ).temp
                      }
                      <sup className=" text-s8 text-mblue-textdeg">&deg;</sup>
                    </h1>
                  </div>
                  <div className=" md:hidden">
                    <div
                      className=" -mt-20 -mb-6"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}>
                      <div>
                        {" "}
                        <Lottie
                          animationData={
                            functions.todayDataLogicHandling(
                              weatherData.list.slice(0, 1)[0]
                            ).lottie
                          }
                          style={{ width: "17rem" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" hidden md:block">
                    <div
                      className=" -mt-24 -mb-8"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}>
                      <div>
                        {" "}
                        <Lottie
                          animationData={
                            functions.todayDataLogicHandling(
                              weatherData.list.slice(0, 1)[0]
                            ).lottie
                          }
                          style={{ width: "20rem" }}
                        />
                      </div>
                    </div>
                  </div>
                  {/* datetime */}
                  <div className="">
                    <h1 className=" font-semibold capitalize text-center text-s4 md:text-s5 text-mblue-text">
                      {
                        functions.todayDataLogicHandling(
                          weatherData.list.slice(0, 1)[0]
                        ).description
                      }
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Wether End */}
        </div>
        {/* Main  */}
        <div className=" h-full rounded-tl-[2rem] rounded-tr-[2rem] bg-[#FAFAFA] py-4 px-3">
          {!weatherData && (
            <div className=" text-s2 text-center font-medium my-12">
              <p>No Data Available</p>
              {/* Monkey no see */}
              <div
                className=" mt-2"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <div>
                  {" "}
                  <Lottie
                    animationData={monkey}
                    style={{ width: "3rem" }}
                  />
                </div>
              </div>
              {/* Monkey no see */}
            </div>
          )}
          {/* dynamic data mobile */}
          {weatherData && (
            <Tab
              data={[
                {
                  name: "Today",
                  component: (
                    <Today
                      data={{
                        main: weatherData.list.slice(
                          0,
                          functions.sliceDeterminerByHour(
                            weatherData.list[0].dt_txt - 1
                          )
                        ),
                        sunrise: weatherData.city.sunrise,
                        sunset: weatherData.city.sunset,
                        timezone: weatherData.city.timezone,
                      }}
                    />
                  ),
                },
                {
                  name: "Week",
                  component: (
                    <Week
                      data={weatherData.list.slice(
                        functions.sliceDeterminerByHour(
                          weatherData.list[0].dt_txt - 1
                        )
                      )}
                    />
                  ),
                },
              ]}
            />
          )}
          {/* dynamic data mobile end */}
        </div>
        {/* Main End */}

        {/* Scroll Testing */}
        {/* <div class="container">
          <div
            id="div1"
            class="scrollable-section">
            Divvvv
          </div>
          <div
            id="div2"
            class="scrollable-section">
            Divvvv
          </div>
          <div
            id="div2"
            class="scrollable-section">
            Apple
          </div>
        </div> */}
        {/* Scroll Testing End */}
      </div>

      {/* ----- */}
      <div className=" hidden lg:block">
        {/*--------------  SideBar --------- */}
        <aside className="h-screen fixed top-0 left-0 w-sidebar  bg-white m-0 duration-700 transition ease-in-out dark:text-white">
          {/* SideBar */}
          {/* Theme switch */}
          <div
            onClick={handleThemeSwitch}
            className=" absolute left-[19.9rem] top-[8rem] md:left-[41rem] md:top-[8rem] lg:left-[20rem] lg:top-[8rem]">
            <ThemeButton theme={theme} />
          </div>
          {/* Theme switch end */}
          <div className=" dark:bg-white-dark px-8 pt-[2rem] duration-700 ease-in-out ">
            {/* SEARCH BAR */}
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 text-[#060606] dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <input
                  type="search"
                  className="block w-full rounded-full p-4 pl-10 pr-24 text-sm text-[#060606] border border-mblue-dark dark:border-gray-50 h-4 bg-gray-50 dark:text-main  dark:bg-white-dark focus:ring-main focus:border-main"
                  placeholder="search for places.."
                  name="location"
                  onKeyDown={(event) => {
                    if (event.code == "Enter") {
                      handleSetLocation(event);
                    }
                  }}></input>

                {/* <div className="flex justify-end pr-4">
                  <button
                    type="submit"
                    class="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>

                  <div className=" w-6 h-6 rounded-full mr-2 font-bold text-xs text-center bg-[#F7F6F9] text-black dark:text-white dark:bg-[#16131B] cursor-pointer">
                    <h1 className="">NG</h1>
                  </div>
                  <div className=" w-6 h-6 rounded-full font-bold text-xs text-center dark:bg-[#818181] bg-[#9D9D9D] text-[#F1F1F1] cursor-pointer">
                    <h1 className="">EV</h1>
                  </div>
                </div> */}
              </div>
            </form>

            {/* SEARCH BAR END */}

            {/* Content */}

            {/* static data */}
            {!weatherData && (
              <div className=" h-screen">
                <div className=" pt-[17rem]">
                  <h1 className=" text-center font-bold text-s4 dark:text-white text-mblue-dark">
                    Side Bar
                  </h1>
                </div>
              </div>
            )}

            {/* dynamic data */}
            {weatherData && (
              <div className="h-screen mt-10">
                <div>
                  <div>
                    {" "}
                    <Lottie
                      animationData={
                        functions.todayDataLogicHandling(
                          weatherData.list.slice(0, 1)[0]
                        ).lottie
                      }
                      style={{ width: "17rem" }}
                    />
                  </div>
                  <h1 className="font-meduim text-s11  -mt-12 ml-2">
                    {
                      functions.todayDataLogicHandling(
                        weatherData.list.slice(0, 1)[0]
                      ).temp
                    }
                    &deg;<sup className="text-[2.5rem] font-medium">C</sup>
                  </h1>
                  <p className=" text-s4 ml-2 font-plus-jakartar font-medium">
                    {formattedDate ? format(dateTime, "EEEE") : "Monday"}{" "}
                    ,&nbsp;
                    <span className=" text-gray-400">
                      {format(dateTime, "HH:mm")}
                    </span>
                  </p>
                </div>
                <div className=" w-full h-[0.05rem] bg-[#F2F2F2] mt-4"></div>
                <div className="mt-7 mb-4 font-medium text-s1">
                  <div className="mb-3 capitalize flex">
                    {" "}
                    <div className=" mt-4 ">
                      <svg
                        width="24"
                        height="22"
                        viewBox="0 0 24 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className=" -translate-y-4 w-7 h-7">
                        <path
                          d="M6.60024 16.8556C5.52567 16.8543 4.49252 16.4916 3.71337 15.8419C2.93422 15.1923 2.46835 14.3051 2.41162 13.3631C2.35489 12.4211 2.71162 11.4958 3.4084 10.7776C4.10518 10.0595 5.08901 9.60308 6.15744 9.50238C5.84284 8.4193 6.03123 7.27087 6.68115 6.30973C7.33108 5.34858 8.38931 4.65346 9.62304 4.37727C10.8568 4.10109 12.165 4.26647 13.2598 4.83703C14.3546 5.4076 15.1464 6.3366 15.461 7.41968C16.1948 7.32999 16.9417 7.3738 17.6553 7.54838C18.3689 7.72296 19.034 8.02457 19.6092 8.43447C20.1843 8.84436 20.6573 9.35376 20.9985 9.93098C21.3398 10.5082 21.5422 11.1409 21.593 11.7897C21.6439 12.4385 21.5421 13.0896 21.294 13.7024C21.0459 14.3152 20.6569 14.8767 20.1511 15.3518C19.6452 15.827 19.0335 16.2057 18.3538 16.4644C17.6741 16.7231 16.9411 16.8562 16.2002 16.8556H6.60024Z"
                          fill="#8B9DCC"
                        />
                      </svg>
                    </div>
                    <div className=" ml-2">
                      {" "}
                      {
                        functions.todayDataLogicHandling(
                          weatherData.list.slice(0, 1)[0]
                        ).description
                      }
                    </div>
                  </div>
                  <div className=" flex ml-1">
                    <div className=" mt-2">
                      <svg
                        width="19"
                        height="16"
                        viewBox="0 0 19 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className=" -translate-y-4 w-6 h-6 ">
                        <path
                          d="M7.51262 6.06133H1.05326C0.914407 6.06133 0.776997 6.03613 0.648789 5.9872C0.520582 5.93826 0.404171 5.86655 0.30628 5.77618C0.208388 5.68581 0.130808 5.57856 0.0782496 5.46062C0.0256909 5.34268 -0.000817291 5.21637 1.9196e-05 5.08896C-0.000817291 4.96154 0.0256909 4.83523 0.0782496 4.71729C0.130808 4.59935 0.208388 4.49209 0.30628 4.40172C0.404171 4.31135 0.520582 4.23963 0.648789 4.1907C0.776997 4.14176 0.914407 4.11658 1.05326 4.11658H7.51262C7.82621 4.11659 8.12711 4.00266 8.34945 3.79972C8.57179 3.59679 8.69756 3.32133 8.69924 3.03357C8.69924 2.74479 8.57414 2.46786 8.35162 2.26367C8.1291 2.05947 7.82731 1.94475 7.51262 1.94475H5.55841C5.27737 1.94475 5.00782 1.8423 4.8091 1.65994C4.61038 1.47759 4.49865 1.23027 4.49865 0.972382C4.49865 0.714492 4.61038 0.46716 4.8091 0.284804C5.00782 0.102449 5.27737 0 5.55841 0L7.51262 0C8.38828 0.00154232 9.22761 0.321834 9.84621 0.890573C10.4648 1.45931 10.8122 2.23002 10.8122 3.03357C10.8106 3.83611 10.4623 4.60534 9.84388 5.17282C9.22547 5.7403 8.38718 6.05979 7.51262 6.06133V6.06133Z"
                          fill="#B0BBD8"
                        />
                        <path
                          d="M15.2539 8.86248H1.05326C0.914407 8.86248 0.776997 8.83729 0.648789 8.78835C0.520582 8.73942 0.404171 8.6677 0.30628 8.57733C0.208388 8.48696 0.130808 8.37971 0.0782496 8.26177C0.0256909 8.14383 -0.000817291 8.01752 1.9196e-05 7.8901C-0.000817291 7.76269 0.0256909 7.63638 0.0782496 7.51844C0.130808 7.4005 0.208388 7.29325 0.30628 7.20288C0.404171 7.11251 0.520582 7.04079 0.648789 6.99186C0.776997 6.94292 0.914407 6.91773 1.05326 6.91773H15.2539C15.6045 6.91774 15.9407 6.79032 16.1892 6.56336C16.4377 6.3364 16.5782 6.02837 16.5799 5.70663C16.5782 5.38489 16.4377 5.07686 16.1892 4.8499C15.9407 4.62294 15.6045 4.49552 15.2539 4.49553H13.4391C13.158 4.49553 12.8885 4.39308 12.6898 4.21072C12.491 4.02837 12.3795 3.78104 12.3795 3.52315C12.3795 3.39545 12.4068 3.26902 12.46 3.15104C12.5133 3.03307 12.5914 2.92588 12.6898 2.83559C12.7882 2.74529 12.905 2.67366 13.0335 2.62479C13.1621 2.57592 13.2999 2.55078 13.4391 2.55078H15.2855C15.7371 2.55078 16.1843 2.63241 16.6016 2.791C17.0188 2.9496 17.3979 3.18205 17.7173 3.4751C18.0366 3.76815 18.29 4.11605 18.4629 4.49894C18.6357 4.88182 18.7247 5.2922 18.7247 5.70663C18.7247 6.12352 18.6346 6.53629 18.4598 6.92108C18.285 7.30588 18.0288 7.65507 17.7061 7.9485C17.3834 8.24193 17.0005 8.47379 16.5796 8.63066C16.1587 8.78753 15.7082 8.86632 15.2539 8.86248V8.86248Z"
                          fill="#B0BBD8"
                        />
                        <path
                          d="M9.52415 15.8495H6.84015C6.55911 15.8495 6.28956 15.7471 6.09084 15.5647C5.89212 15.3824 5.7804 15.135 5.7804 14.8772C5.78039 14.7497 5.80793 14.6236 5.86126 14.5059C5.91459 14.3883 5.99267 14.2815 6.09115 14.1916C6.18963 14.1018 6.30653 14.0307 6.43505 13.9825C6.56358 13.9343 6.70129 13.9098 6.84015 13.9106H9.52415C9.84784 13.9091 10.1576 13.79 10.3859 13.5794C10.6142 13.3688 10.7424 13.0839 10.7424 12.7868C10.7424 12.4903 10.6141 12.206 10.3856 11.9963C10.1571 11.7867 9.84725 11.6689 9.52415 11.6689H1.05326C0.773911 11.6689 0.505981 11.5671 0.308448 11.3858C0.110916 11.2045 1.9196e-05 10.9587 1.9196e-05 10.7024C-0.000817292 10.5749 0.0256909 10.4486 0.0782496 10.3307C0.130808 10.2127 0.208388 10.1055 0.30628 10.0151C0.404171 9.92476 0.520582 9.85304 0.648789 9.8041C0.776997 9.75517 0.914407 9.72998 1.05326 9.72998H9.52415C10.4082 9.72998 11.2562 10.0519 11.8819 10.625C12.5076 11.1981 12.86 11.9756 12.8617 12.7868C12.86 13.5986 12.5078 14.3768 11.8822 14.9508C11.2567 15.5248 10.4088 15.848 9.52415 15.8495V15.8495Z"
                          fill="#B0BBD8"
                        />
                      </svg>
                    </div>
                    <div className=" ml-2 -mt-3">
                      Wind -{" "}
                      {
                        functions.todayDataLogicHandling(
                          weatherData.list.slice(0, 1)[0]
                        ).windspeed
                      }
                      km/hr
                    </div>
                  </div>
                </div>
                <div className="pb-6">
                  {/* Image Div */}
                  <div className="h-[7.6875rem] w-[19.8rem]">
                    <img
                      src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGlzb21ldHJpYyUyMGFic3RyYWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                      className="w-full h-full object-cover  rounded-[1rem] opacity-75"></img>
                    <h1 className=" font-semibold text-lg text-white text-center -translate-y-[4.3rem]">
                      {weatherData && (
                        <TypeWriterContainer location={locationData} />
                      )}
                    </h1>
                  </div>
                </div>
              </div>
            )}
            {/* dynamic data ends */}

            {/* Content End */}
          </div>
          {/* SideBar End */}
        </aside>
        {/*--------------- Side Bar End ----------------*/}

        {/* Main */}
        <div className=" bg-main ml-[23.8rem] pl-10 dark:text-white dark:bg-main-dark duration-700 ease-in-out">
          {!weatherData && (
            <div className=" h-screen">
              <div className=" w-[20rem] h-[20rem] ml-[25rem] pt-[15rem] hidden dark:block">
                <img
                  src={darkLogo}
                  alt="Logo"
                />
              </div>
              <div className=" w-[20rem] h-[20rem] ml-[25rem] pt-[15rem] dark:hidden block">
                <img
                  src={whiteLogo}
                  alt="Logo"
                />
              </div>
              <div className="ml-[29rem] mt-[6rem]">
                <h1 className=" font-bold text-s3 dark:text-white text-white-dark">
                  Enter a Location
                </h1>
              </div>
            </div>
          )}

          {weatherData && (
            <Tab
              data={[
                {
                  name: "Today",
                  component: (
                    <Today
                      data={{
                        main: weatherData.list.slice(
                          0,
                          functions.sliceDeterminerByHour(
                            weatherData.list[0].dt_txt
                          )
                        ),
                        sunrise: weatherData.city.sunrise,
                        sunset: weatherData.city.sunset,
                        timezone: weatherData.city.timezone,
                      }}
                    />
                  ),
                },
                {
                  name: "Week",
                  component: (
                    <Week
                      data={weatherData.list.slice(
                        functions.sliceDeterminerByHour(
                          weatherData.list[0].dt_txt - 1
                        )
                      )}
                    />
                  ),
                },
              ]}
            />
          )}
        </div>
        {/* Main end */}
      </div>
    </>
  );
}

export default App;
