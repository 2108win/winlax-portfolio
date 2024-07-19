"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ShineBorder from "@/components/utils/animations/shine-border";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import NotFound from "../not-found";
export default function TryingPage() {
  return (
    <div className="mt-32 flex w-full flex-col items-center justify-center gap-10">
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-[70%] max-w-sm p-1 md:w-[65%] lg:w-[70%]"
      >
        <CarouselContent>
          {Array.from({ length: 4 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-10">
                {/* <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card> */}
                <ShineBorder
                  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                  className="z-50 overflow-hidden shadow-xl transition-all duration-1000 ease-linear"
                  borderRadius={30}
                  borderWidth={3}
                >
                  <Image
                    src={"/winlax-latest-1.JPEG"}
                    alt={"winlax"}
                    width={500}
                    height={500}
                    priority
                    className="pointer-events-none"
                  />
                </ShineBorder>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <NotFound text="This page is still in development" />;
    </div>
  );
}
