import React from "react";
import WeatherBox from "../components/WeatherBox";
import Lottie from "lottie-react";
import functions from "../scripts/functions.js";
import { format } from "date-fns";
import clouds from "../scripts/clouds";
import { motion, AnimatePresence } from "framer-motion";

export default function Today({ data }) {
  // console.log(data);
  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      exit={{ x: 300, opacity: 0 }}
      className=" pb-4">
      {/* :TODO: ADD SLIDER  FOR TABLETS AND SMALLERS SCREENS*/}
      <div className="mt-7 mb-10 md:my-14 lg:my-[4.125rem] flex gap-4 w-full overflow-y-hidden">
        {data.main.map((data) => (
          <WeatherBox data={functions.todayDataLogicHandling(data)} />
        ))}
      </div>

      <div className="mb-[2.4375rem]">
        <div className="flex">
          {" "}
          <h1 className=" text-bluegradient lg:text-white-dark lg:dark:text-white font-bold  md:font-semibold text-s3 md:text-s4 ml-3 lg:ml-0">
            Current Highlights {}{" "}
          </h1>{" "}
        </div>
      </div>
      {/* ---- */}
      <div className=" grid grid-cols-2 space-y-4 lg:grid-cols-3 lg:gap-3 lg:space-y-2">
        {/* UV Index -  Condition Box */}
        <div className=" blur-[1.5px]  w-[18.3125rem] h-[10.0625rem]  md:w-[35.3125rem] md:h-[15.0625rem]  lg:blur-[2.5px] lg:w-[16.3125rem] lg:h-[14.0625rem]  lg:bg-white lg:dark:bg-white-dark border-2 border-blue07 lg:border-0 flex flex-col rounded-mb lg:rounded-xc px-6 py-5 justify-between col-span-2 lg:col-span-1 ml-7 md:ml-14 md:mb-6 lg:mb-0  lg:ml-0">
          <div className="">
            <div className="flex justify-between">
              <h1 className="lg:font-meduim text-my-gray dark:text-my-gray-dark text-s2 dark:font-semibold">
                UV index
              </h1>
              <div
                id="tooltip"
                className=" hidden lg:block">
                {/* <span id="tooltipText">
                  UV Index measures sun's UV radiation strength, indicating
                  potential harm from exposure.
                </span> */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 -translate-y-1.5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22ZM12.3 7.29C12.5 7.11 12.74 7 13 7C13.27 7 13.5 7.11 13.71 7.29C13.9 7.5 14 7.74 14 8C14 8.27 13.9 8.5 13.71 8.71C13.5 8.9 13.27 9 13 9C12.74 9 12.5 8.9 12.3 8.71C12.11 8.5 12 8.27 12 8C12 7.74 12.11 7.5 12.3 7.29ZM9.8 11.97C9.8 11.97 11.97 10.25 12.76 10.18C13.5 10.12 13.35 10.97 13.28 11.41L13.27 11.47C13.13 12 12.96 12.64 12.79 13.25C12.41 14.64 12.04 16 12.13 16.25C12.23 16.59 12.85 16.16 13.3 15.86C13.36 15.82 13.41 15.78 13.46 15.75C13.46 15.75 13.54 15.67 13.62 15.78C13.64 15.81 13.66 15.84 13.68 15.86C13.77 16 13.82 16.05 13.7 16.13L13.66 16.15C13.44 16.3 12.5 16.96 12.12 17.2C11.71 17.47 10.14 18.37 10.38 16.62C10.59 15.39 10.87 14.33 11.09 13.5C11.5 12 11.68 11.32 10.76 11.91C10.39 12.13 10.17 12.27 10.04 12.36C9.93 12.44 9.92 12.44 9.85 12.31L9.82 12.25L9.77 12.17C9.7 12.07 9.7 12.06 9.8 11.97Z"
                    fill="#7B7B7B"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <p className=" lg:text-s7 font-medium text-black09">
              _ _ <small className="text-s4">unit</small>{" "}
            </p>
          </div>
          <div className=" flex">
            <h1 className=" text-black08 lg:text-s2 font-semibold mt-1 -translate-y-0.5">
              Undefined
            </h1>{" "}
            {/* <div className="ml-2">Lottie</div> */}
          </div>
        </div>
        {/* Condition Box end */}
        {/*  Wind Status - Condition Box */}
        <div
          id="rty"
          className="lg:text-left text-center w-[10.7rem]  h-[9.9rem]  md:w-[16.1rem]  md:h-[12.9rem]    lg:w-[16.3125rem] lg:h-[14.0625rem]  lg:bg-white lg:dark:bg-white-dark border-2 border-blue07 lg:border-0 flex flex-col lg:rounded-xc rounded-mb md:ml-14 lg:ml-0 lg:pl-8 lg:pr-4 lg:pt-5 lg:pb-4 justify-between pl-5  py-4">
          <div className="">
            <div className="flex justify-between">
              <h1 className=" ml-4 lg:ml-0 font-normal lg:font-meduim text-black08 lg:text-my-gray lg:dark:text-my-gray-dark text-s1 lg:text-s2 dark:font-semibold">
                Wind Status
              </h1>
              <div
                id="tooltip"
                className=" hidden lg:block">
                <span id="tooltipText">
                  Wind affects weather patterns, temperature, circulation, and
                  precipitation.
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 20"
                  className=" w-4 h-4 lg:h-5 lg:w-5 lg:-translate-y-1.5 -translate-x-2  lg:-translate-x-0 "
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22ZM12.3 7.29C12.5 7.11 12.74 7 13 7C13.27 7 13.5 7.11 13.71 7.29C13.9 7.5 14 7.74 14 8C14 8.27 13.9 8.5 13.71 8.71C13.5 8.9 13.27 9 13 9C12.74 9 12.5 8.9 12.3 8.71C12.11 8.5 12 8.27 12 8C12 7.74 12.11 7.5 12.3 7.29ZM9.8 11.97C9.8 11.97 11.97 10.25 12.76 10.18C13.5 10.12 13.35 10.97 13.28 11.41L13.27 11.47C13.13 12 12.96 12.64 12.79 13.25C12.41 14.64 12.04 16 12.13 16.25C12.23 16.59 12.85 16.16 13.3 15.86C13.36 15.82 13.41 15.78 13.46 15.75C13.46 15.75 13.54 15.67 13.62 15.78C13.64 15.81 13.66 15.84 13.68 15.86C13.77 16 13.82 16.05 13.7 16.13L13.66 16.15C13.44 16.3 12.5 16.96 12.12 17.2C11.71 17.47 10.14 18.37 10.38 16.62C10.59 15.39 10.87 14.33 11.09 13.5C11.5 12 11.68 11.32 10.76 11.91C10.39 12.13 10.17 12.27 10.04 12.36C9.93 12.44 9.92 12.44 9.85 12.31L9.82 12.25L9.77 12.17C9.7 12.07 9.7 12.06 9.8 11.97Z"
                    fill="#7B7B7B"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <h1 className="  text-black09 lg:text-white-dark lg:dark:text-white text-s6 font-semibold md:text-s6.5 lg:text-s7 lg:font-medium">
              {data.main[0].wind.speed ? data.main[0].wind.speed : " __ "}
              <small className="text-s2 md:text-s3 lg:text-s4">km/h</small>{" "}
            </h1>
          </div>
          <div className=" flex">
            <div className=" md:h-7 md:w-7 lg:h-8 lg:w-8 w-6 h-6 rounded-full border-2 border-my-gray content-center mr-2">
              <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                className="md:h-7 md:w-7 lg:h-8 lg:w-8 w-6 h-6 -translate-x-0.5 -translate-y-0.5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_326_8)">
                  <path
                    d="M29.296 12.6854C31.0732 14.5637 32.0314 17.0711 31.9599 19.656C31.8884 22.2409 30.7929 24.6915 28.9146 26.4687C25.9218 29.3002 20.6706 30.2832 13.1777 29.505C12.761 29.4617 12.3736 29.2705 12.086 28.9659C11.7983 28.6614 11.6295 28.2637 11.6101 27.8452L11.5886 27.3452C11.3069 20.0925 12.5868 15.0723 15.5127 12.3039C17.3911 10.5267 19.8985 9.56848 22.4834 9.64002C25.0682 9.71155 27.5188 10.807 29.296 12.6854ZM24.9376 16.809C24.2541 16.0866 23.3116 15.6652 22.3174 15.6377C21.3232 15.6102 20.3588 15.9788 19.6364 16.6623C18.9139 17.3458 18.4926 18.2884 18.4651 19.2825C18.4376 20.2767 18.8061 21.2411 19.4897 21.9636C20.1732 22.686 21.1157 23.1073 22.1099 23.1349C23.1041 23.1624 24.0685 22.7938 24.7909 22.1103C25.5134 21.4267 25.9347 20.4842 25.9622 19.49C25.9897 18.4958 25.6212 17.5315 24.9376 16.809Z"
                    fill="#8a2be2"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_326_8">
                    <rect
                      width="28"
                      height="28"
                      fill="white"
                      transform="translate(21.3086 0.969421) rotate(46.5852)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h1 className="md:text-s1 lg:text-s2 font-bold lg:mt-1 lg:-translate-y-0.5">
              {data.main[0].wind.speed
                ? functions.getWindDirection(data.main[0].wind.speed)
                : " __ "}
            </h1>{" "}
          </div>
        </div>
        {/* Condition Box end */}

        {/* Sunrise and Sunset - Condition Box */}
        <div className=" lg:text-left  w-[10.7rem]  h-[9.9rem]  md:w-[16.1rem]  md:h-[12.9rem]   lg:w-[16.3125rem] lg:h-[14.0625rem]  lg:bg-white lg:dark:bg-white-dark border-2 border-blue07 lg:border-0 flex flex-col  rounded-mb lg:rounded-xc lg:pl-8 lg:pr-4 lg:pt-5 lg:pb-4 justify-between pl-5  py-4">
          <div className="">
            <div className="flex justify-between">
              <h1 className=" font-normal lg:font-meduim text-black08 lg:text-my-gray lg:dark:text-my-gray-dark text-sm md:text-s1 lg:text-s2 dark:font-semibold">
                Sunrise and Sunset
              </h1>
              <div
                id="tooltip"
                className=" hidden lg:block">
                <span id="tooltipText">Sunrise and Sunset</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22ZM12.3 7.29C12.5 7.11 12.74 7 13 7C13.27 7 13.5 7.11 13.71 7.29C13.9 7.5 14 7.74 14 8C14 8.27 13.9 8.5 13.71 8.71C13.5 8.9 13.27 9 13 9C12.74 9 12.5 8.9 12.3 8.71C12.11 8.5 12 8.27 12 8C12 7.74 12.11 7.5 12.3 7.29ZM9.8 11.97C9.8 11.97 11.97 10.25 12.76 10.18C13.5 10.12 13.35 10.97 13.28 11.41L13.27 11.47C13.13 12 12.96 12.64 12.79 13.25C12.41 14.64 12.04 16 12.13 16.25C12.23 16.59 12.85 16.16 13.3 15.86C13.36 15.82 13.41 15.78 13.46 15.75C13.46 15.75 13.54 15.67 13.62 15.78C13.64 15.81 13.66 15.84 13.68 15.86C13.77 16 13.82 16.05 13.7 16.13L13.66 16.15C13.44 16.3 12.5 16.96 12.12 17.2C11.71 17.47 10.14 18.37 10.38 16.62C10.59 15.39 10.87 14.33 11.09 13.5C11.5 12 11.68 11.32 10.76 11.91C10.39 12.13 10.17 12.27 10.04 12.36C9.93 12.44 9.92 12.44 9.85 12.31L9.82 12.25L9.77 12.17C9.7 12.07 9.7 12.06 9.8 11.97Z"
                    fill="#7B7B7B"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className=" flex flex-col space-y-3 lg:space-y-5 lg:pb-4">
            <div className="flex">
              {" "}
              <div className=" hidden lg:block -mt-4">
                {" "}
                <Lottie
                  animationData={clouds.others.sunrise}
                  style={{ width: "4.0rem" }}
                />
              </div>{" "}
              <div className=" lg:hidden">
                {" "}
                <Lottie
                  animationData={clouds.others.sunrise}
                  style={{ width: "3.0rem" }}
                />
              </div>{" "}
              <h1 className="  text-black09 lg:text-white-dark lg:dark:text-white ml-2 mt-2 lg:ml-0  lg:mt-0">
                {data.sunrise
                  ? functions.formatTime(data.sunrise, 3600)
                  : "00:00PM"}
                &nbsp;AM
              </h1>
            </div>
            <div className=" flex">
              {" "}
              <div className=" hidden lg:block -mt-4">
                {" "}
                <Lottie
                  animationData={clouds.others.sunrise}
                  style={{ width: "4.0rem" }}
                />
              </div>{" "}
              <div className=" lg:hidden">
                {" "}
                <Lottie
                  animationData={clouds.others.sunrise}
                  style={{ width: "3.0rem" }}
                />
              </div>{" "}
              <h1 className="  text-black09 lg:text-white-dark lg:dark:text-white ml-2 mt-2 lg:ml-0  lg:mt-0">
                {data.sunset
                  ? functions.formatTime(data.sunset, 3600)
                  : "00:00PM"}
                &nbsp;PM
              </h1>
            </div>
          </div>
        </div>
        {/* Condition Box end */}

        {/* Humididty - Condition Box */}
        <div className=" lg:text-left text-center w-[10.7rem]  h-[9.9rem]  md:w-[16.1rem]  md:h-[12.9rem]   lg:w-[16.3125rem] lg:h-[14.0625rem]  flex flex-col  rounded-mb lg:rounded-xc md:ml-14 lg:ml-0 lg:pl-8 lg:pr-4 lg:pt-5 lg:pb-4 justify-between pl-5 py-4 lg:bg-white lg:dark:bg-white-dark border-2 border-blue07 lg:border-0">
          <div className="">
            <div className="flex justify-between">
              <h1 className=" ml-6 lg:ml-0 font-normal text-black08 lg:font-meduim lg:text-my-gray lg:dark:text-my-gray-dark text-s1 lg:text-s2 dark:font-semibold">
                Humidity
              </h1>
              <div
                id="tooltip"
                className=" hidden lg:block">
                <span id="tooltipText">
                  Humidity measures air moisture content, with high humidity
                  indicating higher content.
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className=" w-4 h-4 lg:h-5 lg:w-5 lg:-translate-y-1.5 -translate-x-2  lg:-translate-x-0 "
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22ZM12.3 7.29C12.5 7.11 12.74 7 13 7C13.27 7 13.5 7.11 13.71 7.29C13.9 7.5 14 7.74 14 8C14 8.27 13.9 8.5 13.71 8.71C13.5 8.9 13.27 9 13 9C12.74 9 12.5 8.9 12.3 8.71C12.11 8.5 12 8.27 12 8C12 7.74 12.11 7.5 12.3 7.29ZM9.8 11.97C9.8 11.97 11.97 10.25 12.76 10.18C13.5 10.12 13.35 10.97 13.28 11.41L13.27 11.47C13.13 12 12.96 12.64 12.79 13.25C12.41 14.64 12.04 16 12.13 16.25C12.23 16.59 12.85 16.16 13.3 15.86C13.36 15.82 13.41 15.78 13.46 15.75C13.46 15.75 13.54 15.67 13.62 15.78C13.64 15.81 13.66 15.84 13.68 15.86C13.77 16 13.82 16.05 13.7 16.13L13.66 16.15C13.44 16.3 12.5 16.96 12.12 17.2C11.71 17.47 10.14 18.37 10.38 16.62C10.59 15.39 10.87 14.33 11.09 13.5C11.5 12 11.68 11.32 10.76 11.91C10.39 12.13 10.17 12.27 10.04 12.36C9.93 12.44 9.92 12.44 9.85 12.31L9.82 12.25L9.77 12.17C9.7 12.07 9.7 12.06 9.8 11.97Z"
                    fill="#7B7B7B"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <p className=" text-black09 lg:text-white-dark lg:dark:text-white text-s6 font-semibold md:text-s6.5 lg:text-s7 lg:font-medium">
              {data.main[0].main.humidity ? data.main[0].main.humidity : "00"}{" "}
              <sup className="text-s3">%</sup>{" "}
            </p>
          </div>
          <div className=" flex">
            <h1 className=" text-black09 lg:text-white-dark lg:dark:text-white ml-4 lg:ml-0 text-s1 lg:text-s2 font-semibold mt-1 lg:-translate-y-0.5">
              {data.main[0].main.humidity
                ? functions.humidityCheck(data.main[0].main.humidity)
                : "Comment"}
            </h1>{" "}
            <div className="ml-2">
              {data.main[0].main.humidity ? (
                <Lottie
                  animationData={functions.humiditylottie(
                    functions.humidityCheck(data.main[0].main.humidity)
                  )}
                  loop={true}
                  autoplay={true}
                  style={{ width: "1.5rem", transform: "translateY(0.2rem)" }}
                />
              ) : (
                "00"
              )}
            </div>
          </div>
        </div>
        {/* Condition Box end */}
        {/* Visibility - Condition Box */}
        <div className=" lg:text-left text-center  w-[10.7rem]  h-[9.9rem]  md:w-[16.1rem]  md:h-[12.9rem]   lg:w-[16.3125rem] lg:h-[14.0625rem] lg:bg-white lg:dark:bg-white-dark border-2 border-blue07 lg:border-0 flex flex-col  rounded-mb lg:rounded-xc lg:pl-8 lg:pr-4 lg:pt-5 lg:pb-4 justify-between pl-5  py-4">
          <div className="">
            <div className="flex justify-between">
              <h1 className=" ml-7 lg:ml-0 font-normal lg:font-meduim text-black08 lg:text-my-gray lg:dark:text-my-gray-dark text-s1 lg:text-s2 dark:font-semibold">
                Visibility
              </h1>
              <div
                id="tooltip"
                className=" hidden lg:block">
                <span id="tooltipText">
                  Visibility measures distance to landmarks, influenced by
                  atmospheric conditions.
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className=" w-4 h-4 lg:h-5 lg:w-5 lg:-translate-y-1.5 -translate-x-2  lg:-translate-x-0 "
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22ZM12.3 7.29C12.5 7.11 12.74 7 13 7C13.27 7 13.5 7.11 13.71 7.29C13.9 7.5 14 7.74 14 8C14 8.27 13.9 8.5 13.71 8.71C13.5 8.9 13.27 9 13 9C12.74 9 12.5 8.9 12.3 8.71C12.11 8.5 12 8.27 12 8C12 7.74 12.11 7.5 12.3 7.29ZM9.8 11.97C9.8 11.97 11.97 10.25 12.76 10.18C13.5 10.12 13.35 10.97 13.28 11.41L13.27 11.47C13.13 12 12.96 12.64 12.79 13.25C12.41 14.64 12.04 16 12.13 16.25C12.23 16.59 12.85 16.16 13.3 15.86C13.36 15.82 13.41 15.78 13.46 15.75C13.46 15.75 13.54 15.67 13.62 15.78C13.64 15.81 13.66 15.84 13.68 15.86C13.77 16 13.82 16.05 13.7 16.13L13.66 16.15C13.44 16.3 12.5 16.96 12.12 17.2C11.71 17.47 10.14 18.37 10.38 16.62C10.59 15.39 10.87 14.33 11.09 13.5C11.5 12 11.68 11.32 10.76 11.91C10.39 12.13 10.17 12.27 10.04 12.36C9.93 12.44 9.92 12.44 9.85 12.31L9.82 12.25L9.77 12.17C9.7 12.07 9.7 12.06 9.8 11.97Z"
                    fill="#7B7B7B"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <p className="  text-black09 lg:text-white-dark lg:dark:text-white text-s6 md:text-s6.5 lg:text-s7 font-semibold lg:font-medium">
              {data.main[0].visibility
                ? functions.metersToKilometers(data.main[0].visibility)
                : "00"}{" "}
              <small className="text-s3 lg:text-s5">km</small>{" "}
            </p>
          </div>
          <div className=" flex">
            <h1 className=" text-black09 lg:text-white-dark lg:dark:text-white ml-4 lg:ml-0 text-s1 lg:text-s2 font-semibold lg:mt-1 lg:-translate-y-0.5">
              {data.main[0].visibility
                ? functions.visibilityCheck(data.main[0].visibility)
                : "Comment"}{" "}
            </h1>{" "}
            <div className="ml-2">
              {data.main[0].main.humidity ? (
                <Lottie
                  animationData={functions.visibilitylottie(
                    functions.visibilityCheck(data.main[0].visibility)
                  )}
                  style={{ width: "1.5rem", transform: "translateY(0.2rem)" }}
                />
              ) : (
                "00"
              )}
            </div>
          </div>
        </div>
        {/* Condition Box end */}
        {/* Air Pressure - Condition Box */}
        <div className="lg:text-left text-center   w-[10.7rem]  h-[9.9rem]  md:w-[16.1rem]  md:h-[12.9rem]  lg:w-[16.3125rem] lg:h-[14.0625rem]  lg:bg-white lg:dark:bg-white-dark border-2 border-blue07 lg:border-0 flex flex-col  rounded-mb lg:rounded-xc md:ml-14 lg:ml-0 lg:pl-8 lg:pr-4 lg:pt-5 lg:pb-4 justify-between pl-5  py-4 col-span-2 lg:col-span-1">
          <div className="">
            <div className="flex justify-between">
              <h1 className=" ml-4 lg:ml-0 font-normal lg:font-meduim text-black08 lg:text-my-gray lg:dark:text-my-gray-dark text-s1 lg:text-s2 dark:font-semibold">
                Air Pressure
              </h1>
              <div
                id="tooltip"
                className=" hidden lg:block">
                <span id="tooltipText">
                  Air pressure impacts weather patterns and atmosphere
                  stability.
                </span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className=" w-4 h-4 lg:h-5 lg:w-5 lg:-translate-y-1.5 -translate-x-2  lg:-translate-x-0 "
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22ZM12.3 7.29C12.5 7.11 12.74 7 13 7C13.27 7 13.5 7.11 13.71 7.29C13.9 7.5 14 7.74 14 8C14 8.27 13.9 8.5 13.71 8.71C13.5 8.9 13.27 9 13 9C12.74 9 12.5 8.9 12.3 8.71C12.11 8.5 12 8.27 12 8C12 7.74 12.11 7.5 12.3 7.29ZM9.8 11.97C9.8 11.97 11.97 10.25 12.76 10.18C13.5 10.12 13.35 10.97 13.28 11.41L13.27 11.47C13.13 12 12.96 12.64 12.79 13.25C12.41 14.64 12.04 16 12.13 16.25C12.23 16.59 12.85 16.16 13.3 15.86C13.36 15.82 13.41 15.78 13.46 15.75C13.46 15.75 13.54 15.67 13.62 15.78C13.64 15.81 13.66 15.84 13.68 15.86C13.77 16 13.82 16.05 13.7 16.13L13.66 16.15C13.44 16.3 12.5 16.96 12.12 17.2C11.71 17.47 10.14 18.37 10.38 16.62C10.59 15.39 10.87 14.33 11.09 13.5C11.5 12 11.68 11.32 10.76 11.91C10.39 12.13 10.17 12.27 10.04 12.36C9.93 12.44 9.92 12.44 9.85 12.31L9.82 12.25L9.77 12.17C9.7 12.07 9.7 12.06 9.8 11.97Z"
                    fill="#7B7B7B"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <p className="  text-black09 lg:text-white-dark lg:dark:text-white md:text-s6.5 lg:text-s7 lg:font-medium font-semibold text-s6">
              {data.main[0].main.pressure ? data.main[0].main.pressure : "10"}{" "}
              <small className="lg:text-s4 text-s3">hPa</small>{" "}
            </p>
          </div>
          <div className=" flex">
            <h1 className=" ml-4 lg:ml-0 text-s2 lg:font-semibold mt-1 -translate-y-0.5">
              {functions.airPressureCheck(data.main[0].main.pressure)}
            </h1>{" "}
            <div className="ml-2">
              {data.main[0].main.pressure ? (
                <Lottie
                  animationData={functions.airpressurelottie(
                    functions.airPressureCheck(data.main[0].main.pressure)
                  )}
                  style={{ width: "1.5rem", transform: "translateY(0.2rem)" }}
                />
              ) : (
                "00"
              )}
            </div>
          </div>
        </div>
        {/* Condition Box end */}
      </div>
    </motion.div>
  );
}
