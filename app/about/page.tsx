"use client";
import AboutDetail from "@/components/layout/about/AboutDetail";
import AboutHero from "@/components/layout/about/AboutHero";
import Journey from "@/components/layout/about/Journey";
import ConnectMe from "@/components/layout/ConnectMe";
import LinkTransition from "@/components/utils/animations/link-transition";
import { InfiniteMovingItems } from "@/components/utils/animations/text/infinite-moving-items";
import { TracingBeam } from "@/components/utils/animations/tracing-beam";
import { Icons } from "@/utils/icons";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <div className="z-50 flex h-full min-h-svh w-full flex-col gap-20 overflow-hidden">
      <AboutHero />
      <TracingBeam className="flex flex-col gap-20">
        <Journey />
        <AboutDetail />
      </TracingBeam>
      <div className="relative mx-auto flex max-w-full flex-col gap-5">
        <InfiniteMovingItems
          items={Icons}
          speed="normal"
          itemClassName="text-6xl p-4 rounded-sm"
          direction="left"
        />
        <InfiniteMovingItems
          items={Icons}
          speed="normal"
          itemClassName="text-6xl p-4 rounded-sm"
          direction="right"
        />
      </div>
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
