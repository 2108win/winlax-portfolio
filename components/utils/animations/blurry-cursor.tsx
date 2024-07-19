"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function BlurryCursor({ isActive }: { isActive: boolean }) {
  const mouse = useRef({ x: 300, y: 300 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const rafId = useRef<any>(null);
  const circle = useRef<HTMLDivElement>(null);
  const size = isActive ? 400 : 300;

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
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    };

    moveCircle(
      delayedMouse.current.x - size / 2,
      delayedMouse.current.y - size / 2,
    );

    rafId.current = window.requestAnimationFrame(animate);
  };

  const moveCircle = (x: number, y: number) => {
    gsap.set(circle.current, { x, y, xPercent: 0, yPercent: 0 });
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
            "linear-gradient(90deg,#ff873c 1.98%,#ff873c 1.99%,#900c3e 100%), conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 1turn)",
          width: size,
          height: size,
        }}
        className="pointer-events-none absolute left-0 top-0 animate-cursorAnimate-one rounded-full opacity-70 blur-[120px]"
        ref={circle}
      />
      <div
        style={{
          background:
            "linear-gradient(90deg, #c7003b 1.98%, #c7003b 1.99%, #900c3e 100%)",
          width: size,
          height: size,
        }}
        ref={circle}
        className="pointer-events-none absolute left-0 top-0 animate-cursorAnimate-two rounded-full opacity-70 blur-[120px]"
      />
    </div>
  );
}
