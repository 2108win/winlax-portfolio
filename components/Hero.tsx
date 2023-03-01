/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import ImageAvatar from "../public/images/hero-image.jpg";
type Props = {};

const linkImageAvatar = ImageAvatar.src;

export default function Hero({}: Props) {
  const [text] = useTypewriter({
    words: ["Hi 🤗!", "I'm WinLax 😎", "<Love❤️/>", "<Knowledge🤓/>", "<Experience🤩/>"],
    loop: true,
    delaySpeed: 3000,
  });
  return (
    <div
      id="hero"
      className="relative flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center "
    >
      <BackgroundCircles />
      <img
        className="relative object-cover w-40 h-40 mx-auto transition-all rounded-full hover:scale-150 hover:duration-300"
        src={linkImageAvatar}
        alt=""
      />
      <div className="absolute z-20 top-[60%] text-gray-800 dark:text-white">
        <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl">
          <span className="mr-1">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
        <div className="grid grid-cols-2 gap-4 mt-5 md:grid-cols-4">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
