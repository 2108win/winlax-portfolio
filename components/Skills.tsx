/* eslint-disable @next/next/no-img-element */
import React from "react";

const SkillsItems = [
  "/images/skills/html.png",
  "/images/skills/css.png",
  "/images/skills/javascript.png",
  "/images/skills/react.png",
  "/images/skills/tailwind.png",
  "/images/skills/pug.png",
  "/images/skills/sass.png",
  "/images/skills/figma.png",
  "/images/skills/xd.png",
];
type Props = {};

export default function Skills({}: Props) {
  return (
    <div className="lg:px-6 max-w-7xl relative flex flex-col items-center justify-center gap-8 px-5 mx-auto text-center">
      <h2 className="tracking-[20px] translate-x-[10px] uppercase text-grayDarkOp80 dark:text-grayLightOp80 text-2xl">
        Skills
      </h2>
      <h1 className="absolute top-0 md:right-10 -translate-y-1/2 text-4xl md:text-7xl font-extrabold italic text-grayDarkOp15 dark:text-grayLightOp15 rotate-[20deg] tracking-[8px] cursor-default z-[1] select-none">
        ##skills
      </h1>
      <div className="md:gap-10 md:grid-cols-5 justify-items-center grid w-full grid-cols-3 gap-8">
        {SkillsItems.map((item, index) => (
          <div key={index} className="w-20 h-20">
            <img
              src={item}
              alt="skill"
              className="hover:-translate-y-2 object-cover w-full h-full transition-all duration-500 select-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
