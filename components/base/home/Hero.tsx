"use client";
import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MoveDown } from "lucide-react";
type Props = {};

const Hero = (props: Props) => {
  const heroRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(useGSAP);
  useGSAP(
    () => {
      gsap.registerEffect({
        name: "moveDown",
        defaults: { duration: 2 },
        effect: (targets: string) => {
          return gsap.fromTo(
            targets,
            { y: 10 },
            { y: 0, duration: 1, opacity: 1 },
          );
        },
      });

      gsap.fromTo(
        ".hero__name",
        { x: 200, letterSpacing: 25 },
        { x: 0, duration: 0.5, opacity: 1, letterSpacing: 0, delay: 0.2 },
      );
      gsap.fromTo(
        ".hero__title--top",
        { x: -200 },
        { x: 0, duration: 0.5, opacity: 1, delay: 0.4 },
      );
      gsap.fromTo(
        ".hero__title--bottom",
        { x: 200 },
        { x: 0, duration: 0.5, opacity: 1, delay: 0.8 },
      );
      gsap.fromTo(
        ".hero__desc",
        { scale: 0 },
        { scale: 1, duration: 0.6, opacity: 1, delay: 1 },
      );
      gsap
        .fromTo(
          ".hero__desc--underline",
          { width: 0 },
          { repeat: -1, width: "100%", duration: 4, opacity: 1, delay: 1 },
        )
        .yoyo(true);
      gsap.fromTo(
        ".hero__desc--bottom",
        { x: 200 },
        { x: 0, duration: 0.5, opacity: 1, delay: 1.5 },
      );
      gsap
        .fromTo(
          ".hero__down--icon",
          { y: -10 },
          {
            y: 50,
            repeat: -1,
            duration: 1.5,
          },
        )
        .yoyo(true);
      gsap.fromTo(
        ".hero__down",
        { y: 10 },
        { y: 0, duration: 1, opacity: 1, delay: 10 },
      );
    },
    { scope: heroRef },
  );
  const handleMoveDown = () => {
    gsap.effects.moveDown(".hero__down");
  };
  return (
    <div
      ref={heroRef}
      className="relative mx-auto max-w-7xl px-5 font-clashDisplay font-bold"
    >
      <p
        className="hero__name mb-4 text-lg font-semibold uppercase tracking-tight text-orange-400 opacity-0 md:text-2xl"
        onMouseEnter={handleMoveDown}
      >
        La Mai Win
      </p>
      <div className="mb-8 flex flex-col overflow-hidden">
        <p className="hero__title--top w-min text-center text-5xl font-bold opacity-0 sm:text-8xl md:text-9xl lg:text-[10rem]">
          Frontend
        </p>
        <p className="hero__title--bottom ml-10 w-min text-center text-5xl font-bold opacity-0 sm:text-8xl md:text-9xl lg:ml-16 lg:text-[10rem]">
          Developer
        </p>
      </div>
      <div className="hero__desc flex flex-col items-end gap-1 text-right text-lg font-normal opacity-0 md:text-2xl lg:text-4xl">
        <p className="hero__desc--top relative">
          Opening for job.
          <span className="hero__desc--underline absolute bottom-0 left-0 z-[-1] h-[2px] w-full -rotate-3 bg-orange-400 md:h-1"></span>
        </p>
        <p className="hero__desc--bottom">
          <span className="-rotate-6 text-xl font-bold text-orange-400 md:text-3xl lg:text-5xl">
            over 1 year
          </span>{" "}
          experience.
        </p>
      </div>
      <div className="hero__down absolute -bottom-1/3 left-0 flex items-center overflow-hidden font-light opacity-0">
        <MoveDown strokeWidth={0.5} size={35} className="hero__down--icon" />
        <span>
          Keep <br /> scrolling
        </span>
      </div>
    </div>
  );
};

export default Hero;
