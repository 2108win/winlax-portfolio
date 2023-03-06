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
  return (
    <div className="relative flex flex-col items-center h-screen px-5 mx-auto text-center md:text-left md:flex-row justify-evenly max-w-7xl">
      <h3 className="absolute tracking-[20px] translate-x-[10px] uppercase top-24 text-gray-500 text-2xl">
        Experience
      </h3>
      {/* timelines */}
      <div className="timelines relative flex flex-col gap-4 text-[#242424] dark:text-[#f5f6f1]">
        {timelines.map((item) => {
          return (
            <>
              <div className="flex items-start gap-4 min-h-[100px]">
                <span className="min-w-[52px] leading-none text-lg md:text-xl">{item.year}</span>
                <div className="z-10 dot"></div>
                <ul className="space-y-2 text-base text-left md:text-lg">
                  <li className="list-disc list-inside">{item.content1}</li>
                  {item.content1_1 && (
                    <li className="ml-4 italic list-disc list-inside opacity-60">
                      {item.content1_1}
                    </li>
                  )}
                  {item.content2 && <li className="list-disc list-inside">{item.content2}</li>}
                  {item.content2_1 && (
                    <li className="ml-4 italic list-disc list-inside opacity-60">
                      {item.content2_1}
                    </li>
                  )}
                </ul>
              </div>
            </>
          );
        })}
        <div className="flex items-end gap-4">
          <span className="min-w-[52px] text-lg md:text-xl leading-none">Now</span>
          <div className="z-10 dot"></div>
        </div>
      </div>
    </div>
  );
}
