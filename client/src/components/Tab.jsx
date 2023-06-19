import React, { useState } from "react";
import "../custom.css";
import { motion, AnimatePresence } from "framer-motion";

export default function Tab({ data }) {
  const [activeTab, setactiveTab] = useState(0);
  const [selectedId, setSelectedId] = useState(null);
  const items = [
    { id: 1, subtitle: "How to Eat", title: "Yam" },
    { id: 2, subtitle: "How to drink", title: "tea" },
  ];
  const people = [
    { id: 1, name: "How to Eat", title: "Yam" },
    { id: 2, name: "How to drink", title: "tea" },
  ];
  return (
    <div className="tab">
      <div className="h-[3.6875rem] flex justify-between pt-6 pr-4">
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
          <input
            type="radio"
            id="celsuis"
            name="degree"></input>
          <input
            type="radio"
            id="fahrenheit"
            name="degree"></input>
          <div className="flex">
            <div className="flex pt-1.5 mr-4">
              <div
                className=" w-8 h-8 rounded-full bg-black text-white flex items-center justify-center py-4.5 px-4.5 mr-2 radio-option"
                for="celsuis">
                <div className="text-center -translate-x-0.5  ">
                  <h1 className=" font-bold text-s1">&deg;C</h1>
                </div>
              </div>
              <div
                className=" w-8 h-8 rounded-full bg-white text-black flex items-center justify-center py-4.5 px-4.5 radio-option"
                for="fahrenheit">
                <div className="text-center -translate-x-0.5  ">
                  <h1 className="font-bold text-s1">&deg;F</h1>
                </div>
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center font-bold text-white dark:bg-gradient-to-r dark:from-[#165E7F] dark:to-[#272BC7]">
              DT
            </div>
          </div>
          {/* Degree Temperature End */}
        </div>
      </div>

      <div className="tab-body">
        <div>
          Something HERE
          {items.map((item) => (
            <motion.div
              layoutId={item.id}
              className="bg-red-500 mt-2"
              onClick={() => setSelectedId(item.id)}>
              <motion.h5>{item.subtitle}</motion.h5>
              <motion.h2>{item.title}</motion.h2>
            </motion.div>
          ))}
          <AnimatePresence>
            {selectedId && (
              <motion.div
                layoutId={selectedId}
                initial={{}}
                animate={{ backgroundColor: "yellow" }}
                exit={{ opacity: 0 }}>
                <motion.h5 className="bg-blue-300 mt-2">
                  items[selectedId].subtitle
                </motion.h5>
                <motion.h2 className="bg-blue-300 mt-2">
                  items[selectedId].title
                </motion.h2>
                <motion.button
                  className="bg-pink-700"
                  onClick={() => setSelectedId(null)}>
                  G
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {data[activeTab].component}
      </div>
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
