import React from "react";
import AboutDetail from "@/components/base/about/AboutDetail";
import AboutHero from "@/components/base/about/AboutHero";
export default function About() {
  return (
    <div className="z-50 flex h-full min-h-svh w-full flex-col space-y-20 overflow-hidden">
      <AboutHero />
      <AboutDetail />
    </div>
  );
}
