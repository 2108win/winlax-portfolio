"use client";
import React, { useState } from "react";
import { buttonVariants } from "../ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import LinkAnimate from "./animations/link-animate";

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
];

export default function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div className={cn("z-[-10] h-full w-fit")}>
      <span className="sr-only">Menu</span>
      <motion.button
        whileTap={{
          scale: 0.9,
        }}
        whileHover={{ rotate: 360, transition: { duration: 1 } }}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={cn(
          buttonVariants({ variant: isOpen ? "outline" : "ghost" }),
          "relative z-50 flex size-auto flex-col items-center justify-center overflow-hidden rounded-full p-0 text-primary hover:bg-primary hover:text-primary-foreground",
        )}
      >
        <motion.div
          animate={{ y: isOpen ? "-100%" : 0 }}
          transition={{
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1],
            type: "spring",
          }}
          className="relative flex size-full flex-col items-center justify-center"
        >
          <div className="h-full w-full p-2">
            <Menu size={30} className="h-full w-full" />
          </div>
          <div className="absolute top-full p-2">
            <X size={30} className="h-full w-full" />
          </div>
        </motion.div>
      </motion.button>
      <motion.div
        variants={{
          open: {
            height: "80dvh",
            borderRadius: "0 0 20% 20%",
          },
          closed: {
            top: 0,
            height: 0,
            borderRadius: "0 0 200% 200%",
          },
        }}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        transition={{
          duration: 0.75,
          ease: [0.76, 0, 0.24, 1],
          delay: 0.5,
        }}
        className="absolute left-0 top-0 z-[-1] flex w-svw flex-col items-center justify-center gap-10 bg-orange-400 drop-shadow-lg backdrop-blur-xl transition-all duration-500"
      >
        {Links.map((link, i) => (
          <motion.div
            key={link.href + i}
            variants={{
              initial: {
                opacity: 0,
                y: 100,
              },
              enter: {
                opacity: 1,
                y: 0,
                transition: { delay: 1 + i * 0.2, duration: 0.5 },
              },
              exit: {
                opacity: 0,
                y: 100,
                transition: { delay: 0.5 + i * 0.2, duration: 0.5 },
              },
            }}
            initial="initial"
            animate={isOpen ? "enter" : "exit"}
            exit="exit"
          >
            <LinkAnimate
              id={"menu__link" + link.title}
              href={link.href}
              className="text-pretty font-clashDisplay text-4xl sm:text-5xl"
            >
              {link.title}
            </LinkAnimate>
          </motion.div>
        ))}
      </motion.div>
      <div
        className={cn(
          "absolute inset-0 -z-10 h-dvh bg-background/20",
          !isOpen && "hidden",
        )}
        onClick={() => setIsOpen(false)}
      ></div>
    </motion.div>
  );
}
