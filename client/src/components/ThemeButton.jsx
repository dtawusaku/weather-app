import React, { useState } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import clearday from "../assets/lotties/weather-icons/clear-day.json";
import clearnight from "../assets/lotties/weather-icons/clear-night.json";

export default function ThemeButton({ theme }) {
  const [storeTheme, setstoreTheme] = useState(localStorage.getItem("theme"));

  // Function to toggle the theme
  const toggleTheme = () => {
    setstoreTheme(storeTheme === "dark" ? "dark" : "light");
  };

  // Theme();
  // console.log(theme);
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className=" block border-2 border-blue07 dark:border-mb-white rounded-full p-0.5 lg:p-1">
      <div className="w-full h-full">
        {storeTheme == "dark" && (
          <Lottie
            animationData={clearnight}
            style={{ width: "1.5rem" }}
          />
        )}
        {storeTheme == "light" && (
          <Lottie
            animationData={clearday}
            style={{ width: "1.5rem" }}
          />
        )}
        {!storeTheme && (
          <Lottie
            animationData={clearnight}
            style={{ width: "1.5rem" }}
          />
        )}
      </div>
    </motion.div>
  );
}
