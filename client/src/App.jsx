import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import WeatherBox from "./components/WeatherBox";
import thinkingface from "./assets/lotties/emojis/thinking-face.json";
import Lottie from "lottie-react";
import weather from "./scripts/clouds";
import Typewriter from "typewriter-effect";
import SearchBar from "./components/SearchBar";
import "./custom.css";

function App() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const [theme, setTheme] = useState(localStorage.getItem("theme")); // Theme is stored in local storage.
  const [count, setCount] = useState(0);
  const themeQuery = window.matchMedia("(prefer-color-scheme:dark)");

  useEffect(() => {
    fetch("http://localhost:3000/weather")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setWeatherData(data);
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
  // console.log(window);
  /*
  const successCallback = (position) => {
    console.log(position);
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback); */
  console.log(weatherData);
  // console.log(emojis.eyes);

  return (
    <>
      <div className="flex dark:text-white bg-main dark:bg-main-dark duration-700 ease-in-out">
        {/* SideBar */}
        <div className="w-sidebar h-auto bg-white dark:bg-white-dark px-6 pt-[4rem] duration-700 ease-in-out">
          {/* SEARCH BAR */}
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
              onKeyUp={(event) => {
                if (event.code == "Enter") {
                  console.log(event.target.value);
                }
              }}></input>
            {location}

            <div className="flex justify-end pr-4">
              <div className=" w-6 h-6 rounded-full mr-2 font-bold text-xs text-center bg-[#F7F6F9] text-black dark:text-white dark:bg-[#16131B] cursor-pointer">
                <h1 className=" translate-y-1">NG</h1>
              </div>
              <div className=" w-6 h-6 rounded-full font-bold text-xs text-center dark:bg-[#818181] bg-[#9D9D9D] text-[#F1F1F1] cursor-pointer">
                <h1 className=" translate-y-1">EV</h1>
              </div>
            </div>
          </div>
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
              Monday, <span className=" text-gray-400">16:00</span>
            </p>
          </div>
          <div className=" w-full h-[0.05rem] bg-[#F2F2F2] mt-4"></div>
          <div>
            <div>Mostly CLoudy</div>
            <div>Rain 30%</div>
          </div>
          <div className="pb-6 mt-[13rem]">
            {/* Image Div */}
            <div className="h-[7.6875rem] w-[19rem]">
              <img
                src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGlzb21ldHJpYyUyMGFic3RyYWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                className="w-full h-full object-cover  rounded-lg opacity-75"></img>
              <h1 className=" font-semibold text-lg text-white text-center -translate-y-[4.3rem]">
                <Typewriter
                  options={{
                    strings: "New York, NY, USA",
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
        <div className="h-auto w-full max-w-screen-xl mx-[4rem]">
          <NavBar />

          <div className="my-[4.125rem] flex gap-4 hover:overflow-auto w-full overflow-hidden">
            <WeatherBox />
            <WeatherBox />
            <WeatherBox />
            <WeatherBox />
          </div>
          <div className="mb-[2.4375rem]">
            <div className="flex">
              {" "}
              <h1 className=" font-semibold text-s4">
                Today's Highlights
              </h1>{" "}
              <button
                className="b button p-2 bg-gray-50 mt-2 rounded-lg"
                onClick={handleThemeSwitch}>
                Theme{" "}
              </button>
            </div>
          </div>
          <div className=" grid grid-cols-3 gap-6">
            {/* Condition Box */}
            <div className=" w-[18.3125rem] h-[16.0625rem] bg-white dark:bg-white-dark flex flex-col rounded-xc">
              <div className="">
                <div className="flex justify-between">
                  <h1 className="p text-2xl font-semibold">Wind Status</h1>
                  <h3>Tooltip</h3>
                </div>
              </div>
              <div>Image</div>
              <div>West North</div>
            </div>
            {/* Condition Box end */}
            {/* Condition Box */}
            <div className=" w-[18.3125rem] h-[16.0625rem] bg-white dark:bg-white-dark flex flex-col rounded-xc">
              <div className="">
                <div className="flex justify-between">
                  <h1 className="p text-2xl font-light text-s3">Wind Status</h1>
                </div>
              </div>
              <div>70KM</div>
              <div>West North</div>
            </div>
            {/* Condition Box end */}
            {/* Condition Box */}
            <div className=" w-[18.3125rem] h-[16.0625rem] bg-white dark:bg-white-dark flex flex-col rounded-xc">
              <div className="">
                <div className="flex justify-between">
                  <h1 className="font-semibold">Wind Status</h1>
                  <div id="tooltip">
                    <span id="tooltipText">Hi there</span>
                    <Lottie
                      animationData={thinkingface}
                      style={{ width: "2rem" }}
                      loop={false}
                    />
                  </div>
                </div>
              </div>
              <div>Image</div>
              <div>West North</div>
            </div>
            {/* Condition Box end */}
            {/* Condition Box */}
            <div className=" w-[18.3125rem] h-[16.0625rem] bg-white dark:bg-white-dark flex flex-col rounded-xc">
              <div className="">
                <div className="flex justify-between">
                  <h1 className="p text-2xl font-semibold">Wind Status</h1>
                  <h3>Tooltip</h3>
                </div>
              </div>
              <div>Image</div>
              <div>West North</div>
            </div>
            {/* Condition Box end */}
            {/* Condition Box */}
            <div className=" w-[18.3125rem] h-[16.0625rem] bg-white dark:bg-white-dark flex flex-col rounded-xc">
              <div className="">
                <div className="flex justify-between">
                  <h1 className="p text-2xl font-semibold">Wind Status</h1>
                  <h3>Tooltip</h3>
                </div>
              </div>
              <div>Image</div>
              <div>West North</div>
            </div>
            {/* Condition Box end */}
            {/* Condition Box */}
            <div className=" w-[18.3125rem] h-[16.0625rem] bg-white dark:bg-white-dark flex flex-col rounded-xc">
              <div className="">
                <div className="flex justify-between">
                  <h1 className="p text-2xl font-semibold">Wind Status</h1>
                  <h3>Tooltip</h3>
                </div>
              </div>
              <div>Image</div>
              <div>West North</div>
            </div>
            {/* Condition Box end */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
