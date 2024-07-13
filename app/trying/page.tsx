"use client";
import BlurryCursor from "@/components/utils/animations/blurry-cursor";
import React from "react";
import { useState } from "react";

export default function Scene2() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex h-[100vh] items-center justify-center">
      <h1
        onMouseOver={() => {
          setIsActive(true);
        }}
        onMouseLeave={() => {
          setIsActive(false);
        }}
        className="max-w-[90vw] p-20 text-center text-[4.5vw] text-white"
      >
        The quick brown fox jumps over the lazy dog
      </h1>
      <BlurryCursor isActive={isActive} />
    </div>
  );
}
