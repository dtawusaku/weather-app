import React from "react";
import "../index.css";

export default function TypeBox() {
  return (
    <div className=" w-[18.3125rem] h-[16.0625rem] bg-white dark:bg-white-dark flex-col">
      <div className="rounded-md">
        <div className="flex justify-between">
          <h1 className="p text-2xl font-semibold">UV Index</h1>
          <div className=" w-5 h-5 rounded-full bg-blue-400 hover:bg-blue-700 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="rounded-md">images</div>
      <div className="rounded-md">Others</div>
    </div>
  );
}
