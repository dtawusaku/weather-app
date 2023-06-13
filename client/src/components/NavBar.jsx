import React from "react";

export default function NavBar() {
  return (
    <div className="bg-white dark:bg-white-dark  w-[66.25rem] h-[3.6875rem] mt-[3.25rem] flex flex-row">
      <div>
        <span>Today</span>
        <span>Week</span>
      </div>
      <div className="flex">
        <div className=" w-8 h-8 rounded-full bg-red-400 flex items-center justify-center">
          <div className="text-center">
            <h1>
              &deg;<sup>C</sup>
            </h1>
          </div>
        </div>
        <div className=" w-8 h-8 rounded-full bg-red-400 flex items-center justify-center">
          <div className="text-center">
            <h1>
              &deg;<sup>F</sup>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
