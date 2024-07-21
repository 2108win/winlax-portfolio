"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowDown, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

const menu = {
  open: {
    width: "400px",
    height: "370px",
    top: 0,
    right: 0,
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    width: "200px",
    height: "48px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

function ButtonDownload({}: Props) {
  const [isActive, setIsActive] = useState(false);
  const [labelButton, setLabelButton] = useState("Download CV");
  const linkDownloadFull = "/cv-winlax-frontend-developer-main.pdf";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isActive) {
      e.preventDefault();
      setIsActive(true);
      setLabelButton("Downloading...");
      const link = document.createElement("a");
      link.href = linkDownloadFull;
      link.download = "CV-La-Mai-Win-Frontend-Developer-main";
      link.click();
      link.remove();
    }
  };
  useEffect(() => {
    if (isActive) {
      const defaultTimeout = setTimeout(() => {
        setIsActive(false);
      }, 10000);
      return () => clearTimeout(defaultTimeout);
    }
  }, [isActive]);
  return (
    <div className="z-50">
      <motion.div
        variants={{
          open: {
            top: "20%",
          },
          closed: {
            top: "50%",
          },
        }}
        initial="closed"
        animate={isActive ? "open" : "closed"}
        className="fixed right-4 z-50 w-fit transition-all duration-500 md:right-10"
      >
        <motion.div
          className={
            "relative flex h-fit max-w-[calc(100svw-2rem)] flex-col items-center justify-center gap-6 rounded-lg bg-card shadow-2xl"
          }
          variants={menu}
          animate={isActive ? "open" : "closed"}
          initial="closed"
        >
          {isActive && (
            <motion.div
              variants={{
                open: {
                  opacity: 1,
                  scale: 1,
                  display: "flex",
                },
                closed: {
                  opacity: 0,
                  scale: 0.5,
                  display: "none",
                },
              }}
              initial="closed"
              animate={isActive ? "open" : "closed"}
              transition={{
                duration: 0.5,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.5,
              }}
              exit="closed"
              className="flex flex-col gap-4 px-5 transition-all"
            >
              <div className="relative w-full cursor-pointer overflow-hidden rounded-sm shadow-lg shadow-white/50 transition-all duration-300">
                <Image
                  src="/cover-letter-main.png"
                  alt="cover letter"
                  width={200}
                  height={200}
                  className="w-full rounded-sm transition-all duration-300"
                  placeholder="blur"
                  blurDataURL="/image-placeholder.png"
                />
              </div>
            </motion.div>
          )}
          <Link
            href={linkDownloadFull}
            onClick={handleClick}
            target="_blank"
            download
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-12 w-[200px] gap-2 rounded-lg px-4 py-3 text-lg shadow-lg transition-all duration-500",
            )}
          >
            <span className="font-clashDisplay font-medium">
              {isActive ? labelButton : "Download CV"}
            </span>
            <ArrowDown className="animate-bounce" />
          </Link>
        </motion.div>
        <X
          strokeWidth={1}
          onClick={() => setIsActive(!isActive)}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-2 top-2 size-12 cursor-pointer rounded-full p-2 text-card-foreground",
            isActive ? "block" : "hidden",
          )}
        />
      </motion.div>
    </div>
  );
}

export default ButtonDownload;
