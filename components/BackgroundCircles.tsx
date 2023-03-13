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
      <div className="border opacity-20 dark:opacity-100 border-gray333 absolute mt-52 rounded-full animate-ping h-[200px] w-[200px]"></div>
      <div className="border opacity-20 dark:opacity-100 border-gray333 absolute mt-52 rounded-full h-[250px] w-[250px] md:h-[300px] md:w-[300px]"></div>
      <div className="border opacity-20 dark:opacity-100 border-gray333 absolute mt-52 rounded-full md:h-[500px] md:w-[500px] h-[350px] w-[350px]"></div>
      <div className="border border-primary opacity-20 absolute mt-52 rounded-full md:h-[650px] md:w-[650px] h-[450px] w-[450px] animate-pulse"></div>
      <div className="border opacity-20 dark:opacity-100 border-gray333 absolute mt-52 rounded-full md:h-[800px] md:w-[800px] h-[550px] w-[550px]"></div>
    </motion.div>
  );
}
