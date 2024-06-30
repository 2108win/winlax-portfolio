"use client";
import { HoverCard3d } from "@/components/base/animations/hover-card";
import { TextAnimate } from "@/components/base/animations/text-animate";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
type Props = {
  link: string;
  image: string;
  title: string;
  time: string;
  description?: string;
  isEven: boolean;
};

const ProjectCard = ({ link, image, title, time, isEven }: Props) => {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const idl = `#project__image__arrow${title.split(" ").join("")}`;
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          toggleActions: "restart reverse restart reverse",
          start: "top 95%",
          end: "bottom 5%",
          // markers: true,
          // end: "bottom 20%",
        },
      })
      .fromTo(
        containerRef.current,
        {
          opacity: 0,
          scale: 0,
          x: isEven ? "100%" : "-100%",
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.5,
          ease: "power4.inOut",
          yoyo: true,
        },
      )
      .fromTo(
        idl,
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, ease: "bounce.inOut", duration: 1 },
      )
      .to(idl, { rotate: isEven ? 360 : 270, duration: 1.5 });
  });
  return (
    <Link
      ref={containerRef}
      href={link}
      id="project__image"
      className="group relative flex items-center justify-center"
    >
      <HoverCard3d className="aspect-[5/4] sm:aspect-[5/3]">
        <Image
          src={image}
          alt={title}
          width={500}
          height={400}
          className={cn(
            "aspect-[5/4] w-full rounded-lg rounded-ss-none object-cover object-top shadow-lg transition-all duration-1000 group-hover:scale-105 group-hover:saturate-150 sm:aspect-[5/3] dark:md:saturate-50",
            !isEven && "sm:rounded-se-none sm:rounded-ss-lg",
          )}
        />
        {/* text container */}
        <div
          style={{
            transform: "-translateZ(75px)",
            transformStyle: "preserve-3d",
          }}
          className={cn(
            "absolute bottom-4 left-4 z-10 flex w-[100%-2rem] flex-col text-pretty text-background transition-all dark:text-foreground",
            isEven && "sm:right-4 sm:items-end",
          )}
        >
          <TextAnimate
            stagger={0.2}
            duration={1}
            id={"project__title" + link}
            className={cn(
              "w-[90%] gap-1 text-pretty font-clashDisplay",
              isEven && "sm:justify-end",
            )}
            classText="text-3xl font-bold sm:text-4xl"
            split={" "}
          >
            {title}
          </TextAnimate>
          <TextAnimate
            stagger={0.2}
            duration={1}
            id={"project__time" + link}
            className={cn("font-clashDisplay", isEven && "sm:justify-end")}
            classText="sm:text-2xl text-xl font-regular"
          >
            {time}
          </TextAnimate>
        </div>
        {/* shadow blur */}
        <div
          className={cn(
            "absolute bottom-0 left-0 h-32 w-[100%] rounded-xl bg-foreground/30 blur-md dark:bg-background/30 md:blur-xl",
          )}
        ></div>
        {/* button arrow */}
        <div
          id={"project__image__arrow" + title.split(" ").join("")}
          className={cn(
            "absolute -right-7 bottom-10 flex size-14 items-center justify-center rounded-full bg-foreground shadow-md sm:-right-10 sm:size-20 md:-right-12 md:size-24",
            isEven && "sm:-left-10 md:-left-12",
          )}
        >
          <ArrowUpRight
            style={{
              transform: "translateZ(50px)",
              transformStyle: "preserve-3d",
            }}
            className={cn(
              "size-7 text-background transition-all duration-1000 sm:size-10 md:size-12",
              isEven && "sm:-rotate-45",
            )}
          />
        </div>
      </HoverCard3d>
    </Link>
  );
};

export default ProjectCard;
