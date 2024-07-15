"use client";
import { buttonVariants } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import LinkTransition from "@/components/utils/animations/link-transition";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  // {
  //   title: "Contact",
  //   href: "/contact",
  // },
  {
    title: "Download CV",
    href: "/cv",
  },
];

export default function MenuButton({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.div className={cn("h-full w-fit", className)}>
      <span className="sr-only">Menu</span>
      <motion.button
        whileHover={{ scale: 1.05 }}
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
          "relative z-[999] flex size-12 flex-col items-center justify-center overflow-hidden rounded-full md:size-16",
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
            <Menu strokeWidth={1} size={40} className="h-full w-full" />
          </div>
          <div className="absolute bottom-full p-2">
            <X strokeWidth={1} size={40} className="h-full w-full" />
          </div>
        </motion.div>
      </motion.button>
      <motion.div
        variants={{
          open: {
            height: "80vh",
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
          type: "tween",
        }}
        className="absolute left-0 top-0 z-40 flex w-svw items-center justify-center overflow-hidden bg-secondary shadow-lg transition-all duration-500"
      >
        <ScrollArea
          style={{ height: "inherit" }}
          className="w-full pb-5 pt-20"
          childrenClassName="max-h-max flex md:items-center items-start"
        >
          <div className="flex flex-col items-center gap-10">
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
                      delay: 0.25 + i * 0.2,
                      duration: 0.5,
                      type: "tween",
                      damping: 15,
                    },
                  },
                }}
                initial="initial"
                animate={isOpen ? "enter" : "exit"}
                exit="exit"
                className="group relative w-fit"
              >
                <LinkTransition
                  href={link.href}
                  className={cn(
                    "font-clashDisplay text-4xl text-secondary-foreground/80 sm:text-5xl",
                    pathname === link.href && "text-orange-400",
                  )}
                  classNameUnderline={
                    pathname === link.href
                      ? "after:bg-orange-400"
                      : "after:bg-secondary-foreground/50"
                  }
                >
                  {link.title}
                </LinkTransition>
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
          </div>
          <ScrollBar />
        </ScrollArea>
      </motion.div>
      <div
        className={cn(
          "absolute inset-0 -z-20 h-screen bg-background/50",
          !isOpen && "hidden",
        )}
        onClick={() => setIsOpen(false)}
      ></div>
    </motion.div>
  );
}
