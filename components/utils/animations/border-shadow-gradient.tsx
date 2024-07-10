"use client";
import { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { cn } from "@/lib/utils";
const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const RADIUS = ["20%", "75%", "25%", "30%", "35%", "40%", "45%", "50%", "80%"];
export const BorderShadowGradient = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const color = useMotionValue(COLORS_TOP[0]);
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  return (
    <motion.div
      style={{
        border,
        boxShadow,
      }}
      className={cn("transition-colors", className)}
    >
      {children}
    </motion.div>
  );
};
