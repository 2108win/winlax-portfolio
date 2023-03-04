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
const ImageLinks = ["/images/About-1.jpg", "/images/About-2.jpg", "/images/About-3.jpg"];
export default function About({}: Props) {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen gap-8 px-10 mx-auto text-center md:text-left md:flex-row max-w-7xl">
      <h3 className="absolute tracking-[20px] uppercase top-24 text-gray-500 text-2xl">About</h3>
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
        className=""
      >
        <Swiper
          spaceBetween={30}
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
          className="w-[350px] h-[250px] md:w-[400px] md:h-[300px] xl:w-[500px] xl:h-[375px] rounded-2xl border dark:border-[#f5f6f120] shadow-xl overflow-hidden"
        >
          {ImageLinks.map((link) => {
            return (
              <>
                <SwiperSlide>
                  <img className="object-cover w-full h-full rounded-xl" src={link} alt="" />
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          x: 200,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        className=""
      >
        <p className="text-lg md:text-xl text-[#242424] dark:text-[#f5f6f1]">
          Mình là sinh viên sắp tốt nghiệp, có 4 năm học công nghệ thông tin với định hướng công
          nghệ web. Rất thích những giao diện website đẹp. Sự tỉ mỉ, hoàn thiện trong từng chi tiết
          là điều tôi hướng đến để đạt được mong muốn trở thành một front-end developer và hơn thế
          nữa.
        </p>
      </motion.div>
    </div>
  );
}
