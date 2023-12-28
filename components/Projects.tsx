/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

type Props = {};

const ProjectItems = [
  {
    linkImage: "/images/projects/winlax-portfolio.jpeg",
    title: "WinLax Portfolio",
    description: "Trang web cá nhân của tôi",
    linkGithub: "https://github.com/2108win/WinLax-Portfolio",
    linkPreview: "https://winlax-portfolio.vercel.app/",
  },
  {
    linkImage: "/images/projects/fatme-v2.jpeg",
    title: "WinLax FATMe version 2",
    description: "Trang web FATMe version 2",
    linkGithub: "https://github.com/2108win/FATMe-v2",
    linkPreview: "https://winlax-fatme-v2.vercel.app/",
  },
  {
    linkImage: "/images/projects/fatme-app.jpeg",
    title: "FATME App",
    description: "Thiết kế giao diện app",
    linkGithub:
      "https://drive.google.com/drive/folders/15AmAhWW-5-CrV34x9MG8zbyaDf3aRNI0?usp=share_link",
    linkPreview: "https://xd.adobe.com/view/e4cfaca2-81c2-4aff-ba81-652b5de4b375-b19c/grid",
  },
  {
    linkImage: "/images/projects/watchour.jpeg",
    title: "Watchour",
    description: "Website bán đồng hồ",
    linkGithub: "https://github.com/minhanh32001/Python",
    linkPreview: "https://github.com/minhanh32001/Python/",
  },
  {
    linkImage: "/images/projects/business-landing-page.jpeg",
    title: "Business Landing Page",
    description: "Landing page cho doanh nghiệp từ Figma sang ReactJS",
    linkGithub: "https://github.com/2108win/busniess-landing-page",
    linkPreview: "https://winlax-business-landing-page.vercel.app/",
  },
  {
    linkImage: "/images/projects/LSM.jpeg",
    title: "Library System Management",
    description: "Ứng dụng đồ án môn học Java",
    linkGithub: "https://github.com/2108win/LibrarySystemManage",
    linkPreview: "https://github.com/2108win/LibrarySystemManage",
  },
  {
    linkImage: "/images/projects/fatmee.jpeg",
    title: "FATMEE",
    description: "Trang web đồ án môn học",
    linkGithub: "https://github.com/2108win/fatmee",
    linkPreview: "https://fatmee.vercel.app/",
  },
];

export default function Projects({}: Props) {
  return (
    <div
      id="projects"
      className="relative flex flex-col items-center justify-center gap-8 px-5 mx-auto text-center max-w-7xl lg:px-6"
    >
      <h2 className="tracking-[20px] translate-x-[10px] uppercase text-grayDarkOp80 dark:text-grayLightOp80 text-2xl">
        Projects
      </h2>
      <h1 className="absolute md:right-10 top-0 -translate-y-1/2 text-4xl md:text-7xl font-extrabold italic text-grayDarkOp15 dark:text-grayLightOp15 rotate-[20deg] tracking-[8px] cursor-default z-[1] select-none">
        ##projects
      </h1>
      <div className="grid justify-center grid-cols-1 gap-6 md:grid-cols-2 text-grayDark dark:text-grayLight">
        {ProjectItems.map((item, index) => (
          <>
            <div key={index} className="z-10 flex flex-col gap-3 projectItem">
              <Link
                href={item.linkPreview}
                target="_blank"
                className="group relative min-h-[200px] max-h-[650px] flex rounded-2xl md:rounded-3xl dark:border dark:border-grayDarkOp80 shadow-2xl overflow-hidden bg-grayLight transition-all duration-500 linkImage"
              >
                <img
                  src={item.linkImage}
                  alt={item.title}
                  className="group-hover:scale-110 group-hover:blur-none contrast-[.95] blur-[1px] object-cover object-top aspect-video w-full h-full transition-all duration-500"
                />
                <div className="z-[10] left-4 bottom-4 md:left-5 md:bottom-5 absolute flex flex-col items-start select-none text-grayLight">
                  <h3 className="text-xl font-semibold drop-shadow-2xl md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="w-[300px] text-left drop-shadow-2xl md:text-base text-sm truncate text-ellipsis">
                    {item.description}
                  </p>
                </div>
              </Link>
              <div className="flex rounded-lg md:rounded-3xl bg-grayLight shadow-xl z-[1] buttonProject w-full">
                <Link
                  target="_blank"
                  className="buttonLinkProject flex items-center justify-center relative basis-1/5 p-5 border-r-[1px] border-grayDarkOp15 dark:border-grayLightOp80"
                  href={item.linkGithub}
                >
                  <span className="w-max md:text-xl">Github</span>
                </Link>
                <Link
                  target="_blank"
                  className="relative flex items-center justify-center h-full p-5 transition-all buttonLinkProject"
                  href={item.linkPreview}
                >
                  <span className="w-max md:text-xl">Xem thêm</span>
                  <HiArrowLongRight className="" fontSize={30} />
                </Link>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
