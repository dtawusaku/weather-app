import React, { useState } from "react";
import Lottie from "lottie-react";
import "../custom.css";
import { motion } from "framer-motion";
import Modal from "./Modal";

export default function WeatherBox({ data }) {
  const [isClicked, setisClicked] = useState(false);
  const [count, setCount] = useState(0);
  const [openModal, setopenModal] = useState(false);

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

  const open = () => setopenModal(false);
  const close = () => setopenModal(true);
  // console.log(data);

  return (
    <motion.div
      className=" dark:bg-white-dark weather-box  flex flex-col text-center justify-between py-3"
      // whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={{ scale: 2.5 }}>
      {/* <div>Sun</div> */}
      <div className=" font-medium">{data.time}</div>
      <div className=" ml-5">
        <Lottie
          animationData={data.lottie}
          style={{ width: "5rem" }}
        />
      </div>
      {/* <button onClick={() => (openModal ? close() : open())}>Open</button> */}
      <div className=" font-medium">
        {/* 15&deg; <sup>c</sup> */}
        {data.temp}&deg; <sup>c</sup>
      </div>

      {openModal && (
        <Modal
          openModal={openModal}
          handleClose={close}
        />
      )}
    </motion.div>
  );
}
