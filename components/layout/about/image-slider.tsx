"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ShineBorder from "@/components/utils/animations/shine-border";
import { cn } from "@/lib/utils";
import { sliderDataImage } from "@/utils/sliderDataImage";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
type Props = {
  options?: EmblaOptionsType;
  className?: string;
  itemClassName?: string;
};
const TWEEN_FACTOR_BASE = 0.42;
const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);
const ImageSlider = ({ options, className, itemClassName }: Props) => {
  const [api, setApi] = useState<CarouselApi>();
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".item__image__slide") as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);
  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === "scroll";

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `scale(${scale})`;
        });
      });
    },
    [],
  );

  useEffect(() => {
    if (!api) {
      return;
    }
    setTweenNodes(api);
    setTweenFactor(api);
    tweenScale(api);
    api
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api, tweenScale]);
  return (
    <Carousel
      opts={options}
      plugins={[
        Autoplay({
          delay: 7000,
          stopOnInteraction: false,
        }),
      ]}
      setApi={setApi}
      className={cn("group/carousel m-auto max-w-md", className)}
    >
      <CarouselContent className="py-10">
        {sliderDataImage.map((src, index) => (
          <CarouselItem
            className={cn(
              "basis-[70%] cursor-grab active:cursor-grabbing",
              itemClassName,
            )}
            key={index}
          >
            <ShineBorder
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              className="item__image__slide z-50 m-1 overflow-hidden shadow-xl transition-all duration-500 ease-linear"
              borderRadius={30}
              borderWidth={5}
            >
              <Image
                src={src}
                alt={`winlax-${index}`}
                width={500}
                height={500}
                priority
                placeholder="blur"
                className="pointer-events-none aspect-square object-cover object-center"
              />
            </ShineBorder>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="transition-all duration-500 group-hover/carousel:visible group-hover/carousel:scale-100 group-hover/carousel:opacity-100 sm:invisible sm:scale-50 sm:opacity-0" />
      <CarouselNext className="transition-all duration-500 group-hover/carousel:visible group-hover/carousel:scale-100 group-hover/carousel:opacity-100 sm:invisible sm:scale-50 sm:opacity-0" />
    </Carousel>
  );
};

export default ImageSlider;
