import AboutDetail from "@/components/layout/about/AboutDetail";
import AboutHero from "@/components/layout/about/AboutHero";
import ConnectMe from "@/components/layout/ConnectMe";
import LinkTransition from "@/components/utils/animations/link-transition";
import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About WinLax",
  description:
    "About WinLax - WinLax is a Frontend developer based in Vietnam.",
  openGraph: {
    images: [
      {
        url: "/og/og-about.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};
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
