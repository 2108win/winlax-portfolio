"use client";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { useIsomorphicLayoutEffect } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

type Props = {
  src: string;
  containerClassName?: string;
  className?: string;
  nameImage?: string;
};

const ImageFadeZoom = ({
  src,
  containerClassName,
  className,
  nameImage,
}: Props) => {
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
        { scale: 0.7, opacity: 0.5 },
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
        "relative flex h-auto max-h-[60rem] w-auto overflow-hidden md:max-h-[80rem]",
        containerClassName,
      )}
    >
      <Image
        src={src}
        alt={nameImage || "winlax project detail"}
        width={1920}
        height={1080}
        placeholder="blur"
        blurDataURL="/image-placeholder.png"
        className={cn(
          "h-full w-full object-cover object-top transition-all duration-500",
          className,
        )}
      />
    </div>
  );
};

export default ImageFadeZoom;
