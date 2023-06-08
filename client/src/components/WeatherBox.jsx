import React, { useState } from "react";
import "../custom.css";

export default function WeatherBox() {
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

  return (
    <div
      className=" dark:bg-white-dark weather-box "
      onClick={() => {
        setCount(count + 1);
      }}>
      WeatherBox is Clicked {count} times and has animatedand has been clicked
    </div>
  );
}
