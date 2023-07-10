import React, { useState } from "react";
import "../custom.css";
import {
  motion,
  AnimatePresence,
  transform,
  AnimateSharedLayout,
} from "framer-motion";

export default function Tab({ data }) {
  const [activeTab, setactiveTab] = useState(0);
  const [selectedId, setSelectedId] = useState(null);

  return (
    //TODO: Apply animation on this so that when weather data is present, it animates in with either a chnage in opacity of direction.
    //Done.
    <motion.div className="tab lg:overflow-x-hidden">
      <div className="h-[3.6875rem] flex justify-between md:justify-around lg:justify-between lg:pt-6 lg:pr-4">
        <div className="tab-headers flex justify-between space-x-40 lg:space-x-4 md:space-x-96">
          {/* Dynamic */}
          {data.map((entry, index) => (
            <div
              className={`lg:ml-4 ml-8 md:ml-0 text-s3 pt-3 font-semibold inline-block${
                activeTab == index
                  ? " text-bluegradient  lg:text-[#8a2be2] border-b-4 lg:border-0 border-bluegradient "
                  : ""
              }`}
              onClick={() => {
                setactiveTab(index);
              }}>
              {entry.name}
            </div>
          ))}

          {/* Dynammin end */}
        </div>
        <div className="hidden lg:block">
          {/* Degree Temperature */}
          {/* <input
            type="radio"
            id="celsuis"
            name="degree"></input>
          <input
            type="radio"
            id="fahrenheit"
            name="degree"></input> */}
          <div className="flex">
            <div className="flex pt-1.5 mr-4">
              {/* celsuis button */}
              <div
                className=" w-8 h-8 rounded-full bg-black text-white flex items-center justify-center py-4.5 px-4.5 mr-2 radio-option"
                for="celsuis">
                <div
                  className="text-center -translate-x-0.5"
                  for="celsuis">
                  <h1 className=" font-bold text-s1">&deg;C</h1>
                </div>
              </div>
              {/* fahrenheit button */}
              <div
                className=" w-8 h-8 rounded-full bg-white text-black flex items-center justify-center py-4.5 px-4.5 radio-option"
                for="fahrenheit">
                <div
                  className="text-center -translate-x-0.5  "
                  for="fahrenheit">
                  <h1 className="font-bold text-s1">&deg;F</h1>
                </div>
              </div>
            </div>
            <a href="https://github.com/dtawusaku">
              <motion.div
                initial={{}}
                animate={{}}
                variants={{}}
                className="w-12 h-12 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center font-bold text-white dark:bg-gradient-to-r dark:from-[#165E7F] dark:to-[#272BC7]">
                DT
              </motion.div>
            </a>
          </div>
          {/* Degree Temperature End */}
        </div>
      </div>

      <div className="tab-body">{data[activeTab].component}</div>
    </motion.div>
  );
}

//  {
//    data.map((entry, index) => ({
//      /* <div
//             className="{ `tab-header ${activeTab === index ? 'active' : '' }`}"
//             onClick={setactiveTab(index)}>
//             {" "}
//             {entry.header}{" "}
//           </div> */
//    }));
//  }
