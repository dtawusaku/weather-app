import React from "react";

export default function SearchBar() {
  return (
    <>
      <div className="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-[#060606] dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input
          type="search"
          className="block w-full rounded-full p-4 pl-10 pr-24 text-sm text-[#060606] border border-main h-4 bg-gray-50 dark:text-main  dark:bg-white-dark focus:ring-main focus:border-main"
          placeholder="search for places.."></input>

        <div className="flex justify-end pr-4">
          <div className=" w-6 h-6 rounded-full mr-2 font-bold text-xs text-center bg-[#F7F6F9] text-black dark:text-white dark:bg-[#16131B] cursor-pointer">
            <h1 className=" translate-y-1">EV</h1>
          </div>
          <div className=" w-6 h-6 rounded-full font-bold text-xs text-center dark:bg-[#818181] bg-[#9D9D9D] text-[#F1F1F1] cursor-pointer">
            <h1 className=" translate-y-1">EV</h1>
          </div>
        </div>
      </div>
    </>
  );
}
