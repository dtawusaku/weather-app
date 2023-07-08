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

          {/* Monkey no see */}
          {!weatherData && (
            <div>
              <div className=" text-center mt-[10rem]">
                <h1 className=" dark:text-white font-semibold text-dark-white text-s3">
                  Enter Location
                </h1>
              </div>
              <div
                className=" mt-4 "
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <div>
                  {" "}
                  <Lottie
                    animationData={monkey}
                    style={{ width: "6rem" }}
                  />
                </div>
              </div>
            </div>
          )}
          {/* Monkey no see */}
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
              <p className=" text-sm text-gray-400 font-light">
                Enter Location or grant acess to location
              </p>
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
                  component: <Week data={weatherData.list.slice(7)} />,
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
            className="absolute bg-gray-400 mt-2 rounded-full py-1.5 px-1.5 left-[18rem] text-white dark:text-black dark:bg-slate-200"
            onClick={handleThemeSwitch}>
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
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </div>
          {/* Theme switch end */}
          <div className=" dark:bg-white-dark px-8 pt-[4rem] duration-700 ease-in-out ">
            {/* SEARCH BAR */}
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 text-[#060606] dark:text-gray-400 -translate-y-3"
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
                  className="block w-full rounded-full p-4 pl-10 pr-24 text-sm text-[#060606] border border-main h-4 bg-gray-50 dark:text-main  dark:bg-white-dark focus:ring-main focus:border-main"
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
            {!weatherData && <div className=" h-screen"> Details </div>}

            {/* dynamic data */}
            {weatherData && (
              <div className="h-screen">
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
                  <div className="mb-3 capitalize">
                    {" "}
                    {
                      functions.todayDataLogicHandling(
                        weatherData.list.slice(0, 1)[0]
                      ).description
                    }
                  </div>
                  <div>
                    {/* <i className="fa-brands fa-youtube" /> */}
                    {
                      functions.todayDataLogicHandling(
                        weatherData.list.slice(0, 1)[0]
                      ).icon
                    }
                    Rain 30%
                  </div>
                </div>
                <div className="pb-6">
                  {/* Image Div */}
                  <div className="h-[7.6875rem] w-[19rem]">
                    <img
                      src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGlzb21ldHJpYyUyMGFic3RyYWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                      className="w-full h-full object-cover  rounded-lg opacity-75"></img>
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
              {" "}
              Accept Location access or enter a location
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
                { name: "Week", component: <Week /> },
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
