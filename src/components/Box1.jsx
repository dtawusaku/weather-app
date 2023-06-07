import React from "react";

// import motion from "framer-motion";
import Lottie from "lottie-react";
import Cloud from "/src/assets/lotties/extreme-night-drizzle.json";
import Party from "/src/assets/lotties/party-popper.json.json";

export default function Box1() {
  return (
    <>
      <div className="r h-40 bg-pink-300">
        {" "}
        <span className="f font-poppins text-s4"> Hello World</span> <br></br>
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
