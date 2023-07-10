import React from "react";
import WeatherBox from "../components/WeatherBox";
import { motion, AnimatePresence } from "framer-motion";
import BigWeatherBox from "./BigWeatherBox";
import functions from "../scripts/functions";

export default function Week({ data }) {
  // console.log(data);

  const getDay = (start, end, dataArray) => {
    const [obj] = dataArray.slice(start, end);
    return functions.todayDataLogicHandling(obj);
  };

  console.log();

  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 0.2 }}>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:hidden h-full mx-4 mt-10 mb-4 pb-8 space-y-8">
        {/* Mobile and Tablet */}
        {data.map((x) => (
          <BigWeatherBox weather={functions.todayDataLogicHandling(x)} />
        ))}
        {/* Mobile and Tablet End */}
      </div>
      {/* -------------------------------- */}
      <div className="hidden lg:block mb-[2.4375rem] h-full">
        <div className="flex mt-12">
          {" "}
          <h1 className=" font-semibold text-s4 my-6">Week Highlights</h1>{" "}
        </div>

        <div className=" flex flex-col mt-6">
          {/* Day 1 */}
          <div className="mb-6">
            {" "}
            <h1 className=" font-semibold text-s3 text-mblue-dark dark:text-white">
              {getDay(0, 8, data).longday}
            </h1>
          </div>
          {/* Weather */}
          <div className=" flex space-x-2">
            {" "}
            {data.slice(0, 8).map((data) => (
              <WeatherBox data={functions.todayDataLogicHandling(data)} />
            ))}
          </div>
          {/* Weather Box */}
          {/* Day 2 */}
          <div className="mb-6 mt-12">
            {" "}
            <h1 className=" font-semibold text-s3 text-mblue-dark dark:text-white">
              {getDay(8, 16, data).longday}
            </h1>
          </div>
          {/* Weather */}
          <div className=" flex space-x-2">
            {" "}
            {data.slice(8, 16).map((data) => (
              <WeatherBox data={functions.todayDataLogicHandling(data)} />
            ))}
          </div>
          {/* Weather Box */}
          {/* Day 3 */}
          <div className="mb-6 mt-12">
            {" "}
            <h1 className=" font-semibold text-s3 text-mblue-dark dark:text-white">
              {getDay(16, 24, data).longday}
            </h1>
          </div>
          {/* Weather */}
          <div className=" flex space-x-2">
            {" "}
            {data.slice(16, 24).map((data) => (
              <WeatherBox data={functions.todayDataLogicHandling(data)} />
            ))}
          </div>
          {/* Weather Box */}
          {/* Day 1 */}
          <div className="mb-6 mt-12">
            {" "}
            <h1 className=" font-semibold text-s3 text-mblue-dark dark:text-white">
              {getDay(24, 32, data).longday}
            </h1>
          </div>
          {/* Weather */}
          <div className=" flex space-x-2">
            {" "}
            {data.slice(24, 32).map((data) => (
              <WeatherBox data={functions.todayDataLogicHandling(data)} />
            ))}
          </div>
          {/* Weather Box */} {/* Day 1 */}
          <div className="mb-6 mt-12">
            {" "}
            <h1 className=" font-semibold text-s3 text-mblue-dark dark:text-white">
              {getDay(32, 40, data).longday}
            </h1>
          </div>
          {/* Weather */}
          <div className=" flex space-x-2">
            {" "}
            {data.slice(32, 40).map((data) => (
              <WeatherBox data={functions.todayDataLogicHandling(data)} />
            ))}
          </div>
          {/* Weather Box */}
        </div>
      </div>
    </motion.div>
  );
}
