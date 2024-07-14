"use client";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { useIsomorphicLayoutEffect } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";

type Props = {
  src: string;
  classNameContainer?: string;
  className?: string;
};

const ImageFadeZoom = ({ src, classNameContainer, className }: Props) => {
  const imageRef = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(useGSAP);
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 95%",
          end: "bottom 5%",
          toggleActions: "play none none reverse",
        },
      })
      .fromTo(
        imageRef.current,
        { scale: 0.5, opacity: 0.5 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "power4.in" },
      )
      .fromTo(
        imageRef.current?.firstChild as HTMLImageElement,
        { scale: 1.5 },
        { scale: 1, duration: 1, ease: "power4.out" },
      );
  }, [imageRef]);
  return (
    <div
      ref={imageRef}
      className={cn(
        "relative flex h-auto max-h-[60vh] w-full overflow-hidden md:max-h-[80vh]",
        classNameContainer,
      )}
    >
      <Image
        src={src}
        alt="winlax project detail"
        width={1920}
        height={1080}
        className={cn(
          "h-full w-full object-cover object-top transition-all duration-500",
          className,
        )}
      />
    </div>
  );
};

export default ImageFadeZoom;
