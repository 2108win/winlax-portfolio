/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Image from "next/image";
import React from "react";
import SparklesText from "@/components/ui/sparkles-text";
import BlurFade from "@/components/utils/animations/blur-fade";
type Props = {
  src: string;
  title?: string;
};

const ImageHero = ({ title, src }: Props) => {
  return (
    <div className="relative flex aspect-square h-full w-full flex-col items-center gap-5 sm:aspect-auto sm:h-svh">
      <Image
        src={src || "/image-placeholder.png"}
        alt={title || "winlax-image-project"}
        width={1920}
        height={1080}
        sizes="100vw"
        priority
        className="-z-50 h-full w-full object-cover object-top blur-sm"
      />
      <div className="absolute inset-0 z-[999] flex flex-col items-center justify-center">
        <BlurFade delay={0.5} inView>
          <SparklesText
            text={title || "Winlax Project"}
            className="font-clashDisplay text-3xl font-bold drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-8xl"
            colors={{ first: "#A07CFE", second: "#fb923c" }}
          />
        </BlurFade>
      </div>
    </div>
  );
};

export default ImageHero;
