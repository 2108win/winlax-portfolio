"use client";
import React, { useRef } from "react";
import LinkAnimate from "../LinkAnimate";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { CardContainer } from "@/components/ui/3d-card";

export default function AboutHero() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const textTop = "Win".split("");
  const textBottom = "Lã Mai".split("");
  gsap.registerPlugin(useGSAP);
  // const { contextSafe } = useGSAP({ scope: aboutRef });
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

      gsap
        .timeline()
        .to(".about__image", {
          borderRadius: "30% 70% 53% 47% / 26% 46% 54% 74%",
          duration: 3,
        })
        .to(".about__image", {
          borderRadius: "30% 70% 70% 30% / 30% 52% 48% 70%",
          duration: 3,
        })
        .to(".about__image", {
          borderRadius: "50% 50% 20% 80% / 25% 80% 25% 75%",
          duration: 3,
        })
        .to(".about__image", {
          borderRadius: "67% 33% 47% 53% / 37% 20% 80% 63%",
          duration: 3,
        })
        .to(".about__image", {
          borderRadius: "39% 61% 82% 18% / 74% 40% 60% 26%",
          duration: 3,
        })
        .to(".about__image", {
          borderRadius: "50%",
          duration: 3,
        })
        .to(".about__image", {
          borderRadius: "50% 50% 53% 47% / 72% 69% 31% 28%",
          duration: 3,
        })
        .to(".about__image", {
          borderRadius: "50% 50% 53% 47% / 26% 22% 78% 74%",
          duration: 3,
        })
        .to(".about__image", {
          borderRadius: "50% 50% 53% 47% / 26% 69% 31% 74%",
          duration: 3,
        })
        .to(".about__image", {
          borderRadius: "20% 80% 20% 80% / 20% 80% 20% 80%",
          duration: 3,
        })
        .repeat(-1);
      // gsap
      //   .fromTo(
      //     ".hero__title--top--letter",
      //     { y: 5 },
      //     { y: -5, duration: 0.5, opacity: 1, delay: 0.2, stagger: 0.1 },
      //   )
      //   .delay(4)
      //   .yoyo(true)
      //   .repeat(-1)
      //   .repeatDelay(2);
      // gsap
      //   .fromTo(
      //     ".hero__title--bottom--letter",
      //     { y: 5 },
      //     { y: -5, duration: 0.5, opacity: 1, delay: 0.2, stagger: 0.1 },
      //   )
      //   .delay(4)
      //   .yoyo(true)
      //   .repeat(-1)
      //   .repeatDelay(2);
    },
    {
      scope: aboutRef,
    },
  );
  return (
    <div
      ref={aboutRef}
      className="relative flex min-h-[calc(100svh-104px)] flex-col items-center justify-center px-5"
    >
      <div className="relative flex h-fit flex-col items-center">
        <div className="flex flex-col items-center font-clashDisplay text-7xl font-bold md:text-8xl lg:text-9xl">
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
        <CardContainer className="flex h-full select-none items-center justify-center">
          <Image
            src={"/winlax-latest.png"}
            alt={"winlax"}
            width={500}
            height={500}
            className="about__image w-[70%] rounded-3xl shadow-xl transition-all duration-1000 ease-linear md:w-[60%] lg:w-[50%]"
          />
        </CardContainer>
        <LinkAnimate
          href="/cv-winlax-frontend-developer.pdf"
          className="text-2xl font-semibold"
          download
          target="_blank"
        >
          Download Resume
        </LinkAnimate>
      </div>
    </div>
  );
}
