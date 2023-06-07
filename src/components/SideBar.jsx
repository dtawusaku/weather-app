import React from "react";
import SearchBar from "./SearchBar";

export default function SideBar() {
  return (
    <>
      <div className="w-sidebar h-screen bg-white dark:bg-white-dark px-6 pt-[4rem]">
        <SearchBar />

        <div>This is the Sidebar</div>
      </div>
    </>
  );
}
