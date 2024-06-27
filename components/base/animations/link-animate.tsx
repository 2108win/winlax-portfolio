"use client";
import Link from "next/link";
import React, { forwardRef } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  id: string;
  isNormalLink?: boolean;
  hasUnderline?: boolean;
  classNameUnderline?: string;
}

const LinkAnimate = forwardRef<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  LinkProps
>(
  (
    {
      isNormalLink = false,
      children,
      className,
      href,
      id,
      hasUnderline = true,
      classNameUnderline,
      ...props
    },
    ref,
  ) => {
    const animation = useRef<any>();
    gsap.registerPlugin(useGSAP);

    const { contextSafe } = useGSAP({ scope: animation });
    const handleHover = contextSafe(() => {
      const ida = `#${id}`;
      if (!isNormalLink) {
        gsap.fromTo(
          ida,
          { y: "100%" },
          { y: 0, stagger: 0.05, delay: 0.1, duration: 0.2 },
        );
      }
      if (hasUnderline) {
        gsap.fromTo(
          ".link__hover--underline",
          { left: 0, width: 0 },
          { left: 0, width: "100%", duration: 1 },
        );
      }

      // gsap.to(animation.current, { y: -20, duration: 0.3 });
    });

    const handleLeaveHover = () => {
      const ida = `#${id}`;
      if (!isNormalLink) {
        gsap
          .timeline({
            yoyo: true,
          })
          .fromTo(
            ida,
            { y: "-150%" },
            { y: 0, stagger: 0.03, delay: 0.1, duration: 0.2, reversed: true },
          );
      }
      if (hasUnderline) {
        gsap.fromTo(
          ".link__hover--underline",
          { right: 0, width: "100%" },
          { right: 0, left: "100%", width: 0, duration: 1 },
        );
      }
    };
    return (
      <Link
        onMouseEnter={handleHover}
        onMouseLeave={handleLeaveHover}
        href={href}
        ref={animation}
        className={cn("link__hover items-center", className)}
        {...props}
      >
        {typeof children == "string" && !isNormalLink ? (
          children.split("").map((item, i) => {
            return item === " " ? (
              <span key={item + item[i + 1] + i}>&nbsp;</span>
            ) : (
              <span id={id} key={item + item[i + 1] + i + item}>
                {item}
              </span>
            );
          })
        ) : (
          <>{children}</>
        )}
        {hasUnderline && (
          <div
            className={cn(
              "link__hover--underline absolute bottom-0 w-0 bg-foreground",
              {
                "h-[1px]": isNormalLink,
                "h-[2px]": !isNormalLink,
              },
              classNameUnderline,
            )}
          ></div>
        )}
      </Link>
    );
  },
);

LinkAnimate.displayName = "LinkAnimate";

export default LinkAnimate;
