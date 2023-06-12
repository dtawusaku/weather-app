import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import WeatherBox from "./components/WeatherBox";
import TypeBox from "./components/TypeBox";
import emojis from "./scripts/emojis";

function App() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState([{}]);

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
              Today's Highlights{" "}
              <button
                className="b button p-2 bg-gray-50 mt-2 rounded-lg"
                onClick={handleThemeSwitch}>
                Theme{" "}
              </button>
            </div>
          </div>
          <div className=" grid grid-cols-3 gap-6">
            <TypeBox />
            <TypeBox />
            <TypeBox />
            <TypeBox />
            <TypeBox />
            <TypeBox />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
