import React from "react";

type Props = {};

export default function Experience({}: Props) {
  // create ojects for timelines: year, content1, content1_1, content2, content2_1
  const timelines = [
    {
      year: "2016",
      content1: "Học trường THPT Chuyên Hùng Vương Gia Lai",
      content1_1: "Chuyên Tin",
    },
    {
      year: "2019",
      content1: "Học trường Đại học Công Nghệ Thông Tin - ĐHQG",
      content1_1: "Chuyên ngành Công nghệ thông tin chất lượng cao - Định hướng Nhật Bản",
    },
    {
      year: "2022",
      content1: "Tìm tòi học hỏi thêm Javascript và ReactJS căn bản",
    },
    {
      year: "2023",
      content1: "Tự thực hành và tìm tòi chuyên sâu hơn về HTML, CSS, ReactJS.",
      content2: "Có định hướng sau khi tốt nghiệp và con đường phát triển sự nghiệp rõ ràng",
      content2_1: "",
    },
  ];
  const timelinesTest = [
    {
      year: "2016",
      content1: "Học trường THPT Chuyên Hùng Vương Gia Lai",
      content1_1: "Chuyên Tin",
    },
    {
      year: "2019",
      content1: "Học trường Đại học Công Nghệ Thông Tin - ĐHQG",
      content1_1: "Chuyên ngành Công nghệ thông tin chất lượng cao - Định hướng Nhật Bản",
    },
    {
      year: "2023",
      content1: "Tự thực hành và tìm tòi chuyên sâu hơn về HTML, CSS, ReactJS.",
      content2: "Có định hướng sau khi tốt nghiệp và con đường phát triển sự nghiệp rõ ràng",
      content2_1: "",
    },
  ];
  return (
    <div className="max-w-7xl lg:px-6 relative flex flex-col items-center gap-8 px-5 mx-auto text-center">
      <h3 className="tracking-[20px] translate-x-[10px] uppercase   text-gray-500 text-2xl">
        Experience
      </h3>
      <h1 className="absolute top-0 md:right-10 -translate-y-1/2 text-4xl md:text-7xl font-extrabold italic text-[#24242415] dark:text-[#f5f6f115] rotate-[20deg] tracking-[8px] cursor-default z-[1]">
        ##experience
      </h1>
      {/* timelines */}
      <div className="timelines relative flex flex-col lg:flex-row gap-4 text-[#242424] dark:text-[#f5f6f1] h-fit">
        {timelines.map((item) => {
          return (
            <>
              <div className="timeline lg:flex-col flex items-start gap-4">
                <span className="timeline-time min-w-[52px] leading-none text-lg md:text-xl transition-all duration-300">
                  {item.year}
                </span>
                <div className="dot z-10"></div>
                <ul className="md:text-lg space-y-2 text-base text-left">
                  <li className="list-disc list-inside">{item.content1}</li>
                  {item.content1_1 && (
                    <li className="opacity-60 ml-4 italic list-disc list-inside">
                      {item.content1_1}
                    </li>
                  )}
                  {item.content2 && <li className="list-disc list-inside">{item.content2}</li>}
                  {item.content2_1 && (
                    <li className="opacity-60 ml-4 italic list-disc list-inside">
                      {item.content2_1}
                    </li>
                  )}
                </ul>
              </div>
            </>
          );
        })}
        <div className="lg:flex-col flex items-end gap-4">
          <span className="min-w-[52px] lg:min-w-fit text-lg md:text-xl leading-none text-[#f7ab0a]">
            Now
          </span>
          <div className="z-10 dot from-[#f7ab0a] to-[#fff]"></div>
        </div>
      </div>
      {/* test
      <div className="timelines relative flex flex-col lg:flex-row gap-4 text-[#242424] dark:text-[#f5f6f1] h-fit w-fit">
        {timelinesTest.map((item) => {
          return (
            <>
              <div className="lg:max-w-[300px] flex items-start gap-4 timeline lg:flex-col">
                <span className="timeline-time min-w-[52px] leading-none text-lg md:text-xl transition-all duration-300">
                  {item.year}
                </span>
                <div className="dot z-10"></div>
                <ul className="md:text-lg space-y-2 text-base text-left">
                  <li className="list-disc list-inside">{item.content1}</li>
                  {item.content1_1 && (
                    <li className="opacity-60 ml-4 italic list-disc list-inside">
                      {item.content1_1}
                    </li>
                  )}
                  {item.content2 && <li className="list-disc list-inside">{item.content2}</li>}
                  {item.content2_1 && (
                    <li className="opacity-60 ml-4 italic list-disc list-inside">
                      {item.content2_1}
                    </li>
                  )}
                </ul>
              </div>
            </>
          );
        })}
        <div className="lg:flex-col flex items-end gap-4">
          <span className="min-w-[52px] lg:min-w-fit text-lg md:text-xl leading-none text-[#f7ab0a]">
            Now
          </span>
          <div className="z-10 dot from-[#f7ab0a] to-[#fff]"></div>
        </div>
      </div>
      */}
    </div>
  );
}
