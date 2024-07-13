"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BlurryCursor({ isActive }: { isActive: boolean }) {
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const rafId = useRef<any>(null);
  const circle = useRef<HTMLDivElement>(null);
  const size = isActive ? 400 : 200;

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const manageMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;

    mouse.current = {
      x: clientX,
      y: clientY,
    };
  };

  const animate = () => {
    const { x, y } = delayedMouse.current;

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 1),
      y: lerp(y, mouse.current.y, 1),
    };

    moveCircle(delayedMouse.current.x, delayedMouse.current.y);

    rafId.current = window.requestAnimationFrame(animate);
  };

  const moveCircle = (x: number, y: number) => {
    gsap.set(circle.current, { x, y, xPercent: 100, yPercent: 100 });
  };

  useEffect(() => {
    animate();
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.cancelAnimationFrame(rafId.current);
    };
  }, [isActive]);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[-1] rounded-full"
      ref={circle}
    >
      <div
        style={{
          background:
            "linear-gradient(90deg,#ff873c 1.98%,#ff873c 1.99%,#900c3e 100%)",
          width: size,
          height: size,
          filter: "blur(100px)",
        }}
        className="animate-cursorAnimate-one pointer-events-none fixed left-0 top-0"
        ref={circle}
      />
      <div
        style={{
          background:
            "linear-gradient(90deg, #c7003b 1.98%, #c7003b 1.99%, #900c3e 100%)",
          width: size,
          height: size,
          filter: "blur(100px)",
        }}
        ref={circle}
        className="animate-cursorAnimate-two pointer-events-none fixed left-0 top-0"
      />
    </div>
  );
}
