import React from "react";
import LinkAnimate from "@/components/base/animations/link-animate";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center space-y-10 px-10">
      <div className="flex flex-col space-y-10 sm:max-w-[70%]">
        <div className="relative w-full space-y-6 text-xl !leading-normal md:text-4xl lg:text-5xl">
          <p className="about__text text-pretty">Hi, Win Lã here!</p>
          <p className="about__text text-pretty">
            I am a Frontend Developer with a passion for creating beautiful and
            user-friendly websites.
          </p>
          <p className="about__text text-pretty">
            For whatever reason it is you are here, welcome.
          </p>
        </div>
        <LinkAnimate id="home__link--home-home" href="/about">
          About me
        </LinkAnimate>
      </div>
    </div>
  );
};

export default About;
