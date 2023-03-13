/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
type Props = {};
const ImageLinks = [
  "/images/about/About-1.jpg",
  "/images/about/About-2.jpg",
  "/images/about/About-3.jpg",
  "/images/about/About-4.jpg",
  "/images/about/About-5.jpg",
];
export default function About({}: Props) {
  return (
    <div className="lg:px-6 max-w-7xl relative flex flex-col items-center justify-center gap-8 px-5 mx-auto text-center">
      <h2 className="tracking-[20px] translate-x-[10px] uppercase text-grayDarkOp80 dark:text-grayLightOp80 text-2xl">
        About
      </h2>
      <h1 className="absolute top-0 md:right-10 -translate-y-1/2 text-4xl md:text-7xl font-extrabold italic text-grayDarkOp15 dark:text-grayLightOp15 rotate-[20deg] tracking-[8px] cursor-default z-[1] select-none">
        ##about
      </h1>
      <motion.div
        initial={{
          opacity: 0,
          x: -200,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="md:flex-row flex flex-col items-center justify-center gap-5"
      >
        <Swiper
          spaceBetween={20}
          centeredSlides={true}
          autoplay={{
            delay: 9000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="w-[320px] h-[240px] md:w-[400px] md:h-[300px] xl:w-[500px] xl:h-[375px] rounded-2xl dark:border dark:border-grayLightOp15 shadow-xl shrink-0"
        >
          {ImageLinks.map((link) => {
            return (
              <>
                <SwiperSlide>
                  <img className="rounded-xl object-cover w-full h-full" src={link} alt="" />
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
        <p className="md:text-xl md:text-left text-grayDark dark:text-grayLight text-lg">
          Mình là sinh viên sắp tốt nghiệp, có 4 năm học công nghệ thông tin với định hướng công
          nghệ web. Rất thích những giao diện website đẹp. Sự tỉ mỉ, hoàn thiện trong từng chi tiết
          là điều tôi hướng đến để đạt được mong muốn trở thành một front-end developer và hơn thế
          nữa.
        </p>
      </motion.div>
    </div>
  );
}
