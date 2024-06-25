"use client";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const AuroraHero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  // const backgroundImage = useMotionTemplate`linear-gradient(to right, #8a238730 , #e9405730, #f2712130)`;
  const backgroundImage = useMotionTemplate`radial-gradient(130% 130% at 50% 100%, hsl(var(--background)) 30%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.div
      style={{
        backgroundImage,
      }}
      className="absolute inset-0 -z-10 grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} fade speed={1} count={20000} />
          {/* <Stars /> */}
        </Canvas>
      </div>
    </motion.div>
  );
};
