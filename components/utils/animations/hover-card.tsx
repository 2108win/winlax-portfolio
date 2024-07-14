"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BorderShadowGradient } from "./border-shadow-gradient";
// import { FiMousePointer } from "react-icons/fi";

export const ExampleCardHover = () => {
  return (
    <div className="grid min-h-svh w-full place-content-center px-4 py-12 text-slate-900">
      <HoverCard3d>
        <BorderShadowGradient className="overflow-hidden rounded-3xl">
          <Image
            style={{
              transform: "translateZ(75px)",
              transformStyle: "preserve-3d",
            }}
            src={"/winlax-latest-1.JPEG"}
            alt={"winlax"}
            width={500}
            height={500}
            priority
          />
        </BorderShadowGradient>
      </HoverCard3d>
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

export const HoverCard3d = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const ref = useRef<any>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className={cn("relative", className)}
    >
      {children}
    </motion.div>
  );
};
