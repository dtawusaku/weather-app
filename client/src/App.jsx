import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import weather from "./scripts/clouds";
import Typewriter from "typewriter-effect";
import "./custom.css";
import Tab from "./components/Tab";
import Today from "./components/Today";
import Week from "./components/Week";
import { format } from "date-fns"; //For Date formatting

function App() {
  const [location, setLocation] = useState("");
  const [locationData, setlocationData] = useState(null);
  const [weatherData, setweatherData] = useState(null);

  const [theme, setTheme] = useState(localStorage.getItem("theme")); // Theme is stored in local storage.
  const [count, setCount] = useState(0);
  const themeQuery = window.matchMedia("(prefer-color-scheme:dark)");

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((response) => response.json())
      .then((data) => {
        setlocationData(data.location);
        setweatherData(data.weather);
      });
  }, []);

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
    setLocation(event.target[0].value);
  };

  // console.log(window);
  // console.log(locationData);
  console.log(weatherData);

  const dateTimeString = "2023-06-14 21:00:00";
  const dateTime = new Date(dateTimeString);

  const formattedDate = format(dateTime, "EEEE");
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

  /*
  const successCallback = (position) => {
    console.log(position);
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback); */

  // console.log(emojis.eyes);

  return (
    <>
      <div className="flex flex-col dark:text-white bg-main dark:bg-main-dark duration-700 ease-in-out lg:flex-row">
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
        <div className="w-sidebar h-auto bg-white dark:bg-white-dark px-6 pt-[4rem] duration-700 ease-in-out">
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
              {location}

              <div className="flex justify-end pr-4">
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
              </div>
            </div>
          </form>

          {/* SEARCH BAR END */}
          <div>
            <div>
              {" "}
              <Lottie
                animationData={weather.day.overcast}
                style={{ width: "17rem" }}
              />
            </div>
            <h1 className="font-meduim text-s12 font-plus-jakartar -mt-12 ml-2">
              12&deg;<sup className="text-[4.0rem] font-medium">C</sup>
            </h1>
            <p className=" text-s4 ml-2 font-plus-jakartar font-medium">
              {formattedDate ? formattedDate : "Monday"},
              <span className=" text-gray-400">
                {formattedTime ? formattedTime : "16:00"}
              </span>
            </p>
          </div>
          <div className=" w-full h-[0.05rem] bg-[#F2F2F2] mt-4"></div>
          <div className="mt-7 mb-4 font-medium text-s1">
            <div className="mb-3">Mostly Cloudy</div>
            <div>Rain 30%</div>
          </div>
          <div className="pb-6">
            {/* Image Div */}
            <div className="h-[7.6875rem] w-[19rem]">
              <img
                src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGlzb21ldHJpYyUyMGFic3RyYWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                className="w-full h-full object-cover  rounded-lg opacity-75"></img>
              <h1 className=" font-semibold text-lg text-white text-center -translate-y-[4.3rem]">
                {/* Might use set timeout fucntion for this typewriter thing */}
                <Typewriter
                  options={{
                    strings: `${
                      location
                        ? location.state
                          ? locationData.name +
                            ", " +
                            location.state +
                            ", " +
                            locationData.country
                          : "Hi there"
                        : "Hi there"
                    }`,

                    autoStart: true,
                    loop: false,
                    //   delay: 1175,
                  }}
                />
              </h1>
            </div>
          </div>
        </div>
        {/* SideBar End */}

        {/* Main */}
        <div className="h-auto w-full mx-[4rem]">
          <Tab
            data={[
              { name: "Today", component: <Today /> },
              { name: "Week", component: <Week /> },
            ]}
          />
        </div>
      </div>
    </>
  );
}

export default App;
