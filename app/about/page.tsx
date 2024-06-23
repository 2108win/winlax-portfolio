import React from "react";
import AboutDetail from "@/components/layout/about/AboutDetail";
import AboutHero from "@/components/layout/about/AboutHero";
export default function About() {
  return (
    <div className="z-50 flex h-full min-h-svh w-full flex-col space-y-20 overflow-hidden">
      <AboutHero />
      <AboutDetail />
    </div>
  );
}
