import React from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

const dropIn = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },
  visible: { y: 0, transition: { duration: 0.5 } },
  exit: { y: "100vh", opacity: 0 },
};

export default function Modal({ handleClose, text }) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className=" w-40 h-40 rounded-md m-auto flex"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit">
        <p> {text} </p>
        <button onClick={handleClose}> close</button>
      </motion.div>
    </Backdrop>
  );
}
