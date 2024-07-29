"use client";
import LinkTransition from "@/components/utils/animations/link-transition";
import SparklesText from "@/components/utils/animations/text/sparkles-text";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef } from "react";
import { PiCaretCircleDoubleDownFill } from "react-icons/pi";
import ImageSlider from "./image-slider";
export default function AboutHero() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const textTop = "Win".split("");
  const textBottom = "Lã Mai".split("");
  gsap.registerPlugin(useGSAP);
  useGSAP(
    () => {
      gsap.fromTo(
        ".hero__title--top--letter",
        { opacity: 0, y: -200 },
        { opacity: 1, y: 0, duration: 2, stagger: 0.1 },
      );
      gsap.fromTo(
        ".hero__title--bottom--letter",
        { opacity: 0, y: 300 },
        { opacity: 1, y: 0, duration: 2, stagger: 0.1 },
      );
    },
    {
      scope: aboutRef,
    },
  );

  return (
    <div
      ref={aboutRef}
      className="relative flex min-h-svh flex-col items-center justify-center px-5"
    >
      <div className="relative flex h-fit flex-col items-center">
        <div className="z-10 flex flex-col items-center font-clashDisplay text-6xl font-bold md:text-8xl lg:text-9xl">
          <p className="hero__title--bottom flex w-min gap-1 text-center">
            {textBottom.map((letter, index) => {
              return letter === " " ? (
                <span key={letter + "bottom" + index}>&nbsp;</span>
              ) : (
                <span
                  key={letter + letter[index + 1] + "bottom" + index}
                  className="hero__title--bottom--letter opacity-0"
                >
                  {letter}
                </span>
              );
            })}
          </p>
          <p className="hero__title--top flex w-min gap-1 text-center">
            {textTop.map((letter, index) => (
              <span
                key={"top" + index}
                className="hero__title--top--letter opacity-0"
              >
                {letter}
              </span>
            ))}
          </p>
        </div>
        {/* avatar */}
        <div className="relative flex h-full select-none items-center justify-center transition-all duration-200 ease-linear">
          <div className="pointer-events-none absolute inset-0 z-[-10] justify-center rounded-full">
            <div
              style={{
                background:
                  "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 1turn)",
                filter: "blur(75px)",
                mixBlendMode: "normal",
              }}
              className="pointer-events-none absolute inset-0 animate-cursorAnimate-one rounded-full opacity-70"
            />
            <div
              style={{
                background:
                  "linear-gradient(90deg, #c7003b 1.98%, #c7003b 1.99%, #900c3e 100%)",
                filter: "blur(150px)",
              }}
              className="pointer-events-none absolute inset-0 animate-cursorAnimate-two rounded-full opacity-70"
            />
          </div>

          <div className="flex max-w-5xl items-center justify-center px-5">
            <ImageSlider options={{ loop: true }} />
          </div>
        </div>
        {/* link to cv */}
        <LinkTransition
          underlineClassName="after:bg-foreground"
          href="/cv"
          hasAnimate={false}
        >
          <SparklesText
            text="My Resume here!"
            className="text-xl md:text-2xl"
            colors={{ first: "#ff873c", second: "#84CC16" }}
            textColorClass="text-foreground font-clashDisplay font-semibold"
          />
        </LinkTransition>
      </div>
      <Link
        href={"#journey"}
        id="journey"
        className="absolute bottom-1 cursor-pointer outline-none"
      >
        <PiCaretCircleDoubleDownFill className="h-10 w-10 animate-bounce text-muted-foreground" />
      </Link>
    </div>
  );
}
