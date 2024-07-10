/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { useAnimation, useInView } from "framer-motion";
import React, { forwardRef, useEffect, useRef } from "react";
import { motion } from "framer-motion";

type TextAnimateProps = {
  children: string;
  className?: string;
  id: string;
  classText?: string;
  split?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
};
type TextAnimateContainerProps = {
  children: React.ReactNode | string;
  className?: string;
};

export const TextAnimateContainer = forwardRef<
  HTMLDivElement,
  TextAnimateContainerProps
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("overflow-hidden", className)} {...props}>
      {children}
    </div>
  );
});

TextAnimateContainer.displayName = "TextAnimateContainer";

export const TextAnimate = forwardRef<HTMLDivElement, TextAnimateProps>(
  (
    {
      children,
      className,
      classText,
      split = "",
      id,
      delay = 0.1,
      duration = 0.5,
      stagger = 0.05,
      once = false,
      ...props
    },
    ref,
  ) => {
    const textRef = useRef(null);
    const isInView = useInView(textRef, { once: once });
    const animateControl = useAnimation();
    useEffect(() => {
      if (isInView) {
        animateControl.start("animate");
      } else {
        animateControl.set("initial");
      }
    }, [isInView]);
    const fadeInAnimationVariants = {
      initial: {
        opacity: 0,
        y: 50,
      },
      animate: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: stagger * i,
          duration: duration,
          ease: "easeInOut",
        },
      }),
    };
    return (
      <div
        className={cn("flex flex-wrap overflow-hidden", className)}
        {...props}
      >
        {children.split(split).map((item: any, i: number) => {
          return split === " " ? (
            <div
              ref={textRef}
              key={"text--" + i + "text-" + i + 1 + "text"}
              className="flex gap-1 overflow-hidden"
            >
              <motion.div
                variants={fadeInAnimationVariants}
                custom={i}
                initial="initial"
                animate={animateControl}
                className={cn("overflow-hidden", classText)}
              >
                {item}
              </motion.div>
            </div>
          ) : item === " " ? (
            <motion.div
              variants={fadeInAnimationVariants}
              custom={i}
              initial="initial"
              animate={animateControl}
              key={"text-" + i + "text-" + i + 1 + "text"}
            >
              &nbsp;
            </motion.div>
          ) : (
            <div
              ref={textRef}
              key={"text-" + i + i + "text--" + i + 1 + "text"}
              className="flex overflow-hidden"
            >
              <motion.div
                variants={fadeInAnimationVariants}
                custom={i}
                initial="initial"
                animate={animateControl}
                className={cn("text__animation--char", classText)}
              >
                {item}
              </motion.div>
            </div>
          );
        })}
      </div>
    );
  },
);

TextAnimate.displayName = "TextAnimate";
