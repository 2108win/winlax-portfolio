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

  const backgroundImage = useMotionTemplate`radial-gradient(130% 130% at 50% 100%, hsl(var(--background)) 30%, ${color})`;

  return (
    <motion.div
      style={{
        backgroundImage,
      }}
      className="absolute inset-0 -z-10 grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="absolute inset-0 z-0 hidden dark:block">
        <Canvas>
          <Stars radius={50} fade speed={1} depth={4} count={5000} factor={5} />
          {/* <Stars /> */}
        </Canvas>
      </div>
    </motion.div>
  );
};
