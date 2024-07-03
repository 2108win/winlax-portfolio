/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
type Props = {
  src: string;
  title?: string;
};

const ImageHero = ({ title, src }: Props) => {
  const textRef = useRef(null);
  const isInView = useInView(textRef);
  const animationControl = useAnimation();
  useEffect(() => {
    if (isInView) {
      animationControl.start("animate");
    } else {
      animationControl.start("initial");
    }
  }, [isInView]);
  return (
    <div className="relative aspect-square w-svw sm:aspect-auto sm:h-svh sm:-translate-y-[88px] md:-translate-y-[104px]">
      <Image
        src={src}
        alt={title || "winlax-image-project"}
        fill
        sizes="100vw"
        priority
        className="h-full w-full object-cover object-top"
      />
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden text-pretty bg-background/30">
        {title?.split("").map((item, i) =>
          item === " " ? (
            <span key={item + item[i + 1] + i}>&nbsp;</span>
          ) : (
            <motion.span
              ref={textRef}
              key={item + item[i + 1] + i}
              variants={{
                initial: { y: "100%", x: -10, scale: 0 },
                animate: (i) => ({
                  y: 0,
                  x: 0,
                  scale: 1,
                  transition: { duration: 0.5, delay: i * 0.05 },
                }),
              }}
              initial="initial"
              animate={animationControl}
              custom={i}
              className="font-clashDisplay text-3xl font-bold drop-shadow-md transition-all sm:text-6xl md:text-7xl lg:text-8xl"
            >
              {item}
            </motion.span>
          ),
        )}
      </div>
    </div>
  );
};

export default ImageHero;
