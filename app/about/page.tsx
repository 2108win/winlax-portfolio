import React from "react";
import AboutDetail from "@/components/layout/about/AboutDetail";
import AboutHero from "@/components/layout/about/AboutHero";
import ConnectMe from "@/components/layout/ConnectMe";
import { ArrowUpRight } from "lucide-react";
import LinkTransition from "@/components/utils/animations/link-transition";
export default function About() {
  return (
    <div className="z-50 flex h-full min-h-svh w-full flex-col space-y-20 overflow-hidden">
      <AboutHero />
      <AboutDetail />
      <div className="mx-auto grid w-full max-w-5xl px-10">
        <LinkTransition
          href="/projects"
          className="group"
          icon={
            <ArrowUpRight className="size-7 transition-all duration-500 group-hover:rotate-45 md:size-10" />
          }
        >
          See my projects
        </LinkTransition>
      </div>
      <ConnectMe />
    </div>
  );
}
