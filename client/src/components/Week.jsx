import React from "react";
import WeatherBox from "../components/WeatherBox";
import Lottie from "lottie-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Week() {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      transition={{ duration: 0.2 }}>
      <div className="my-[4.125rem] flex gap-4 hover:overflow-auto w-full overflow-hidden">
        {/* <WeatherBox />
        <WeatherBox />
        <WeatherBox />
        <WeatherBox /> */}
      </div>
      <div className="mb-[2.4375rem]">
        <div className="flex">
          {" "}
          <h1 className=" font-semibold text-s4">Week's Highlights</h1>{" "}
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
                hu
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
    </motion.div>
  );
}
