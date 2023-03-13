import React from "react";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="relative flex flex-col items-center justify-center gap-8 px-5 pb-12 mx-auto text-center max-w-7xl">
      <h3 className="tracking-[20px] translate-x-[10px] uppercase   text-grayDarkOp80 dark:text-grayLightOp80 text-2xl">
        Contact
      </h3>
    </div>
  );
}
