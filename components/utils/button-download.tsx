import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

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
    height: "52px",
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
      setTimeout(() => {
        setIsActive(false);
        link.remove();
      }, 10000);
    }
  };

  return (
    <div className="z-50">
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/20",
          !isActive && "hidden",
        )}
        onClick={() => setIsActive(!isActive)}
      ></div>
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
        className="fixed right-4 z-50 w-fit pb-6 transition-all duration-500 md:right-10"
      >
        <motion.div
          className={
            "relative flex h-fit max-w-[calc(100svw-2rem)] flex-col items-center justify-center gap-6 rounded-lg bg-secondary shadow-2xl"
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
              <label
                htmlFor="with-cover-letter"
                className="flex flex-col gap-4 transition-all duration-300"
              >
                <div className="relative w-full cursor-pointer overflow-hidden rounded-sm shadow-lg shadow-white/50 transition-all duration-300">
                  <Image
                    src="/cover-letter-main.png"
                    alt="cover letter"
                    width={200}
                    height={200}
                    className="w-full rounded-sm transition-all duration-300"
                  />
                </div>
              </label>
            </motion.div>
          )}
          <Link
            href={linkDownloadFull}
            onClick={handleClick}
            target="_blank"
            download
            className="flex w-[200px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-orange-400 px-4 py-3 text-background shadow-lg transition-all duration-500 dark:text-foreground"
          >
            <span className="font-clashDisplay text-lg font-medium">
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
            "absolute right-2 top-2 size-12 cursor-pointer rounded-full p-2",
            isActive ? "block" : "hidden",
          )}
        />
      </motion.div>
    </div>
  );
}

export default ButtonDownload;
