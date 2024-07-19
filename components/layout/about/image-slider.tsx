"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ShineBorder from "@/components/utils/animations/shine-border";
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
type Props = {
  slides: string[];
  options?: EmblaOptionsType;
};
const TWEEN_FACTOR_BASE = 0.52;
const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);
const ImageSlider = (props: Props) => {
  const { slides, options } = props;
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
          delay: 5000,
        }),
      ]}
      setApi={setApi}
      className="m-auto max-w-md"
    >
      <CarouselContent className="py-10">
        {slides.map((src, index) => (
          <CarouselItem
            className="basis-[70%] cursor-grab active:cursor-grabbing"
            key={index}
          >
            {/* <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card> */}
            <ShineBorder
              color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
              className="item__image__slide z-50 m-1 overflow-hidden shadow-xl transition-all duration-1000 ease-linear"
              borderRadius={30}
              borderWidth={3}
            >
              <Image
                src={src || "/image-placeholder.png"}
                alt={"winlax"}
                width={500}
                height={500}
                priority
                placeholder="blur"
                blurDataURL="/image-placeholder.png"
                className="pointer-events-none aspect-square object-cover object-center"
              />
            </ShineBorder>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ImageSlider;
