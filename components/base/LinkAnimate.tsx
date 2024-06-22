"use client";
import Link, { LinkProps } from "next/link";
import React, { forwardRef } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// type Props = {
//   children: React.ReactNode | string;
//   className?: string;
//   href: string;
// };

const LinkAnimate = forwardRef<HTMLAnchorElement, any>(
  ({ isNormalLink = false, children, className, href, ...props }, ref) => {
    const animation = useRef<any>();
    gsap.registerPlugin(useGSAP);

    const { contextSafe } = useGSAP({ scope: animation });
    const handleHover = contextSafe(() => {
      if (!isNormalLink) {
        gsap.fromTo(
          ".link__hover--text",
          { y: 50 },
          { y: 0, stagger: 0.05, delay: 0.1, duration: 0.2 },
        );
      }
      gsap.fromTo(
        ".link__hover--underline",
        { left: 0, width: 0 },
        { left: 0, width: "100%", duration: 1 },
      );

      // gsap.to(animation.current, { y: -20, duration: 0.3 });
    });

    const handleLeaveHover = () => {
      if (!isNormalLink) {
        gsap
          .timeline({
            yoyo: true,
          })
          .fromTo(
            ".link__hover--text",
            { y: -50 },
            { y: 0, stagger: 0.03, delay: 0.1, duration: 0.2, reversed: true },
          );
      }
      gsap.fromTo(
        ".link__hover--underline",
        { right: 0, width: "100%" },
        { right: 0, left: "100%", width: 0, duration: 1 },
      );
    };
    return (
      <Link
        onMouseEnter={handleHover}
        onMouseLeave={handleLeaveHover}
        href={href}
        ref={animation}
        className={`link__hover ${className}`}
        {...props}
      >
        {typeof children == "string" && !isNormalLink ? (
          children.split("").map((item, i) => {
            return item === " " ? (
              <span key={item + item[i + 1] + i}>&nbsp;</span>
            ) : (
              <span
                className="link__hover--text"
                key={item + item[i + 1] + i + item}
              >
                {item}
              </span>
            );
          })
        ) : (
          <span>{children}</span>
        )}
        <div
          className={`link__hover--underline absolute bottom-0 w-0 bg-foreground ${isNormalLink ? "h-[1px]" : "h-[2px]"}`}
        ></div>
      </Link>
    );
  },
);

LinkAnimate.displayName = "LinkAnimate";

export default LinkAnimate;
