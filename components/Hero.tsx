/* eslint-disable @next/next/no-img-element */
import { Link } from "react-scroll";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
type Props = {};

export default function Hero({}: Props) {
  const [text] = useTypewriter({
    words: ["Hi 🤗!", "I'm WinLax 😎", "<Love❤️/>", "<Knowledge🤓/>", "<Experience🤩/>"],
    loop: true,
    delaySpeed: 3000,
  });
  return (
    <div
      id="hero"
      className=" relative flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center"
    >
      <BackgroundCircles />
      <img
        className="hover:scale-150 hover:duration-300 relative object-cover w-40 h-40 mx-auto transition-all rounded-full"
        src="/hero-image.jpg"
        alt=""
      />
      <div className="absolute z-20 top-[60%] text-gray-800 dark:text-white">
        <h1 className="md:text-5xl lg:text-6xl text-4xl font-semibold">
          <span className="mr-1 transition-all">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>
        <div className="md:grid-cols-4 grid grid-cols-2 gap-4 mt-5">
          <Link to="about" spy={true} smooth={true} duration={500}>
            <button className="heroButton w-full">About</button>
          </Link>
          <Link to="experience" spy={true} smooth={true} duration={500}>
            <button className="heroButton w-full">Experience</button>
          </Link>
          <Link to="projects" spy={true} smooth={true} duration={500}>
            <button className="heroButton w-full">Projects</button>
          </Link>
          <Link to="skills" spy={true} smooth={true} duration={500}>
            <button className="heroButton w-full">Skills</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
