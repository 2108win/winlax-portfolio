"use client";
import { useGSAP } from "@gsap/react";
import { useIsomorphicLayoutEffect } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";

type Props = {
  src: string;
};

const ImageFadeZoom = ({ src }: Props) => {
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
  console.log("🚀 ~ ImageFadeZoom ~ imageRef.current:", imageRef.current);
  return (
    <div
      ref={imageRef}
      className="relative flex h-auto max-h-[40rem] w-full overflow-hidden"
    >
      <Image
        src={src}
        alt="winlax project detail"
        width={1920}
        height={1080}
        className="h-full w-full object-cover object-top transition-all duration-500 sm:aspect-[5/4] md:aspect-[5/3] md:rounded-lg"
      />
    </div>
  );
};

export default ImageFadeZoom;
