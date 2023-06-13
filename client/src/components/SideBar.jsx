import React from "react";
import SearchBar from "./SearchBar";
import Lottie from "lottie-react";
import weather from "../scripts/clouds";
import Typewriter from "typewriter-effect";

export default function SideBar() {
  return (
    <>
      <div className="w-sidebar h-auto bg-white dark:bg-white-dark px-6 pt-[4rem] duration-700 ease-in-out">
        <SearchBar />
        <div>
          <div>
            {" "}
            <Lottie
              animationData={weather.day.overcast}
              style={{ width: "17rem" }}
            />
          </div>
          <h1 className="font-meduim text-s12 font-plus-jakartar -mt-12 ml-2">
            12&deg;<sup className="text-[4.0rem] font-medium">C</sup>
          </h1>
          <p className=" text-s4 ml-2 font-plus-jakartar font-medium">
            Monday, <span className=" text-gray-400">16:00</span>
          </p>
        </div>
        <div className=" w-full h-[0.05rem] bg-[#F2F2F2] mt-4"></div>
        <div>
          <div>Mostly CLoudy</div>
          <div>Rain 30%</div>
        </div>
        <div className="pb-6 mt-[13rem]">
          {/* Image Div */}
          <div className="h-[7.6875rem] w-[19rem]">
            <img
              src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGlzb21ldHJpYyUyMGFic3RyYWN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              className="w-full h-full object-cover  rounded-lg opacity-75"></img>
            <h1 className=" font-semibold text-lg text-white text-center -translate-y-[4.3rem]">
              <Typewriter
                options={{
                  strings: "New York, NY, USA",
                  autoStart: true,
                  loop: false,
                  //   delay: 1175,
                }}
              />
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
