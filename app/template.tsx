"use client";

import BlurryCursor from "@/components/utils/animations/blurry-cursor";
import { useEffect } from "react";
import Lenis from "lenis";
import Footer from "@/components/layout/Footer";
export default function Template({ children }: { children: React.ReactNode }) {
  const isActive = false;
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="z-50">
      <BlurryCursor isActive={isActive} />
      {children}
      <Footer />
    </div>
  );
}
