import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import WeatherBox from "./components/WeatherBox";
import thinkingface from "./assets/lotties/emojis/thinking-face.json";
import Lottie from "lottie-react";
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
  const successCallback = (position) => {
    console.log(position);
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  console.log(weatherData);
  // console.log(emojis.eyes);

  return (
    <>
      <div className="flex dark:text-white bg-main dark:bg-main-dark duration-700 ease-in-out">
        <SideBar />

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
