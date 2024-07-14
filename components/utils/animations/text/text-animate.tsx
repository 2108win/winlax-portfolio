/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { cn } from "@/lib/utils";
import { useAnimation } from "framer-motion";
import React, { forwardRef, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
type TextAnimateProps = {
  children: string;
  className?: string;
  classText?: string;
  split?: string;
  duration?: number;
  stagger?: number;
  once?: boolean;
  flip?: boolean;
};

export const TextAnimate = ({
  children,
  className,
  classText,
  split = "",
  duration = 0.75,
  stagger = 0.075,
  once = false,
  flip = false,
}: TextAnimateProps) => {
  const textRef = useRef(null);
  const { ref, inView, entry } = useInView({
    threshold: 0.75,
    triggerOnce: once,
  });
  const animation = {
    initial: { y: "100%" },
    enter: (i: number) => ({
      y: "0",
      transition: {
        duration: duration,
        ease: [0.33, 1, 0.68, 1],
        delay: stagger * i,
      },
    }),
  };
  const flipText = {
    initial: { rotateX: -90, opacity: 0 },
    enter: (i: number) => ({
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: duration,
        ease: [0.33, 1, 0.68, 1],
        delay: stagger * i,
      },
    }),
  };
  return (
    <div className={cn("flex flex-wrap overflow-hidden", className)} ref={ref}>
      {children.split(split).map((item: any, i: number) => {
        const commonProps = {
          variants: flip ? flipText : animation,
          custom: i,
          initial: "initial",
          animate: inView ? "enter" : "initial",
          className: cn(
            split === " " ? classText : "text__animation--char",
            classText,
          ),
        };
        return (
          <div
            ref={textRef}
            key={"text--" + i + "text-" + i + 1 + "text"}
            className={
              split === " "
                ? "inline-block overflow-hidden"
                : "text__animation--char inline-block overflow-hidden"
            }
          >
            {item === " " ? (
              <motion.div {...commonProps}>&nbsp;</motion.div>
            ) : (
              <motion.div {...commonProps}>{item}</motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
};
