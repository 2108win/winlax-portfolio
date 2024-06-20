"use client";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgba(255, 157, 0, 0.5)",
  gradientBackgroundEnd = "rgba(255, 0, 234, 0.5)",
  firstColor = "18, 113, 255",
  secondColor = "255, 87, 34",
  size = "100%",
  blendingValue = "hard-light",
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  size?: string;
  blendingValue?: string;
  containerClassName?: string;
}) => {
  useEffect(() => {
    document.body.style.setProperty(
      "--gradient-background-start",
      gradientBackgroundStart,
    );
    document.body.style.setProperty(
      "--gradient-background-end",
      gradientBackgroundEnd,
    );
    document.body.style.setProperty("--first-color", firstColor);
    document.body.style.setProperty("--second-color", secondColor);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
  }, [
    blendingValue,
    firstColor,
    gradientBackgroundEnd,
    gradientBackgroundStart,
    secondColor,
    size,
  ]);

  return (
    <div
      className={cn(
        "absolute inset-0 overflow-hidden bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName,
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div
        className={cn(
          `absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
          `-top-1/2 left-0 h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
          `[filter:url(#blurMe)_blur(40px)] [transform-origin:center_center]`,
          `animate-first`,
          `opacity-100`,
        )}
      ></div>
      <div
        className={cn(
          `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
          `-top-1/2 left-1/2 h-[var(--size)] w-[var(--size)] [mix-blend-mode:var(--blending-value)]`,
          `[transform-origin:calc(50%-400px)]`,
          `animate-second`,
          `opacity-100`,
        )}
      ></div>
    </div>
  );
};
