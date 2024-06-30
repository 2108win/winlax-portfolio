"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { cn } from "@/lib/utils";
const projectData = [
  {
    image: "/projects/winlax-portfolio.jpeg",
    title: "WinLax Portfolio",
    time: "2024",
    link: "/projects/winlax-portfolio",
  },
  {
    image: "/projects/business-landing-page.jpeg",
    title: "Business Landing Page",
    time: "2023",
    link: "/projects/business-landing-page",
  },
  {
    image: "/projects/fatme-v2.jpeg",
    title: "WinLax FATMe version 2",
    time: "2023",
    link: "/projects/winlax-portfolio",
  },
  {
    image: "/projects/fatme-app.jpeg",
    title: "FATME App",
    time: "2022",
    link: "/projects/fatme-app",
  },
  {
    image: "/projects/watchour.jpeg",
    title: "Wathchour",
    time: "2022",
    link: "/projects/watchour",
  },
  {
    image: "/projects/LSM.jpeg",
    title: "Library System Management",
    time: "2022",
    link: "/projects/LSM",
  },
];
export default function ProjectFeatured() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center px-5 py-10">
      <div className="flex flex-col gap-20">
        <div className="mx-auto flex w-[90%] flex-col sm:w-[80%]">
          <p className="text-right text-6xl text-orange-400 sm:translate-y-10 sm:text-7xl lg:text-8xl">
            {projectData.length || 0}
          </p>
          <p className="text-center font-clashDisplay text-6xl font-bold sm:text-8xl lg:text-9xl">
            Featured Projects
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-20 sm:px-10">
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
              <div className="z-30 flex flex-col space-y-5">
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
