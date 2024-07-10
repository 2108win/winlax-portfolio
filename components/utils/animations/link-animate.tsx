"use client";
import Link from "next/link";
import React, { forwardRef } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";
import { animationPageOut } from "@/lib/animations";
import { usePathname, useRouter } from "next/navigation";
export interface LinkAnimateProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  href: string;
  id: string;
  isNormalLink?: boolean;
  hasUnderline?: boolean;
  classNameUnderline?: string;
  download?: boolean;
  hasAnimate?: boolean;
  icon?: React.ReactNode;
}

const LinkAnimate = forwardRef<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  LinkAnimateProps
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
      download,
      hasAnimate = true,
      icon,
      ...props
    },
    ref,
  ) => {
    const router = useRouter();
    const pathname = usePathname();
    const animation = useRef<any>();
    gsap.registerPlugin(useGSAP);

    const { contextSafe } = useGSAP({ scope: animation });
    const handleHover = contextSafe(() => {
      const ida = `#${id}`;
      const underline = `#link__underline--${id}`;
      if (!isNormalLink && hasAnimate) {
        gsap.fromTo(
          ida,
          { y: "100%" },
          { y: 0, stagger: 0.05, delay: 0.1, duration: 0.2 },
        );
      }
      if (hasUnderline) {
        gsap.fromTo(
          underline,
          { left: 0, width: 0 },
          { left: 0, width: "100%", duration: 1 },
        );
      }

      // gsap.to(animation.current, { y: -20, duration: 0.3 });
    });

    const handleLeaveHover = () => {
      const ida = `#${id}`;
      const underline = `#link__underline--${id}`;
      if (!isNormalLink && hasAnimate) {
        gsap
          .timeline({
            yoyo: true,
          })
          .fromTo(
            ida,
            { y: "-100%" },
            { y: 0, stagger: 0.03, delay: 0.1, duration: 0.2, reversed: true },
          );
      }
      if (hasUnderline) {
        gsap.fromTo(
          underline,
          { left: 0, width: "100%" },
          { left: "100%", width: "100%", duration: 1 },
        );
      }
    };
    const handleClick = () => {
      // if (pathname !== href) {
      //   animationPageOut(href, router);
      // }
      router.push(href);
    };
    return isNormalLink ? (
      <Link
        href={href}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeaveHover}
        ref={animation}
        className={cn("link__hover items-center", className)}
        download={download}
        {...props}
        onClick={handleClick}
      >
        {children}
        {icon}
        {hasUnderline && (
          <div
            id={`link__underline--${id}`}
            className={cn(
              "absolute bottom-0 left-0 w-0 bg-foreground",
              {
                "h-[1px]": isNormalLink,
                "h-[2px]": !isNormalLink,
              },
              classNameUnderline,
            )}
          ></div>
        )}
      </Link>
    ) : (
      <button
        onMouseEnter={handleHover}
        onMouseLeave={handleLeaveHover}
        ref={animation}
        className={cn("link__hover items-center", className)}
        {...props}
        onClick={handleClick}
      >
        {typeof children == "string" && !isNormalLink ? (
          <>
            {children.split("").map((item, i) => {
              return item === " " ? (
                <span key={item + item[i + 1] + i}>&nbsp;</span>
              ) : (
                <span id={id} key={item + item[i + 1] + i + item}>
                  {item}
                </span>
              );
            })}{" "}
            {icon}
          </>
        ) : (
          <>
            {children} {icon}
          </>
        )}
        {hasUnderline && (
          <div
            id={`link__underline--${id}`}
            className={cn(
              "absolute bottom-0 left-0 h-[2px] w-0 bg-foreground",
              classNameUnderline,
            )}
          ></div>
        )}
      </button>
    );
  },
);

LinkAnimate.displayName = "LinkAnimate";

export default LinkAnimate;
