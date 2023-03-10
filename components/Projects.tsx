/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

type Props = {};

const ProjectItems = [
  {
    linkImage: "/images/Project-1.jpeg",
    title: "WinLax Portfolio",
    description: "Trang web cá nhân của tôi",
    linkGithub: "https://github.com/2108win/WinLax-Portfolio",
    linkPreview: "https://winlax-portfolio.vercel.app/",
  },
  {
    linkImage: "/images/Project-2.jpeg",
    title: "FATMEE",
    description: "Trang web đồ án môn học",
    linkGithub: "https://github.com/2108win/fatmee",
    linkPreview: "https://fatmee.me",
  },
  {
    linkImage: "/images/Project-3.gif",
    title: "FATME App",
    description: "Thiết kế giao diện app",
    linkGithub:
      "https://drive.google.com/drive/folders/15AmAhWW-5-CrV34x9MG8zbyaDf3aRNI0?usp=share_link",
    linkPreview: "https://xd.adobe.com/view/e4cfaca2-81c2-4aff-ba81-652b5de4b375-b19c/grid",
  },
];

export default function Projects({}: Props) {
  return (
    <div className="max-w-7xl lg:px-6 relative flex flex-col items-center justify-center gap-8 px-5 mx-auto text-center">
      <h3 className="tracking-[20px] translate-x-[10px] uppercase text-gray-500 text-2xl">
        Projects
      </h3>
      <h1 className="absolute md:right-10 top-0 -translate-y-1/2 text-4xl md:text-7xl font-extrabold italic text-[#24242415] dark:text-[#f5f6f115] rotate-[20deg] tracking-[8px] cursor-default z-[1]">
        ##projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-10 text-[#242424] dark:text-[#f5f6f1] justify-center">
        {ProjectItems.map((item, index) => (
          <>
            <div key={index} className="projectItem lg:gap-10 lg:flex-row z-10 flex flex-col gap-3">
              <Link
                href={item.linkPreview}
                target="_blank"
                className="relative max-h-[650px] border border-[#24242420] flex rounded-2xl lg:rounded-3xl dark:border dark:border-[#f5f6f120] shadow-2xl overflow-hidden bg-[#f5f6f1] transition-all duration-500 lg:basis-4/5"
              >
                <img
                  src={item.linkImage}
                  alt="Project 1"
                  className="hover:scale-110 object-cover w-full h-full transition-all duration-500"
                />
                <div className="left-3 bottom-3 md:left-5 md:bottom-5 lg:bottom-10 lg:left-10 absolute flex flex-col items-start">
                  <h3 className="drop-shadow-2xl md:text-2xl lg:text-4xl text-xl text-gray-500">
                    {item.title}
                  </h3>
                  <p className="drop-shadow-2xl md:text-base lg:text-lg text-xs text-gray-500">
                    {item.description}
                  </p>
                </div>
              </Link>
              <div className="lg:basis-1/5 flex rounded-lg lg:rounded-3xl bg-[#f5f6f1] drop-shadow-xl lg:flex-col-reverse z-[1] buttonProject w-full">
                <Link
                  target="_blank"
                  className="buttonLinkProject flex items-center justify-center relative basis-1/5 p-5 border-r-[1px] lg:border-r-0 lg:border-t-[1px] border-[#24242420] dark:border-[#f5f6f180]"
                  href={item.linkGithub}
                >
                  <span className="w-max lg:text-2xl">Github</span>
                </Link>
                <Link
                  target="_blank"
                  className="buttonLinkProject lg:flex-col-reverse relative flex items-center justify-center h-full p-5 transition-all"
                  href={item.linkPreview}
                >
                  <span className="w-max lg:text-2xl lg:-rotate-90 lg:translate-y-[20px]">
                    Xem thêm
                  </span>
                  <HiArrowLongRight
                    className="lg:-rotate-90 lg:-translate-y-[20px]"
                    fontSize={30}
                  />
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
