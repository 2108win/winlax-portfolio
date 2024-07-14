"use client";
import { cn } from "@/lib/utils";
import { LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface LinkTransitionProps extends LinkProps {
  children: string | ReactNode;
  className?: string;
  href: string;
  isNormalLink?: boolean;
  hasUnderline?: boolean;
  classNameUnderline?: string;
  hasAnimate?: boolean;
  icon?: ReactNode;
  DURATION?: number;
  STAGGER?: number;
  iconLeft?: boolean;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const LinkTransition = ({
  children,
  className,
  href,
  isNormalLink = false,
  classNameUnderline,
  hasUnderline = true,
  hasAnimate = true,
  DURATION = 0.4,
  STAGGER = 0.02,
  icon,
  iconLeft = false,
  ...props
}: LinkTransitionProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    if (pathname !== href) {
      const body = document.querySelector("body");
      body?.classList.add("page-transition");
      await sleep(500);
      router.push(href);
      await sleep(500);
      body?.classList.remove("page-transition");
    }
  };
  return (
    <motion.a
      initial="initial"
      whileHover={hasAnimate ? "hovered" : "initial"}
      exit="exit"
      onClick={handleClick}
      className={cn(
        "group relative flex w-fit",
        typeof children === "string" && "link__hover",
        hasAnimate && "overflow-hidden",
        className,
      )}
      href={href}
      {...props}
    >
      <div
        className={cn(
          "flex items-center gap-2",
          iconLeft && "flex-row-reverse",
        )}
      >
        <div className="flex items-center">
          {typeof children === "string" ? (
            children.split("").map((l, i) =>
              l === " " ? (
                <span key={i}>&nbsp;</span>
              ) : (
                <motion.span
                  variants={{
                    initial: {
                      y: 0,
                    },
                    hovered: {
                      y: "-100%",
                    },
                  }}
                  transition={{
                    duration: DURATION,
                    ease: "easeInOut",
                    delay: STAGGER * i,
                  }}
                  className="inline-block"
                  key={i}
                >
                  {l}
                </motion.span>
              ),
            )
          ) : (
            <motion.div
              variants={{
                initial: {
                  y: 0,
                  rotate: 0,
                },
                hovered: {
                  y: "-100%",
                  rotate: 90,
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              {children}
            </motion.div>
          )}
        </div>
        {icon}
      </div>
      {hasAnimate &&
        (hasAnimate && typeof children === "string" ? (
          <div
            className={cn(
              "absolute inset-0 flex items-center gap-2",
              iconLeft && "flex-row-reverse",
            )}
          >
            <div className="flex items-center">
              {children.split("").map((l, i) =>
                l === " " ? (
                  <span key={i}>&nbsp;</span>
                ) : (
                  <motion.span
                    variants={{
                      initial: {
                        y: "100%",
                      },
                      hovered: {
                        y: 0,
                      },
                    }}
                    transition={{
                      duration: DURATION,
                      ease: "easeInOut",
                      delay: STAGGER * i,
                      from: "hovered",
                    }}
                    className="inline-block"
                    key={i}
                  >
                    {l}
                  </motion.span>
                ),
              )}
            </div>
            {icon}
          </div>
        ) : (
          <motion.div
            variants={{
              initial: {
                y: "100%",
                rotate: -270,
              },
              hovered: {
                y: 0,
                rotate: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
            }}
            className="absolute inset-0 flex items-center"
          >
            {children}
          </motion.div>
        ))}
      {hasUnderline && (
        <motion.div
          variants={{
            initial: {
              width: 0,
            },
            hovered: {
              width: "100%",
            },
          }}
          transition={{
            duration:
              typeof children === "string"
                ? children.length * STAGGER + DURATION
                : 0.5,
            ease: "easeInOut",
          }}
          className={cn(
            "absolute bottom-0 left-0 w-0 bg-current",
            {
              "h-[1px]": isNormalLink,
              "h-[2px]": !isNormalLink,
            },
            classNameUnderline,
          )}
        ></motion.div>
      )}
    </motion.a>
  );
};

export default LinkTransition;
