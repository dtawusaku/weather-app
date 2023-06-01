import React from "react";
import Typewriter from "typewriter-effect";

export default function Header() {
  return (
    <>
      <div className="h-40 pt-32">
        <h1 className="text-center text-white text-4xl uppercase">
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
