import React from "react";
import Lottie from "lottie-react";
import weather from "../scripts/clouds.js";

export default function Table() {
  const { day, night, others } = weather;

  return (
    <div>
      <Lottie animationData={night["partlycloudy"]} />
    </div>
  );
}
