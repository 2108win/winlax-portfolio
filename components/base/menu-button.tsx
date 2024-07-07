"use client";
import React, { useState } from "react";
import { buttonVariants } from "../ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import LinkAnimate from "./animations/link-animate";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const Links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Download CV",
    href: "/cv",
  },
];

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.div className={cn("z-[-10] h-full w-fit")}>
      <span className="sr-only">Menu</span>
      <motion.button
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.95 }}
        animate={{
          rotate: isOpen ? 360 : 0,
          transition: { duration: 1.5 },
        }}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        transition={{
          duration: 1,
          ease: [0.76, 0, 0.24, 1],
          type: "spring",
          damping: 10,
          delay: 0.5,
        }}
        className={cn(
          "relative z-50 flex size-12 flex-col items-center justify-center overflow-hidden rounded-full md:size-16",
        )}
      >
        <motion.div
          animate={{ y: isOpen ? "100%" : 0 }}
          transition={{
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1],
            type: "spring",
            delay: 1.4,
          }}
          className="relative flex size-full flex-col items-center justify-center"
        >
          <div className="h-full w-full p-2">
            <Menu
              strokeWidth={1}
              size={40}
              className="h-full w-full drop-shadow-lg"
            />
          </div>
          <div className="absolute bottom-full p-2">
            <X
              strokeWidth={1}
              size={40}
              className="h-full w-full drop-shadow-lg"
            />
          </div>
        </motion.div>
      </motion.button>
      <motion.div
        variants={{
          open: {
            height: "80svh",
            borderRadius: "0 0 20% 20%",
          },
          closed: {
            height: 0,
            borderRadius: "0 0 200% 200%",
          },
        }}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{
          duration: 0.7,
          ease: [0.24, 0.76, 0, 1],
          delay: 0.3,
        }}
        className="absolute left-0 top-0 z-[-1] flex w-svw flex-col items-center justify-center gap-10 overflow-hidden bg-secondary shadow-lg transition-all duration-500"
      >
        {Links.map((link, i) => (
          <motion.div
            key={link.href + i}
            onClick={() => setIsOpen(false)}
            variants={{
              initial: {
                opacity: 0,
                y: 100,
              },
              enter: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: 1 + i * 0.2,
                  duration: 0.5,
                  type: "spring",
                  damping: 15,
                },
              },
              exit: {
                opacity: 0,
                y: -100,
                transition: {
                  delay: 0.5 + i * 0.2,
                  duration: 0.5,
                  type: "spring",
                  damping: 15,
                },
              },
            }}
            initial="initial"
            animate={isOpen ? "enter" : "exit"}
            exit="exit"
          >
            <LinkAnimate
              id={"menu__link" + link.title.replace(" ", "-")}
              href={link.href}
              className={cn(
                "text-pretty font-clashDisplay text-4xl text-secondary-foreground/50 sm:text-5xl",
                pathname === link.href && "text-orange-400",
              )}
              classNameUnderline={
                pathname === link.href
                  ? "bg-orange-400"
                  : "bg-secondary-foreground/50"
              }
            >
              {link.title}
            </LinkAnimate>
          </motion.div>
        ))}
        <Link
          onClick={() => setIsOpen(false)}
          className={buttonVariants({
            variant: "outline",
            className: "z-10 mx-auto my-2 w-fit rounded-full",
          })}
          target="_blank"
          href={"https://winlax-portfolio-93swck82h-2108win.vercel.app/"}
        >
          Back to Version 1
        </Link>
      </motion.div>
      <div
        className={cn(
          "absolute inset-0 -z-10 h-screen bg-background/20",
          !isOpen && "hidden",
        )}
        onClick={() => setIsOpen(false)}
      ></div>
    </motion.div>
  );
}
