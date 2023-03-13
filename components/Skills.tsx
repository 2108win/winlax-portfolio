import React from "react";

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
    </div>
  );
}
