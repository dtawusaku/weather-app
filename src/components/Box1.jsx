import React from "react";

// import motion from "framer-motion";
import Lottie from "lottie-react";
import Cloud from "/public/assets/lotties/extreme-night-drizzle.json";
import Party from "/public/assets/lotties/party-popper.json.json";

export default function Box1() {
  return (
    <>
      <div className="r h-40 bg-pink-300">
        {" "}
        Hello World
        <br></br>
        <div style={{ width: "5%" }}>
          <Lottie
            animationData={Cloud}
            //loop={true}  Default is true
          />
        </div>
        <div style={{ width: "5%" }}>
          <Lottie
            animationData={Party}
            //loop={true}  Default is true
          />
        </div>
      </div>
    </>
  );
}
