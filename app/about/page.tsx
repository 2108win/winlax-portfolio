import React from "react";
import AboutDetail from "@/components/layout/about/AboutDetail";
import AboutHero from "@/components/layout/about/AboutHero";
import ConnectMe from "@/components/layout/ConnectMe";
import LinkAnimate from "@/components/base/animations/link-animate";
import { ArrowUpRight } from "lucide-react";
export default function About() {
  return (
    <div className="z-50 flex h-full min-h-svh w-full flex-col space-y-20 overflow-hidden">
      <AboutHero />
      <AboutDetail />
      <div className="max-w-5xl px-10">
        <LinkAnimate
          href="/projects"
          id="about__link--see-projects"
          icon={<ArrowUpRight className="size-7 md:size-10" />}
        >
          See my projects
        </LinkAnimate>
      </div>
      <ConnectMe />
    </div>
  );
}
