import React from "react";

type Props = {};

export default function Projects({}: Props) {
  return (
    <div className="relative flex flex-col items-center justify-center gap-8 px-5 mx-auto text-center max-w-7xl">
      <h3 className="tracking-[20px] translate-x-[10px] uppercase   text-gray-500 text-2xl">
        Projects
      </h3>
      <h1 className="absolute md:right-10 -translate-y-1/2 text-5xl md:text-7xl font-extrabold italic text-[#24242415] dark:text-[#f5f6f115] rotate-[20deg] tracking-[8px] cursor-default ">
        ##projects
      </h1>
    </div>
  );
}
