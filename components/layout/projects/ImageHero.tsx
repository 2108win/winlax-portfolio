/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import BlurFade from "@/components/utils/animations/blur-fade";
import SparklesText from "@/components/utils/animations/text/sparkles-text";
import Image from "next/image";
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
        priority
        placeholder="blur"
        blurDataURL="/image-placeholder.png"
        className="-z-50 h-full w-full object-cover object-top blur-[2px]"
      />
      <div className="absolute inset-0 z-[999] flex flex-col items-center justify-center bg-foreground/50 px-10 dark:bg-background/50">
        <BlurFade delay={0.5} inView>
          <SparklesText
            text={title || "Winlax Project"}
            className="text-center font-clashDisplay text-5xl font-bold drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-8xl"
            colors={{ first: "#0ABFBC", second: "#FC354C" }}
          />
        </BlurFade>
      </div>
    </div>
  );
};

export default ImageHero;
