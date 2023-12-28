import React from "react";

type Props = {
  year?: string;
  main?: string[];
  description?: string[];
};

export default function Experience({}: Props) {
  // create ojects for timelines: year, content1, content1_1, content2, content2_1
  const timelines: Props[] = [
    {
      year: "2016",
      main: ["Học trường THPT Chuyên Hùng Vương Gia Lai"],
      description: ["Chuyên Tin"],
    },
    {
      year: "2019",
      main: ["Học trường Đại học Công Nghệ Thông Tin - ĐHQG"],
      description: ["Chuyên ngành Công nghệ thông tin chất lượng cao - Định hướng Nhật Bản"],
    },
    {
      year: "2022",
      main: ["Tìm tòi học hỏi thêm Javascript và ReactJS căn bản"],
    },
    {
      year: "2023",
      main: [
        "Tự thực hành và tìm tòi chuyên sâu hơn về HTML, CSS, ReactJS.",
        "Có định hướng sau khi tốt nghiệp và con đường phát triển sự nghiệp rõ ràng",
      ],
    },
  ];
  const timelines2: Props[] = [
    {
      year: "09/2024",
      main: ["Công ty Cổ phần Giao Thông Số Việt Nam (VDTC)"],
      description: ["Thực tập - Vị trí front-end developer", "Dự án: Website sáng kiến ý tưởng"],
    },
    {
      year: "12/2024",
      main: ["Freelancer"],
    },
  ];
  const combinedTimelines: Props[] = [...timelines, ...timelines2];
  return (
    <div
      id="experience"
      className="relative flex flex-col items-center gap-8 px-5 mx-auto text-center max-w-7xl lg:px-6"
    >
      <h2 className="tracking-[10px] md:tracking-[20px] translate-x-[10px] uppercase text-grayDarkOp80 dark:text-grayLightOp80 text-2xl">
        Experience
      </h2>
      <h1 className="absolute top-0 md:right-10 -translate-y-1/2 text-4xl md:text-7xl font-extrabold italic text-grayDarkOp15 dark:text-grayLightOp15 rotate-[20deg] tracking-[8px] cursor-default z-[1] select-none">
        ##experience
      </h1>
      {/* combined timelines */}
      <div className="relative flex flex-col items-start gap-8 lg:hidden timelines text-grayDark dark:text-grayLight h-fit">
        {combinedTimelines.map((item, index) => {
          return (
            <>
              <div key={index} className="flex items-start gap-1 timeline">
                <span className="timeline-time min-w-[80px] leading-none text-lg md:text-xl transition-all duration-300 text-center">
                  {item.year}
                </span>
                <div className="z-10 dot"></div>
                <ul className="ml-3 space-y-2 text-base text-left md:text-lg">
                  {item.main &&
                    item.main.map((item, index) => (
                      <li key={index} className="list-disc list-inside">
                        {item}
                      </li>
                    ))}
                  {item.description &&
                    item.description.map((item, index) => (
                      <li key={index} className="ml-4 italic list-disc list-inside opacity-60">
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
            </>
          );
        })}
        <div className="flex items-end gap-4">
          <span className="min-w-[69px] text-lg md:text-xl leading-none text-primary text-center">
            Now
          </span>
          <div className="z-10 dot from-primary to-[#fff]"></div>
        </div>
      </div>
      {/* timelines */}
      <div className="flex-col items-start hidden gap-8 lg:flex">
        <div className="relative flex flex-row gap-4 timelines text-grayDark dark:text-grayLight h-fit">
          {timelines.map((item, index) => {
            return (
              <>
                <div key={index} className="flex flex-col items-start gap-4 timeline">
                  <span className="timeline-time min-w-[69px] leading-none text-lg md:text-xl transition-all duration-300">
                    {item.year}
                  </span>
                  <div className="z-10 dot"></div>
                  <ul className="space-y-2 text-base text-left md:text-lg">
                    {item.main &&
                      item.main.map((item, index) => (
                        <li key={index} className="list-disc list-inside">
                          {item}
                        </li>
                      ))}
                    {item.description &&
                      item.description.map((item, index) => (
                        <li key={index} className="ml-4 italic list-disc list-inside opacity-60">
                          {item}
                        </li>
                      ))}
                  </ul>
                </div>
              </>
            );
          })}
          <div className="flex flex-col items-end gap-4">
            <span className="text-lg leading-none w-fit md:text-xl text-primary">
              {timelines2[0].year}
            </span>
            <div className="z-10 dot from-primary to-[#fff]"></div>
          </div>
        </div>
        <div className="relative flex flex-row gap-4 timelines text-grayDark dark:text-grayLight h-fit">
          {timelines2.map((item, index) => {
            return (
              <>
                <div key={index} className="flex flex-col items-start gap-4 timeline">
                  <span className="timeline-time min-w-[69px] leading-none text-lg md:text-xl transition-all duration-300">
                    {item.year}
                  </span>
                  <div className="z-10 dot"></div>
                  <ul className="space-y-2 text-base text-left md:text-lg">
                    {item.main &&
                      item.main.map((item, index) => (
                        <li key={index} className="list-disc list-inside">
                          {item}
                        </li>
                      ))}
                    {item.description &&
                      item.description.map((item, index) => (
                        <li key={index} className="ml-4 italic list-disc list-inside opacity-60">
                          {item}
                        </li>
                      ))}
                  </ul>
                </div>
              </>
            );
          })}
          <div className="flex flex-col items-end gap-4">
            <span className="text-lg leading-none w-fit md:text-xl text-primary">Now</span>
            <div className="z-10 dot from-primary to-[#fff]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
