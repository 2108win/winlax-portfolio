import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";
import Switcher from "../src/hooks/Switcher";
type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 z-20 flex items-start justify-between p-5 mx-auto max-w-7xl">
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
        <Link href="#hero" className="mr-3">
          <Image src="/images/logo.png" width={50} height={50} alt="logo" />
        </Link>
        {/* Social Icon */}
        {/* <SocialIcon url="https://www.facebook.com/2108win/" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://www.instagram.com/win_lax/" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="https://github.com/2108win" fgColor="gray" bgColor="transparent" /> */}
        {/* icon dark mode */}
        {/* <Switcher /> */}
      </motion.div>

      <motion.button
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
        className="buttonMain "
      >
        Download CV
      </motion.button>
    </header>
  );
}