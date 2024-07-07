import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

type Props = {};
const SPACE = 8;

const menu = {
  open: {
    width: "480px",
    height: "60svh",
    top: `-${SPACE}px`,
    right: `-${SPACE}px`,
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

  const linkDownload = "";

  return (
    <div>
      <Link
        className={cn(
          "fixed inset-0 z-40 bg-background/20",
          !isActive && "hidden",
        )}
        onClick={() => setIsActive(!isActive)}
      ></Link>
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
        className="fixed right-5 z-50 w-fit transition-all duration-500 md:right-10"
      >
        <motion.div
          className={
            "relative flex h-fit max-w-[calc(100svw-1.5rem)] justify-center rounded-lg bg-orange-400 shadow-2xl"
          }
          variants={menu}
          animate={isActive ? "open" : "closed"}
          initial="closed"
        >
          {isActive && (
            <div className="mt-20 flex h-fit items-center gap-2">
              <Checkbox id="with-cover-letter" className="size-6" />
              <label
                htmlFor="with-cover-letter"
                className="font-clashDisplay text-lg font-medium"
              >
                Download with cover letter
              </label>
            </div>
          )}
        </motion.div>
        <X
          onClick={() => setIsActive(!isActive)}
          className={cn(
            "absolute right-0 top-0 size-12 cursor-pointer rounded-full bg-foreground p-2 text-background dark:bg-background dark:text-foreground",
            isActive ? "block" : "hidden",
          )}
        />
        <div
          onClick={() => !isActive && setIsActive(!isActive)}
          className={cn(
            "absolute right-0 top-0 flex w-[200px] cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-3 text-background shadow-lg transition-all duration-500 dark:text-foreground",
            isActive
              ? `right-1/2 translate-x-[calc(50%+8px)] bg-background text-foreground dark:bg-foreground dark:text-background`
              : "bg-orange-400",
          )}
        >
          <span className="font-clashDisplay text-lg font-medium">
            Download CV
          </span>
          <ArrowDown className="animate-bounce" />
        </div>
      </motion.div>
    </div>
  );
}

export default ButtonDownload;
