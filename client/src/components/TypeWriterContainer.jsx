import React from "react";

export default function TypeWriterContainer(locationData) {
  console.log(locationData);
  return (
    <div>
      {" "}
      <Typewriter
        options={{
          strings: "Location Name",

          autoStart: true,
          loop: false,
          //   delay: 1175,
        }}
      />
    </div>
  );
}

//`${location? location.state? locationData.name +", " +location.state +", " + locationData.country : "Hi there": "Hi there"}`
