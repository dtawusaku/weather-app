import React, { useState } from "react";
import Lottie from "lottie-react";
import "../custom.css";
import weather from "../scripts/clouds";

export default function WeatherBox({ data }) {
  const [isClicked, setisClicked] = useState(false);
  const [count, setCount] = useState(0);

  const animate = () => {
    if (isAnimating) {
      setAnimating((isAnimating = false));
    } else {
      setAnimating((isAnimating = true));
    }
  };

  const clicked = () => {
    setisClicked(!isClicked);
  };

  // console.log(data);

  return (
    <div className=" dark:bg-white-dark weather-box  flex flex-col text-center justify-between py-3">
      {/* <div>Sun</div> */}
      <div className=" font-medium">{data.time}</div>
      <div className=" ml-5">
        <Lottie
          animationData={data.lottie}
          style={{ width: "5rem" }}
        />
      </div>
      <div className=" font-medium">
        {/* 15&deg; <sup>c</sup> */}
        {data.temp}&deg; <sup>c</sup>
      </div>
    </div>
  );
}
