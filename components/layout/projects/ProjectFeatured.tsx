import { TextAnimate } from "@/components/base/animations/text-animate";
import Image from "next/image";
import React from "react";
const projectData = [
  {
    image: "/winlax-latest.png",
    title: "WinLax",
    time: "2022",
    link: "/",
  },
  {
    image: "/winlax-latest.png",
    title: "WinLax",
    time: "2022",
    link: "/",
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
        <div className="flex w-full flex-col justify-between">
          {projectData.map((item, i) => (
            <div
              key={i + "project" + i}
              className="flex w-[60%] flex-col space-y-5 odd:ml-auto"
            >
              <div
                id="project__image"
                className="flex items-center justify-center"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="w-full rounded-lg"
                />
              </div>
              <div className="flex flex-col space-y-5">
                <TextAnimate
                  id={"project__title" + i}
                  className="text-pretty"
                  classText="text-3xl font-bold sm:text-4xl"
                >
                  {item.title}
                </TextAnimate>
                <TextAnimate
                  id={"project__time" + i}
                  className="text-pretty"
                  classText="text-3xl font-bold sm:text-4xl"
                >
                  {item.time}
                </TextAnimate>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
