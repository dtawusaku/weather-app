import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import clearday from "../assets/lotties/weather-icons/clear-day.json";
import clearnight from "../assets/lotties/weather-icons/clear-night.json";

export default function ThemeButton({ theme }) {
  const Theme = () => {
    if (theme == "dark") {
      return clearnight;
    } else if (theme == "light") {
      return clearday;
    }
  };
  // console.log(theme);
  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      className=" inline-block border-2 border-blue07 dark:border-mb-white rounded-full p-0.5">
      <div>
        {" "}
        <Lottie
          animationData={Theme()}
          style={{ width: "1.5rem" }}
        />
      </div>
    </motion.div>
  );
}
