"use client";
import { HoverCard3d } from "@/components/base/animations/hover-card";
import { TextAnimate } from "@/components/base/animations/text-animate";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
type Props = {
  link: string;
  image: string;
  title: string;
  time: string;
  description?: string;
  isEven: boolean;
};

const ProjectCard = ({ link, image, title, time, isEven }: Props) => {
  return (
    <Link
      href={link}
      id="project__image"
      className="group relative flex items-center justify-center"
    >
      <HoverCard3d>
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className={cn(
            "w-full rounded-lg rounded-ss-none transition-all duration-1000 group-hover:scale-105 group-hover:saturate-150 dark:md:saturate-50",
            !isEven && "sm:rounded-se-none sm:rounded-ss-lg",
          )}
        />
        <div
          style={{
            transform: "-translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className={cn(
            "absolute bottom-4 left-4 flex flex-col text-background transition-all dark:text-foreground",
            isEven && "sm:right-4",
          )}
        >
          <TextAnimate
            stagger={0.1}
            duration={1}
            id={"project__title" + title}
            className={cn(
              "text-pretty font-clashDisplay",
              isEven && "sm:justify-end",
            )}
            classText="text-3xl font-bold sm:text-4xl "
            split={" "}
          >
            {title}
          </TextAnimate>
          <TextAnimate
            stagger={0.1}
            duration={1}
            id={"project__time" + title}
            className={cn(
              "text-pretty font-clashDisplay",
              isEven && "sm:justify-end",
            )}
            classText="text-3xl font-bold sm:text-4xl "
          >
            {time}
          </TextAnimate>
        </div>
        <motion.div
          whileHover={{ scale: 1.1, rotate: [0, 360, 0] }}
          className={cn(
            "absolute -right-7 bottom-10 flex size-14 items-center justify-center rounded-full bg-foreground shadow-md group-hover:scale-105 sm:-right-10 sm:size-20 md:-right-12 md:size-24",
            isEven && "sm:-left-10 md:-left-12",
          )}
        >
          <ArrowUpRight
            style={{
              transform: "translateZ(50px)",
              transformStyle: "preserve-3d",
            }}
            className={cn(
              "size-7 text-background transition-all duration-1000 group-hover:rotate-[360deg] sm:size-10 md:size-12",
              isEven && "sm:-rotate-90",
            )}
          />
        </motion.div>
      </HoverCard3d>
    </Link>
  );
};

export default ProjectCard;
