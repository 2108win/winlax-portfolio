import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="font-clashDisplay relative mx-auto max-w-7xl px-5 font-bold">
      <p className="mb-4 text-lg font-semibold uppercase tracking-tight text-orange-400 md:text-2xl">
        La Mai Win
      </p>
      <p className="mb-8 w-min text-center text-6xl font-bold md:text-[200px]">
        Frontend Developer
      </p>
      <p className="text-right text-xl font-normal md:text-3xl">
        <span className="relative rotate-3 text-lg after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:-rotate-2 after:bg-orange-400 after:content-['']">
          Opening for job.
        </span>{" "}
        <br />
        <span className="font-bold text-orange-400">over 1 year</span>{" "}
        experience.
      </p>
    </div>
  );
};

export default Hero;
