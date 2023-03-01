import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex items-center justify-center"
    >
      <div className="border opacity-20 dark:opacity-100 border-[#333] absolute mt-52 rounded-full animate-ping h-[200px] w-[200px]"></div>
      <div className="border opacity-20 dark:opacity-100 border-[#333] absolute mt-52 rounded-full h-[300px] w-[300px]"></div>
      <div className="border opacity-20 dark:opacity-100 border-[#333] absolute mt-52 rounded-full h-[500px] w-[500px]"></div>
      <div className="border border-[#F7ab0a] opacity-20 absolute mt-52 rounded-full h-[650px] w-[650px] animate-pulse"></div>
      <div className="border opacity-20 dark:opacity-100 border-[#333] absolute mt-52 rounded-full h-[800px] w-[800px]"></div>
    </motion.div>
  );
}
