import ImageSlider from "@/components/layout/about/image-slider";
import LinkTransition from "@/components/utils/animations/link-transition";
import { ArrowUpRight } from "lucide-react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="relative mx-auto flex h-full w-full max-w-5xl flex-col items-center px-10">
      <div className="flex w-full flex-col items-center space-y-5 md:space-y-10">
        <div className="relative w-full space-y-6 text-lg !leading-normal sm:text-xl md:text-2xl lg:text-3xl">
          <p className="about__text text-pretty">Hi👋🏻, Win Lã here!</p>
          <p className="about__text text-pretty">
            I am a Frontend Developer with a passion for creating beautiful and
            user-friendly websites, with over 1 year of experience in developing
            responsive and accessible web applications.
          </p>
          <p className="about__text text-pretty">
            For whatever reason it is you are here, welcome.
          </p>
        </div>
        <ImageSlider
          className="max-w-5xl"
          itemClassName="lg:basis-1/3"
          options={{ loop: true }}
        />
        <LinkTransition
          href="/about"
          className="group"
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
