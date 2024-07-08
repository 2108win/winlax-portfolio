import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type Props = {};
const SPACE = 8;

const menu = {
  open: {
    width: "400px",
    height: "450px",
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
  const [isCheckCover, setIsCheckCover] = useState(false);
  const [labelButton, setLabelButton] = useState("Download CV");
  const [isDark, setIsDark] = useState(false);

  const linkDownload = isDark
    ? "/cv-winlax-frontend-developer-dark.pdf"
    : "/cv-winlax-frontend-developer-print.pdf";
  const linkDownloadFull = isDark
    ? "/cv-winlax-frontend-developer-full-dark.pdf"
    : "/cv-winlax-frontend-developer-full.pdf";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isActive) {
      e.preventDefault();
      setIsActive(true);
      setLabelButton("Download CV");
    } else {
      setLabelButton("Downloading...");
      const link = document.createElement("a");
      link.href = isCheckCover ? linkDownloadFull : linkDownload;
      link.download = isCheckCover
        ? "CV-La-Mai-Win-Frontend-Developer-Full"
        : "CV-La-Mai-Win-Frontend-Developer";
      link.click();
      setTimeout(() => {
        setIsActive(false);
        link.remove();
      }, 10000);
    }
  };

  return (
    <div>
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
        className="fixed right-5 z-50 w-fit pb-6 transition-all duration-500 md:right-10"
      >
        <motion.div
          className={
            "relative flex h-fit max-w-[calc(100svw-1.5rem)] flex-col items-center justify-center gap-6 rounded-lg border border-orange-400 bg-secondary shadow-2xl"
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
                <div className="flex h-fit items-center gap-2">
                  <Checkbox
                    checked={isCheckCover}
                    onCheckedChange={() => setIsCheckCover(!isCheckCover)}
                    id="with-cover-letter"
                    className="size-6"
                  />
                  <Label
                    htmlFor="with-cover-letter"
                    className="cursor-pointer font-clashDisplay text-lg font-medium"
                  >
                    Download with cover letter
                  </Label>
                </div>
                <div className="relative w-full cursor-pointer overflow-hidden rounded-sm shadow-lg">
                  <Image
                    src="/cover-letter-print.png"
                    alt="cover letter"
                    width={200}
                    height={200}
                    className={cn(
                      "w-full transition-all duration-300",
                      isCheckCover ? "saturate-100" : "saturate-50",
                      isDark && "opacity-0",
                    )}
                  />
                  <Image
                    src="/cover-letter-dark.png"
                    alt="cover letter dark"
                    width={200}
                    height={200}
                    className={cn(
                      "absolute inset-0 w-full opacity-0 transition-all duration-300",
                      isCheckCover ? "saturate-100" : "saturate-50",
                      isDark && "opacity-100",
                    )}
                  />
                </div>
              </label>
              <RadioGroup
                defaultValue="light"
                className="flex items-center gap-2"
                onValueChange={(value) => setIsDark(value === "dark")}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="light" id="r1" />
                  <Label htmlFor="r1">Light</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dark" id="r2" />
                  <Label htmlFor="r2">Dark</Label>
                </div>
              </RadioGroup>
            </motion.div>
          )}
          <Link
            href={isCheckCover ? linkDownloadFull : linkDownload}
            onClick={handleClick}
            target="_blank"
            download={isActive}
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
            "absolute right-0 top-0 size-12 cursor-pointer rounded-full p-2",
            isActive ? "block" : "hidden",
          )}
        />
      </motion.div>
    </div>
  );
}

export default ButtonDownload;
