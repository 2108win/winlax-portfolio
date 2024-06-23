import React from "react";
import LinkAnimate from "@/components/base/animations/link-animate";
import { TextAnimate } from "../base/animations/text-animate";

const mail =
  "mailto:winlax2108@gmail.com?subject=Lets%20work%20together!&body=Hello%2C%20I%20think%20we%20need%20you%20to%20work%20on%2Fcollaborate%20this%20particular%20product...%20Reach%20out%20as%20soon%20as%20you%20can.";

export default function ConnectMe() {
  return (
    <div className="relative my-10 flex h-full max-w-7xl flex-col items-center space-y-10 overflow-hidden px-10 py-20">
      <div className="flex w-full flex-col space-y-8">
        <TextAnimate
          id="connectMe__text"
          className="text-pretty font-clashDisplay text-2xl sm:text-4xl md:text-6xl"
        >
          Want to Start a Project?
        </TextAnimate>
        <LinkAnimate
          id="connectMe__link"
          className="flex-wrap text-pretty text-5xl sm:text-8xl md:text-9xl lg:text-[10rem]"
          href={mail}
          hasUnderline={false}
        >
          Let's Talk
        </LinkAnimate>
      </div>
    </div>
  );
}
