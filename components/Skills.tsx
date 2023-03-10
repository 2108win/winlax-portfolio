import React from "react";

type Props = {};

export default function Skills({}: Props) {
  return (
    <div className="relative flex flex-col items-center justify-center gap-8 px-5 lg:px-6 mx-auto text-center max-w-7xl">
      <h3 className="tracking-[20px] translate-x-[10px] uppercase   text-gray-500 text-2xl">
        Skills
      </h3>
      <h1 className="absolute top-0 md:right-10 -translate-y-1/2 text-4xl md:text-7xl font-extrabold italic text-[#24242415] dark:text-[#f5f6f115] rotate-[20deg] tracking-[8px] cursor-default z-[1]">
        ##skills
      </h1>
    </div>
  );
}
