import { HoverCard3d } from "@/components/base/animations/hover-card";
import { TextAnimate } from "@/components/base/animations/text-animate";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectCard from "./ProjectCard";
const projectData = [
  {
    image: "/winlax-latest.png",
    title: "WinLax",
    time: "2022",
    link: "#",
  },
  {
    image: "/winlax-latest.png",
    title: "WinLax",
    time: "2022",
    link: "#",
  },
];
export default function ProjectFeatured() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center px-5 py-10">
      <div className="flex w-[90%] flex-col gap-16 sm:w-[80%]">
        <div className="flex flex-col">
          <p className="text-right text-6xl text-orange-400 sm:translate-y-10 sm:text-7xl lg:text-8xl">
            {projectData.length || 0}
          </p>
          <p className="text-center font-clashDisplay text-6xl font-bold sm:text-8xl lg:text-9xl">
            Featured Projects
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-20">
          {projectData.map((item, i) => (
            <div
              key={i + "project" + i}
              className="flex w-[80%] flex-col-reverse sm:flex-row sm:gap-5 sm:odd:ml-auto sm:odd:flex-row-reverse"
            >
              <ProjectCard
                image={item.image}
                title={item.title}
                isEven={i % 2 === 0}
                link={item.link}
                time={item.time}
              />
              <div className="flex flex-col space-y-5">
                <p
                  className={cn(
                    "text-pretty font-clashDisplay text-2xl font-medium text-orange-400 sm:text-4xl",
                    i % 2 === 0 && "sm:text-right",
                  )}
                >
                  {i + 1}/{projectData.length}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
