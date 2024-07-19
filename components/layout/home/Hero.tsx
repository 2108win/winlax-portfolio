"use client";
import SparklesText from "@/components/utils/animations/text/sparkles-text";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MoveDown } from "lucide-react";
import { useRef } from "react";
type Props = {};

const Hero = (props: Props) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textTop = "Frontend".split("");
  const textBottom = "Developer".split("");
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
        {
          x: 0,
          duration: 0.5,
          opacity: 1,
          letterSpacing: 0,
          delay: 0.2,
          stagger: 0.1,
        },
      );
      gsap.fromTo(
        ".hero__title--top--letter",
        { x: -200 },
        { x: 0, duration: 0.5, opacity: 1, delay: 0.4, stagger: 0.1 },
      );
      gsap.fromTo(
        ".hero__title--bottom--letter",
        { x: 200 },
        { x: 0, duration: 0.5, opacity: 1, delay: 0.8, stagger: 0.1 },
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
      className="relative flex h-full min-h-svh w-fit max-w-5xl items-center justify-center px-10 font-clashDisplay font-bold sm:w-full"
    >
      <div className="relative mt-20 flex h-fit w-fit flex-col sm:w-full">
        <div
          className="hero__name mb-4 opacity-0 md:text-2xl"
          onMouseEnter={handleMoveDown}
        >
          <SparklesText
            className="text-3xl uppercase"
            colors={{ first: "#0ABFBC", second: "#FC354C" }}
            text="La Mai Win"
          />
        </div>
        <div className="mb-8 flex w-full flex-col overflow-hidden">
          <p className="hero__title--top flex w-min text-center text-5xl font-bold sm:text-8xl md:text-9xl lg:text-[10rem]">
            {textTop.map((letter, index) => (
              <span
                key={"top" + index}
                className="hero__title--top--letter opacity-0"
              >
                {letter}
              </span>
            ))}
          </p>
          <p className="hero__title--bottom ml-5 flex w-min text-center text-5xl font-bold sm:ml-auto sm:text-8xl md:text-9xl lg:text-[10rem]">
            {textBottom.map((letter, index) => (
              <span
                key={"bottom" + index}
                className="hero__title--bottom--letter opacity-0"
              >
                {letter}
              </span>
            ))}
          </p>
        </div>
        <div className="hero__desc flex flex-col items-end gap-1 text-right text-lg font-normal opacity-0 md:text-2xl lg:text-4xl">
          <p className="hero__desc--top relative">
            Opening for job.
            <span className="hero__desc--underline absolute bottom-0 left-0 z-[-1] h-[2px] w-full -rotate-3 bg-primary md:h-1"></span>
          </p>
          <p className="hero__desc--bottom">
            <span className="-rotate-6 text-xl font-bold text-primary md:text-3xl lg:text-5xl">
              over 1 year
            </span>{" "}
            experience.
          </p>
        </div>
        <div className="hero__down absolute -bottom-1/3 -left-5 flex items-center overflow-hidden font-light opacity-0 sm:bottom-0">
          <MoveDown strokeWidth={0.5} size={35} className="hero__down--icon" />
          <span>
            Keep <br /> scrolling
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
