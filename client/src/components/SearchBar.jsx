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
          className="block w-full rounded-full p-4 pl-10 text-sm text-[#060606] border border-main h-4 bg-gray-50 dark:text-main  dark:bg-white-dark focus:ring-main focus:border-main"
          placeholder="search for places.."></input>
      </div>
      <div className="flex">
        <div>
          <input
            type="radio"
            id="hosting-small"
            name="hosting"
            value="hosting-small"
            class=" peer"
            required></input>
          <label
            for="hosting-small"
            class="peer-checked:bg-pink-400 items-center justify-center w-10 h-10 rounded-full p-5 text-gray-500 bg-white border border-gray-200 inline-block cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class="">
              <div class="w-full font-semibold">NG</div>
            </div>
          </label>
        </div>
        <div>
          <input
            type="radio"
            id="hosting-big"
            name="hosting"
            value="hosting-big"
            class=" peer"
            checked></input>
          <label
            for="hosting-big"
            class="peer-checked:bg-pink-400 items-center justify-center w-10 h-10 rounded-full p-5 text-gray-500 bg-white border border-gray-200 inline-block cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class="">
              <div class="w-full text-lg font-semibold">OT</div>
            </div>
          </label>
        </div>
      </div>
    </>
  );
}
