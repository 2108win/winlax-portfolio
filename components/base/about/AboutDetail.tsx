import React from "react";

const aboutDataPrimary = [
  {
    primaryText: "Name",
    description: "Lã Mai Win",
  },
  {
    primaryText: "Email",
    description: "winlax2108@gmail.com",
  },
  {
    primaryText: "Github",
    description: "https://github.com/2108win/",
  },
  {
    primaryText: "LinkedIn",
    description: "https://www.linkedin.com/in/2108win/",
  },
];

const aboutDataSecondary = [
  {
    secondaryText: "Frontend Tools",
    description:
      "JavaScript(ES6+), TypeScript, HTML5, React.js, Next.js, Gatsby.js, Redux.",
  },
  {
    secondaryText: "Interests",
    description: "Web Development, Design & Animation, E-Commerce.",
  },
  {
    secondaryText: "Languages",
    description: "Vietnamese, English (Basic), Japanese (3Q ~ N3).",
  },
];

const aboutDataTertiary = [
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
      "I'm surprised you actually read all of that, well thanks for your patience😅🥹 ",
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
    <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center space-y-10 px-10">
      <div className="flex flex-col-reverse gap-10 sm:max-w-[80%] md:flex-row">
        <div className="flex flex-col gap-10 sm:basis-1/4">
          {aboutDataSecondary.map((item, i) => (
            <div key={item.secondaryText + i} className="flex flex-col gap-5">
              <p className="about__text--secondary text-pretty text-xl">
                {item.secondaryText}
              </p>
              <p className="about__text--secondary--child text-pretty text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5 text-2xl font-medium sm:basis-3/4">
          <p className="about__text text-pretty">Hi, Win Lã here!</p>
          {aboutDataTertiary.map((item, i) => (
            <p
              key={i + "about__text--tertiary"}
              className="about__text--tertiary text-pretty"
            >
              {item.description}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutDetail;
