import React from "react";
import WeatherBox from "../components/WeatherBox";
import Lottie from "lottie-react";
import functions from "../scripts/functions.js";
import { format } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";

export default function Today({ data }) {
  // console.log(data);

  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}>
      <div className="my-[4.125rem] flex gap-4 hover:overflow-auto w-full overflow-hidden">
        {data.map((data) => (
          <WeatherBox data={functions.todayDataLogicHandling(data)} />
        ))}
      </div>
      <div className="mb-[2.4375rem]">
        <div className="flex">
          {" "}
          <h1 className=" font-semibold text-s4">
            Current Highlights {}{" "}
          </h1>{" "}
        </div>
      </div>
      <div className=" grid grid-cols-3 gap-3">
        {/* Condition Box */}
        <div className=" w-[16.3125rem] h-[14.0625rem] bg-white dark:bg-white-dark flex flex-col rounded-xc px-6 py-5 justify-between">
          <div className="">
            <div className="flex justify-between">
              <h1 className="font-meduim text-my-gray dark:text-my-gray-dark text-s2 dark:font-semibold">
                UV index
              </h1>
              <div id="tooltip">
                <span id="tooltipText">
                  UV Index measures sun's UV radiation strength, indicating
                  potential harm from exposure.
                </span>
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
            <p className=" text-s7 font-medium">
              _ _ <small className="text-s4">unit</small>{" "}
            </p>
          </div>
          <div className=" flex">
            <h1 className=" text-s2 font-semibold mt-1 -translate-y-0.5">
              Comment
            </h1>{" "}
            {/* <div className="ml-2">Lottie</div> */}
          </div>
        </div>
        {/* Condition Box end */}
        {/* Condition Box */}
        <div className=" w-[16.3125rem] h-[14.0625rem] bg-white dark:bg-white-dark flex flex-col rounded-xc px-6 py-5 justify-between text-center">
          <div className="">
            <div className="flex justify-between">
              <h1 className="font-meduim text-my-gray dark:text-my-gray-dark text-s2 dark:font-semibold">
                Wind Status
              </h1>
              <div id="tooltip">
                <span id="tooltipText">
                  Wind affects weather patterns, temperature, circulation, and
                  precipitation.
                </span>
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
            <h1 className=" text-s7 font-medium">
              {data[0].wind.speed ? data[0].wind.speed : " __ "}
              <small className=" text-s4">km/h</small>{" "}
            </h1>
          </div>
          <div className=" flex">
            <div className=" h-8 w-8 rounded-full border-2 border-my-gray content-center mr-2">
              <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                className="h-8 w-8 -translate-x-0.5 -translate-y-0.5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_326_8)">
                  <path
                    d="M29.296 12.6854C31.0732 14.5637 32.0314 17.0711 31.9599 19.656C31.8884 22.2409 30.7929 24.6915 28.9146 26.4687C25.9218 29.3002 20.6706 30.2832 13.1777 29.505C12.761 29.4617 12.3736 29.2705 12.086 28.9659C11.7983 28.6614 11.6295 28.2637 11.6101 27.8452L11.5886 27.3452C11.3069 20.0925 12.5868 15.0723 15.5127 12.3039C17.3911 10.5267 19.8985 9.56848 22.4834 9.64002C25.0682 9.71155 27.5188 10.807 29.296 12.6854ZM24.9376 16.809C24.2541 16.0866 23.3116 15.6652 22.3174 15.6377C21.3232 15.6102 20.3588 15.9788 19.6364 16.6623C18.9139 17.3458 18.4926 18.2884 18.4651 19.2825C18.4376 20.2767 18.8061 21.2411 19.4897 21.9636C20.1732 22.686 21.1157 23.1073 22.1099 23.1349C23.1041 23.1624 24.0685 22.7938 24.7909 22.1103C25.5134 21.4267 25.9347 20.4842 25.9622 19.49C25.9897 18.4958 25.6212 17.5315 24.9376 16.809Z"
                    fill="#800080"
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
            <h1 className=" text-s2 font-semibold mt-1 -translate-y-0.5">
              {data[0].wind.speed
                ? functions.getWindDirection(data[0].wind.speed)
                : " __ "}
            </h1>{" "}
          </div>
        </div>
        {/* Condition Box end */}

        {/* Condition Box */}
        <div className=" w-[16.3125rem] h-[14.0625rem] bg-white dark:bg-white-dark flex flex-col rounded-xc px-6 py-5 justify-between">
          <div className="">
            <div className="flex justify-between">
              <h1 className="font-meduim text-my-gray dark:text-my-gray-dark text-s2 dark:font-semibold">
                Sunrise and Sunset
              </h1>
              <div id="tooltip">
                <span id="tooltipText">Wind Speed and Wind Direction</span>
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
          <div>
            <h1 className=" text-s7 font-medium">
              70 <small>km/h</small>{" "}
            </h1>
          </div>
          <div className=" flex">
            <div className=" h-8 w-8 rounded-full border-2 border-my-gray content-center mr-2">
              <svg
                width="41"
                height="41"
                viewBox="0 0 41 41"
                className="h-8 w-8 -translate-x-0.5 -translate-y-0.5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_326_8)">
                  <path
                    d="M29.296 12.6854C31.0732 14.5637 32.0314 17.0711 31.9599 19.656C31.8884 22.2409 30.7929 24.6915 28.9146 26.4687C25.9218 29.3002 20.6706 30.2832 13.1777 29.505C12.761 29.4617 12.3736 29.2705 12.086 28.9659C11.7983 28.6614 11.6295 28.2637 11.6101 27.8452L11.5886 27.3452C11.3069 20.0925 12.5868 15.0723 15.5127 12.3039C17.3911 10.5267 19.8985 9.56848 22.4834 9.64002C25.0682 9.71155 27.5188 10.807 29.296 12.6854ZM24.9376 16.809C24.2541 16.0866 23.3116 15.6652 22.3174 15.6377C21.3232 15.6102 20.3588 15.9788 19.6364 16.6623C18.9139 17.3458 18.4926 18.2884 18.4651 19.2825C18.4376 20.2767 18.8061 21.2411 19.4897 21.9636C20.1732 22.686 21.1157 23.1073 22.1099 23.1349C23.1041 23.1624 24.0685 22.7938 24.7909 22.1103C25.5134 21.4267 25.9347 20.4842 25.9622 19.49C25.9897 18.4958 25.6212 17.5315 24.9376 16.809Z"
                    fill="#800080"
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
            <h1 className=" text-s2 font-semibold mt-1 -translate-y-0.5">
              WSW
            </h1>{" "}
          </div>
        </div>
        {/* Condition Box end */}

        {/* Condition Box */}
        <div className=" w-[16.3125rem] h-[14.0625rem] bg-white dark:bg-white-dark flex flex-col rounded-xc px-6 py-5 justify-between  text-center">
          <div className="">
            <div className="flex justify-between">
              <h1 className="font-meduim text-my-gray dark:text-my-gray-dark text-s2 dark:font-semibold">
                Humidity
              </h1>
              <div id="tooltip">
                <span id="tooltipText">
                  Humidity measures air moisture content, with high humidity
                  indicating higher content.
                </span>
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
            <p className=" text-s7 font-medium">
              {data[0].main.humidity ? data[0].main.humidity : "00"}{" "}
              <sup className="text-s4">%</sup>{" "}
            </p>
          </div>
          <div className=" flex">
            <h1 className=" text-s2 font-semibold mt-1 -translate-y-0.5">
              {data[0].main.humidity
                ? functions.humidityCheck(data[0].main.humidity)
                : "Comment"}
            </h1>{" "}
            <div className="ml-2">
              {data[0].main.humidity ? (
                <Lottie
                  animationData={functions.humiditylottie(
                    functions.humidityCheck(data[0].main.humidity)
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
        {/* Condition Box */}
        <div className=" w-[16.3125rem] h-[14.0625rem] bg-white dark:bg-white-dark flex flex-col rounded-xc px-6 py-5 justify-between text-center">
          <div className="">
            <div className="flex justify-between">
              <h1 className="font-meduim text-my-gray dark:text-my-gray-dark text-s2 dark:font-semibold">
                Visibility
              </h1>
              <div id="tooltip">
                <span id="tooltipText">
                  Visibility measures distance to landmarks, influenced by
                  atmospheric conditions.
                </span>
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
            <p className=" text-s7 font-medium">
              {data[0].visibility
                ? functions.metersToKilometers(data[0].visibility)
                : "00"}{" "}
              <small className="text-s4">km</small>{" "}
            </p>
          </div>
          <div className=" flex">
            <h1 className=" text-s2 font-semibold mt-1 -translate-y-0.5">
              {data[0].visibility
                ? functions.visibilityCheck(data[0].visibility)
                : "Comment"}{" "}
            </h1>{" "}
            <div className="ml-2">
              {data[0].main.humidity ? (
                <Lottie
                  animationData={functions.visibilitylottie(
                    functions.visibilityCheck(data[0].visibility)
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
        {/* Condition Box */}
        <div className=" w-[16.3125rem] h-[14.0625rem] bg-white dark:bg-white-dark flex flex-col rounded-xc px-6 py-5 justify-between">
          <div className="">
            <div className="flex justify-between">
              <h1 className="font-meduim text-my-gray dark:text-my-gray-dark text-s2 dark:font-semibold">
                Air Pressure
              </h1>
              <div id="tooltip">
                <span id="tooltipText">
                  Air pressure impacts weather patterns and atmosphere
                  stability.
                </span>
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
            <p className=" text-s7 font-medium">
              5.2 <small className="text-s4">km</small>{" "}
            </p>
          </div>
          <div className=" flex">
            <h1 className=" text-s2 font-semibold mt-1 -translate-y-0.5">
              Average
            </h1>{" "}
            <div className="ml-2">Lottie</div>
          </div>
        </div>
        {/* Condition Box end */}
      </div>
    </motion.div>
  );
}
