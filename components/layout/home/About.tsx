import React from "react";
import { ArrowUpRight } from "lucide-react";
import LinkTransition from "@/components/utils/animations/link-transition";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="relative mx-auto flex h-full w-full max-w-5xl flex-col items-center px-10">
      <div className="flex w-full flex-col space-y-10">
        <div className="relative w-full space-y-6 text-xl !leading-normal sm:text-2xl md:text-3xl lg:text-5xl">
          <p className="about__text text-pretty">Hi, Win Lã here!</p>
          <p className="about__text text-pretty">
            I am a Frontend Developer with a passion for creating beautiful and
            user-friendly websites.
          </p>
          <p className="about__text text-pretty">
            For whatever reason it is you are here, welcome.
          </p>
        </div>
        <LinkTransition
          href="/about"
          icon={
            <ArrowUpRight className="size-7 transition-all duration-500 group-hover:rotate-45 md:size-10" />
          }
        >
          About me
        </LinkTransition>
      </div>
    </div>
  );
};

export default About;
