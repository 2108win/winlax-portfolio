import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="bg-grayDarkOp15 lg:px-6 dark:bg-grayLightOp15 h-fit relative flex flex-col items-center justify-center px-5 mx-auto text-center transition-all">
      <div className="max-w-7xl lg:py-6 border-grayDarkOp15 dark:border-grayLightOp15 flex w-full py-5 mx-auto border-b-2">
        <div className="flex items-center">
          <Link to="hero">
            <Image className="cursor-pointer" src="/logo.png" width={50} height={50} alt="logo" />
          </Link>
          <SocialIcon
            url="https://www.facebook.com/2108win/"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.instagram.com/win_lax/"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon url="https://github.com/2108win" fgColor="gray" bgColor="transparent" />
        </div>
      </div>
      <h1 className="text-3xl md:text-7xl font-extrabold  z-[1] p-5 select-none">
        🫶
        <span className="italic text-grayDarkOp80 dark:text-grayLightOp80 tracking-[8px]">
          ILoveYou
        </span>
        🫶
      </h1>
    </div>
  );
}
