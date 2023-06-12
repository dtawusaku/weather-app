import React from "react";
import SearchBar from "./SearchBar";
import Cloud from "../assets/lotties/weather-icons/extreme-day-snow.json";
import tCloud from "../assets/animated/rainy-7.svg";
import Lottie from "lottie-react";

export default function SideBar() {
  return (
    <>
      <div className="w-sidebar h-auto bg-white dark:bg-white-dark px-6 pt-[4rem] duration-700 ease-in-out">
        <SearchBar />
        <Lottie animationData={Cloud} />

        <div className="">
          <img
            src={tCloud}
            className="w-full"></img>
        </div>

        <div className="pb-6">
          {/* Image Div */}
          <div className="h-[7.6875rem] w-[19rem]">
            <img
              src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGlzb21ldHJpYyUyMGFic3RyYWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              className="w-full h-full object-cover  rounded-lg"></img>
          </div>
        </div>
      </div>
    </>
  );
}
