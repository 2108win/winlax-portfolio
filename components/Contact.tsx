import React from "react";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="relative flex flex-col items-center h-screen px-10 mx-auto text-center md:text-left md:flex-row justify-evenly max-w-7xl">
      <h3 className="absolute tracking-[20px] uppercase top-25 text-gray-500 text-2xl">Contact</h3>
    </div>
  );
}
