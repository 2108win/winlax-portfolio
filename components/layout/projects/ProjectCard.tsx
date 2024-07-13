"use client";
import { HoverCard3d } from "@/components/utils/animations/hover-card";
import { TextAnimate } from "@/components/utils/animations/text/text-animate";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React, { useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useIsomorphicLayoutEffect } from "framer-motion";
import LinkTransition from "@/components/utils/animations/link-transition";
import { useMousePosition } from "@/hooks/use-mouse-position";
type Props = {
  link: string;
  srcImage: string;
  title: string;
  time: string;
  description?: string;
  isEven: boolean;
};

const ProjectCard = ({ link, srcImage, title, time, isEven }: Props) => {
  const containerRef = useRef(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const update = useCallback(({ x, y }: { x: number; y: number }) => {
    // We need to offset the position to center the info div
    const offsetX = (infoRef.current?.offsetWidth || 0) / 2;
    const offsetY = (infoRef.current?.offsetHeight || 0) / 2;

    // Use CSS variables to position the info div instead of state to avoid re-renders
    infoRef.current?.style.setProperty("--x", `${x - offsetX}px`);
    infoRef.current?.style.setProperty("--y", `${y - offsetY}px`);
  }, []);

  useMousePosition(containerRef, update);
  const idl = `#project__image__arrow${title.split(" ").join("")}`;
  gsap.registerPlugin(useGSAP);
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  useGSAP(() => {
    let mb = gsap.matchMedia();
    mb.add(
      {
        isDesktop: `(min-width: 640px)`,
        isMobile: `(max-width: 639px)`,
      },
      (context) => {
        let { isDesktop, isMobile }: any = context.conditions;
        gsap
          .timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              toggleActions: isDesktop
                ? "restart reverse restart reverse"
                : "play none none none",
              start: "top bottom",
              end: "bottom top",
            },
          })
          .fromTo(
            containerRef.current,
            {
              opacity: 0,
              scale: 0,
              x: isEven ? "100%" : "-100%",
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.5,
              ease: "power4.inOut",
              yoyo: true,
            },
          );
        if (isMobile) {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: infoRef.current,
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play none none reverse",
              },
            })
            .fromTo(
              idl,
              { opacity: 0, scale: 0 },
              { opacity: 1, scale: 1, ease: "bounce.inOut", duration: 1 },
            )
            .to(idl, { rotate: 360, duration: 1.5 });
        }
      },
    );
  });
  return (
    <div ref={containerRef} className="group">
      <LinkTransition
        href={link}
        className="relative flex min-h-52 items-center justify-center"
      >
        <HoverCard3d className="aspect-[5/4] sm:aspect-[5/3]">
          <Image
            src={srcImage}
            alt={title}
            width={500}
            height={400}
            priority
            className={cn(
              "aspect-[5/4] w-full rounded-lg rounded-ss-none border-[0.5px] border-foreground/10 object-cover object-top shadow-inner transition-all duration-1000 group-hover:scale-105 group-hover:saturate-150 sm:aspect-[5/3] dark:md:saturate-50",
              !isEven && "sm:rounded-se-none sm:rounded-ss-lg",
            )}
          />
          {/* text container */}
          <div
            style={{
              transform: "-translateZ(75px)",
              transformStyle: "preserve-3d",
            }}
            className={cn(
              "absolute bottom-4 left-4 z-10 flex w-[calc(90%-2rem)] flex-col text-pretty text-background transition-all dark:text-foreground",
              isEven && "sm:left-auto sm:right-4 sm:items-end",
            )}
          >
            <TextAnimate
              stagger={0.2}
              duration={1}
              className={cn(
                "gap-1 text-pretty font-clashDisplay",
                isEven && "sm:justify-end",
              )}
              classText="text-3xl font-bold sm:text-4xl"
              split={" "}
            >
              {title}
            </TextAnimate>
            <TextAnimate
              stagger={0.2}
              duration={1}
              className={cn("font-clashDisplay", isEven && "sm:justify-end")}
              classText="sm:text-2xl text-xl font-regular"
            >
              {time}
            </TextAnimate>
          </div>
          {/* shadow blur */}
          <div
            className={cn(
              "absolute inset-2 w-full rounded-lg bg-foreground/30 blur-xl dark:bg-background/30 md:inset-auto md:bottom-2 md:h-32 md:rounded-xl md:blur-xl",
            )}
          ></div>
          {/* button arrow */}
          <div
            ref={infoRef}
            style={{
              transform: "translate(var(--x), var(--y)) !important",
            }}
            className={cn(
              "absolute left-0 top-0 flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-3 opacity-0 shadow-inner shadow-background group-hover:opacity-100",
            )}
          >
            <span className="text-lg text-background">View project</span>
            <ArrowUpRight
              style={{
                transform: "translateZ(50px)",
                transformStyle: "preserve-3d",
              }}
              className={cn(
                "size-7 text-background transition-all duration-1000 sm:size-8 md:size-9",
                isEven && "sm:-rotate-45",
              )}
            />
          </div>
        </HoverCard3d>
      </LinkTransition>
    </div>
  );
};

export default ProjectCard;
