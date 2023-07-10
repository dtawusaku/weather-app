import React from "react";
import Typewriter from "typewriter-effect";

export default function TypeWriterContainer({ location }) {
  // console.log(location);
  return (
    <div className=" container overflow-hidden px-4">
      {" "}
      <Typewriter
        options={{
          strings: `${
            location
              ? location.state
                ? location.name +
                  ", " +
                  location.state +
                  ", " +
                  location.country
                : location.name + "," + location.country
              : "Hi there"
          }`,
          autoStart: true,
          loop: false,
          cursor: null,
          // delay: 115,
        }}
      />
    </div>
  );
}

//`${location? location.state? locationData.name +", " +location.state +", " + locationData.country : "Hi there": "Hi there"}`
