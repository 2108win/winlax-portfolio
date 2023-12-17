import { motion } from "framer-motion";
import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";
import React from "react";
import ThemeToggler from "../src/hooks/ThemeToggler";
type Props = {};

export default function Header({}: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] flex items-center justify-between p-6 mx-auto lg:p-9 max-w-7xl">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center"
      >
        <Link to="hero" className="linkLogo relative mr-3 overflow-hidden">
          <Image className="cursor-pointer" src="/logo.png" width={50} height={50} alt="logo" />
        </Link>
        <ThemeToggler />
      </motion.div>

      <motion.a
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="buttonMain"
        href="https://www.topcv.vn/xem-cv/VVEDAABTBlBVAA9TUVMFVQBXVAFWAAFWDANWUAb4bf"
        download
      >
        Download CV
      </motion.a>
    </header>
  );
}
