"use client";
import React, { useRef } from "react";
import LinkAnimate from "@/components/base/animations/link-animate";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { BorderShadowGradient } from "@/components/base/animations/border-shadow-gradient";
import { HoverCard3d } from "@/components/base/animations/hover-card";

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
      let mb = gsap.matchMedia();
      mb.add(
        {
          isDesktop: `(min-width: 640px)`,
          isMobile: `(max-width: 639px)`,
        },
        (context) => {
          let { isDesktop, isMobile }: any = context.conditions;
          if (isDesktop) {
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
          } else if (isMobile) {
            gsap.to(".about__image", {
              borderRadius: 30,
            });
          }
        },
      );
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
        <HoverCard3d className="relative flex h-full select-none items-center justify-center py-10 transition-all duration-200 ease-linear">
          <BorderShadowGradient className="about__image w-[70%] overflow-hidden rounded-3xl shadow-xl transition-all duration-1000 ease-linear md:w-[60%] lg:w-[50%]">
            <Image
              src={"/winlax-latest.png"}
              alt={"winlax"}
              width={500}
              height={500}
              priority
            />
          </BorderShadowGradient>
        </HoverCard3d>
        <LinkAnimate
          id="about__link--home"
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
