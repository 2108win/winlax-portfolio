import React from "react";
import { TextAnimate } from "@/components/base/animations/text-animate";

// const aboutDataPrimary = [
//   {
//     primaryText: "Name",
//     description: "Lã Mai Win",
//   },
//   {
//     primaryText: "Email",
//     description: "winlax2108@gmail.com",
//   },
//   {
//     primaryText: "Github",
//     description: "https://github.com/2108win/",
//   },
//   {
//     primaryText: "LinkedIn",
//     description: "https://www.linkedin.com/in/2108win/",
//   },
// ];

const aboutDataSecondary = [
  {
    secondaryText: "Frontend Tools",
    description:
      "JavaScript(ES6+), TypeScript, HTML5, React.js, Next.js, Git/Gitlab/Github.",
  },
  {
    secondaryText: "UI Libraries",
    description:
      "CSS3/SCSS, Framer Motion, GSAP, Styled Components, TailwindCSS(Shadcn/ui, Radix, DaisyUI, Material UI).",
  },
  {
    secondaryText: "Other...",
    description:
      "React-form-hook, Zustand, Zod, Tanstack/react-table, Pug, Angular, Vercel, Figma, Adobe XD.",
  },
  // {
  //   secondaryText: "Interests",
  //   description: "Web Development, Design & Animation, E-Commerce.",
  // },
  {
    secondaryText: "Languages",
    description: "Vietnamese, English (Basic), Japanese (3Q ~ N3).",
  },
];

const aboutDataPrimary = [
  {
    description: " Hi, Win Lã here!",
  },
  {
    description:
      "Hey there! I'm a passionate frontend developer from Vietnam with over a year of experience. I love creating beautiful interfaces that wow users and blend style with usability.",
  },
  {
    description:
      "When I'm in the zone, I can code away for hours and my productivity stays sky-high. I enjoy tackling creative challenges and finding innovative solutions in web development.",
  },
  {
    description:
      "In my journey so far, I've soaked up tons of knowledge about web design and frontend programming. Each project I dive into is a chance to learn, collaborate with diverse thinkers, and uncover new layers of personal growth.",
  },
  {
    description:
      "Beyond coding, I'm a tech enthusiast who loves exploring the latest gadgets through movies and staying tuned to trends in smartphones, laptops, and AI.",
  },
  {
    description:
      "I'm surprised you actually read all of that, well thanks for your patience 😅🥺",
  },
  {
    description:
      "Whether it's a full-time gig or a freelance project anywhere in the world, I'm ready to take on challenges, so let's connect and build something together!",
  },
  {
    description: "Maybe. But that's the tech life for you!",
  },
  {
    description: "Cheers! 🥂🥂",
  },
];

const AboutDetail = () => {
  return (
    <div className="relative mx-auto flex h-full w-full max-w-5xl flex-col items-center space-y-10 px-10">
      {/* <button onClick={toggleTimeline}>toggleTimeline</button> */}
      <div className="flex w-full flex-col-reverse gap-12 md:flex-row">
        <div className="about__secondary flex flex-col gap-10 sm:basis-1/4">
          {aboutDataSecondary.map((item, i) => (
            <div
              key={i + "about__secondaryText" + i}
              className="flex flex-col gap-5"
            >
              <TextAnimate
                id={"about__secondaryText" + i}
                className="text-pretty"
                classText="text-xl leading-normal md:text-2xl"
              >
                {item.secondaryText}
              </TextAnimate>
              <TextAnimate
                id={"about__secondaryDescription" + i}
                className="gap-1 text-pretty text-xl leading-normal text-muted-foreground md:text-2xl"
                split={" "}
                classText="text-xl leading-normal md:text-2xl"
              >
                {item.description}
              </TextAnimate>
            </div>
          ))}
        </div>
        <div className="about__primary flex flex-col gap-5 sm:basis-3/4">
          {aboutDataPrimary.map((item, i) => (
            <TextAnimate
              id={"about__primaryText--wrapper"}
              key={i + "about__primaryText" + i}
              className="gap-1 text-pretty leading-normal"
              split={" "}
              classText="text-2xl font-medium md:text-3xl"
            >
              {item.description}
            </TextAnimate>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutDetail;
