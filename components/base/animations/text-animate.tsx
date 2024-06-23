"use client";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { useIsomorphicLayoutEffect } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { forwardRef, useEffect, useRef, useState } from "react";

export const TextAnimateContainer = forwardRef<HTMLDivElement, any>(
  ({ children, className, timeline, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("overflow-hidden", className)} {...props}>
        {children}
      </div>
    );
  },
);

TextAnimateContainer.displayName = "TextAnimateContainer";

export const TextAnimate = forwardRef<HTMLDivElement, any>(
  ({ children, className, classText, split = "", id, ...props }, ref) => {
    // const [isMobile, setIsMobile] = useState(true);
    const animation = useRef<any>();
    gsap.registerPlugin(useGSAP);
    useIsomorphicLayoutEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
    }, []);

    ScrollTrigger.addEventListener("refresh", function () {
      if (document.body.getAttribute("style") === "") {
        document.body.removeAttribute("style");
      }
    });
    useGSAP(() => {
      const ida = `#${id}`;
      let mb = gsap.matchMedia();
      mb.add(
        {
          isDesktop: `(min-width: 640px)`,
          isMobile: `(max-width: 639px)`,
        },
        (context) => {
          let { isDesktop, isMobile }: any = context.conditions;
          gsap.fromTo(
            ida,
            {
              y: 50,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              stagger: 0.05,
              delay: 0.2,
              duration: 0.1,
              scrollTrigger: {
                trigger: ida,
                start: "top 90%",
                end: "bottom center",
                // markers: true,
                toggleActions: isDesktop
                  ? "play none none reverse"
                  : "play none none none",
              },
            },
          );
        },
      );
    });
    // const { contextSafe } = useGSAP({ scope: animation });
    // const handleHover = contextSafe(() => {
    //   gsap.fromTo(
    //     ".text__animation--char",
    //     {
    //       y: 50,
    //     },
    //     {
    //       y: 0,
    //       stagger: 0.05,
    //       delay: 0.1,
    //       duration: 0.2,
    //     },
    //   );
    // });
    // const { contextSafe } = useGSAP({ scope: animation });
    return (
      <div
        className={cn("overflow-hidden", className)}
        ref={animation}
        {...props}
        // onMouseEnter={handleHover}
      >
        {children.split(split).map((item: any, i: number) => {
          return split === " " ? (
            <div
              key={"text--" + i + "text-" + i + 1 + "text"}
              className="flex overflow-hidden"
            >
              <div
                id={id}
                className={cn(
                  "text__animation--char overflow-hidden",
                  classText,
                )}
              >
                {item}
              </div>
            </div>
          ) : item === " " ? (
            <div id={id} key={"text-" + i + "text-" + i + 1 + "text"}>
              &nbsp;
            </div>
          ) : (
            <div
              key={"text-" + i + i + "text--" + i + 1 + "text"}
              className="flex overflow-hidden"
            >
              <div id={id} className={cn("text__animation--char", classText)}>
                {item}
              </div>
            </div>
          );
        })}
      </div>
    );
  },
);

TextAnimate.displayName = "TextAnimate";
