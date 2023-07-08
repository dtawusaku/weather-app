import React from "react";
import WeatherBox from "../components/WeatherBox";
import Lottie from "lottie-react";
import { motion, AnimatePresence } from "framer-motion";
import BigWeatherBox from "./BigWeatherBox";
import functions from "../scripts/functions";

export default function Week({ data }) {
  // console.log(data);
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 0.2 }}>
      <div className=" hidden my-[4.125rem] lg:flex gap-4 hover:overflow-auto w-full overflow-hidden">
        {/* <WeatherBox />
        <WeatherBox />
        <WeatherBox />
        <WeatherBox /> */}
        ee
      </div>
      <div className="hidden lg:block mb-[2.4375rem]">
        <div className="flex">
          {" "}
          <h1 className=" font-semibold text-s4">Week's Highlights</h1>{" "}
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:hidden h-full mx-4 mt-10 mb-4 pb-8 space-y-8">
        {/* Mobile and Tablet */}
        {data.map((x) => (
          <BigWeatherBox weather={functions.todayDataLogicHandling(x)} />
        ))}
        {/* Mobile and Tablet End */}
      </div>
    </motion.div>
  );
}
