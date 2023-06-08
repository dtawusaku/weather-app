import React from "react";
import Typewriter from "typewriter-effect";

export default function Header() {
  return (
    <>
      <div className="h-40 pt-32">
        <h1 className="text-center text-black text-4xl uppercase font-poppins">
          <Typewriter
            options={{
              strings: "Weather Application",
              autoStart: true,
              loop: false,
              //   delay: 1175,
            }}
          />
        </h1>
      </div>
    </>
  );
}
