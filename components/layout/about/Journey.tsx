import { TextAnimate } from "@/components/utils/animations/text/text-animate";
import { PiArrowBendDownRightBold } from "react-icons/pi";

const timelines = [
  {
    time: "08/2019",
    title: ["Study IT Major"],
    description: [
      "Graduated from Hung Vuong Gia Lai High School for the Gifted.",
    ],
  },
  {
    time: "06/2023",
    title: ["Complete HTML, CSS, Javascript course - Evondev"],
    description: [
      "Course from KTCity, HTML, Javascript course from Zero to Hero.",
    ],
  },
  {
    time: "12/2023",
    title: ["Internship - Front-end developer"],
    description: [
      "VietNam Digital Transport Corporation - VDTC.",
      "Project: Idea innovation website.",
    ],
  },
  {
    time: "03/2024",
    title: ["Complete ReactJs, Typescript, NextJs Master course - Evondev"],
    description: [
      "Course from KTCity, ReactJs, Typescript, NextJs course from Zero to Hero.",
    ],
  },
  {
    time: "08/2024",
    title: [
      "Graduated from university with a bachelor's degree in information technology",
    ],
    description: [
      "Bachelor of Information Technology",
      "Major in Information Technology (Japanese-oriented).",
      "GPA of 7.5",
    ],
  },
];
const Journey = () => {
  return (
    <div className="mx-auto flex w-fit max-w-5xl flex-col items-center gap-20 px-10">
      <h2 className="text-center font-clashDisplay text-5xl font-bold sm:text-6xl md:text-8xl lg:text-9xl">
        My Journey
      </h2>
      <div className="timelines relative flex h-fit max-w-4xl flex-col items-start gap-8">
        {timelines.map((item, index) => {
          return (
            <>
              <div key={index} className="timeline flex items-start gap-2">
                <span className="timeline-time hidden text-center text-lg font-bold transition-all duration-300 sm:inline sm:min-w-[80px] md:text-xl">
                  {item.time}
                </span>
                <div className="dot z-10 shrink-0"></div>
                <ul className="ml-4 text-left text-lg md:text-xl">
                  <span className="timeline-time min-w-[80px] text-center text-lg font-bold transition-all duration-300 sm:hidden md:text-xl">
                    {item.time}
                  </span>
                  {item.title &&
                    item.title.map((item, index) => (
                      <li key={index} className="list list-inside font-bold">
                        {item}
                      </li>
                    ))}
                  {item.description &&
                    item.description.map((item, index) => (
                      <li
                        key={index}
                        className="ml-4 flex list-inside gap-2 text-muted-foreground"
                      >
                        <PiArrowBendDownRightBold className="!size-5" />
                        <TextAnimate className="flex-1" stagger={0.05} flip>
                          {item}
                        </TextAnimate>
                      </li>
                    ))}
                </ul>
              </div>
            </>
          );
        })}
        <div className="flex flex-row-reverse items-end gap-2 sm:flex-row">
          <span className="min-w-20 text-center text-lg leading-none text-primary md:text-xl">
            Now
          </span>
          <div className="dot z-10 from-primary to-[#fff]"></div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
