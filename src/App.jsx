import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Box1 from "./components/Box1";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import WeatherBox from "./components/WeatherBox";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme")); // Theme is stored in local storage.
  const [count, setCount] = useState(0);
  const themeQuery = window.matchMedia("(prefer-color-scheme:dark)");

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

  return (
    <>
      <div className="flex dark:text-white">
        <SideBar />

        {/* Main */}
        <div className="h-screen w-screen max-w-screen-xl  px-[4rem]">
          <NavBar />

          <div>
            <WeatherBox />
          </div>
          <div className="  bg-red-700 w-44 h-44">
            <button
              className="b button p-2 bg-red-400 mt-2 rounded-lg"
              onClick={handleThemeSwitch}>
              Theme{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
