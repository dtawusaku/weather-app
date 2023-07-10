import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import "../custom.css";
import { motion } from "framer-motion";
import "../scripts/script.js";

export default function WeatherBox({ data }) {
  const [isClicked, setisClicked] = useState(false);
  const [showPill, setShowPill] = useState(false);

  /* Show description */
  const handleMouseEnter = () => {
    setShowPill(true);

    setTimeout(() => {
      setShowPill(false);
    }, 500);
  };
  const handleMouseLeave = () => {
    setShowPill(false);
  };
  /*------------------------*/

  const clicked = (event) => {
    setisClicked("Yes");
    // if (event.type == "click") {
    //   console.log(event.target.classList);
    // }
  };

  // console.log(data);

  return (
    <motion.div
      className=" lg:dark:bg-white-dark weather-box bg-white  flex flex-col text-center rounded-mb lg:rounded-xc justify-between py-3 dark:bg-mb-white border-2 border-blue07 lg:border-white lg:dark:border-white-dark"
      // whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={clicked}>
      {/* <div>Sun</div> */}
      <div className=" font-bold lg:font-medium text-mblue-text lg:text-white-dark lg:dark:text-white">
        {data.time}
      </div>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className=" ml-1 px-2 py-1 md:py-1 md:px-0 md:ml-5">
        <Lottie
          animationData={data.lottie}
          style={{ width: "5rem" }}
        />
      </div>
      <div className=" font-medium text-mblue-text lg:text-white-dark lg:dark:text-white">
        {/* 15&deg; <sup>c </sup> */}
        {data.temp}&deg;
        <sup>c</sup>
      </div>
      {/* :TODO: CHANGE BACKGROUND COLOR */}
      {showPill && (
        <div className=" bg-mb-white text-black dark:text-white  dark:bg-white-dark rounded-md px-1.5 py-0.5 absolute top-1/2 left-0 text-xs  transition ease-in-out">
          {" "}
          {data.description}
        </div>
      )}
    </motion.div>
  );
}
