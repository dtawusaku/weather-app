import React, { useState } from "react";
import "../custom.css";

export default function Tab({ data }) {
  const [activeTab, setactiveTab] = useState(0);
  return (
    <div className="tab">
      <div className="w-[66.25rem] h-[3.6875rem] mt-[1.25rem] flex justify-between pt-2">
        <div className="tab-headers flex">
          {/* Dynamic */}
          {data.map((entry, index) => (
            <div
              className={`ml-4 text-s3 pt-3 font-semibold ${
                activeTab == index ? "actived" : ""
              }`}
              onClick={() => {
                setactiveTab(index);
              }}>
              {entry.name}
            </div>
          ))}
          {/* Dynammin end */}
        </div>
        <div className="">
          {/* Degree Temperature */}
          <div className="flex">
            <div className="flex pt-1.5 mr-4">
              <div className=" w-8 h-8 rounded-full bg-black flex items-center justify-center py-4.5 px-4.5 mr-2">
                <div className="text-center -translate-x-0.5 text-white">
                  <h1 className=" font-bold text-s1">&deg;C</h1>
                </div>
              </div>
              <div className=" w-8 h-8 rounded-full bg-white flex items-center justify-center py-4.5 px-4.5">
                <div className="text-center -translate-x-0.5 text-black">
                  <h1 className="font-bold text-s1">&deg;F</h1>
                </div>
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center font-bold text-white">
              DT
            </div>
          </div>
          {/* Degree Temperature End */}
        </div>
      </div>

      <div className="tab-body">{data[activeTab].component}</div>
    </div>
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
