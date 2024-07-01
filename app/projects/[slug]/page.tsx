import ImageFadeZoom from "@/components/base/animations/image-fade-zoom";
import LinkAnimate from "@/components/base/animations/link-animate";
import ImageHero from "@/components/layout/projects/ImageHero";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};
export default function ProjectDetail({ params }: Props) {
  return (
    <div className="flex flex-col gap-20">
      <ImageHero slug={params.slug} src={`/projects/${params.slug}.jpeg`} />
      {/* information of project */}
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-10 px-10 py-20">
        <div className="flex flex-col gap-2">
          <p className="text-lg">Type</p>
          <p className="flex text-xl font-medium md:text-3xl">
            {"Website development"}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg">Type</p>
          <p className="flex text-xl font-medium md:text-3xl">
            {"Website development"}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg">Completed</p>
          <p className="flex text-xl font-medium md:text-3xl">
            {"Time - 2023"}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg">Team size</p>
          <p className="flex text-xl font-medium md:text-3xl">{"01"}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg">Position</p>
          <p className="flex text-xl font-medium md:text-3xl">
            {"Frontend Developer"}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-lg">URL</p>
          <div className="flex">
            <LinkAnimate
              href={"#"}
              id={`link__project--${params.slug}`}
              isNormalLink
              className="group"
            >
              <div className="flex items-center gap-2 text-xl font-medium md:text-3xl">
                View site
                <ArrowUpRight className="transition-all duration-500 group-hover:rotate-45" />
              </div>
            </LinkAnimate>
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-2">
          <p className="text-lg">Other link...</p>
          <div className="flex items-center gap-10">
            <LinkAnimate
              href={"#"}
              id={`link__project--${params.slug}--github`}
              isNormalLink
              className="group"
            >
              <div className="flex items-center gap-2 text-xl font-medium md:text-3xl">
                Github
                <ArrowUpRight className="transition-all duration-500 group-hover:rotate-45" />
              </div>
            </LinkAnimate>
            {/* <LinkAnimate
              href={"#"}
              id={`link__project--${params.slug}--live`}
              isNormalLink
              className="group"
            >
              <div className="flex items-center gap-2 text-3xl font-medium">
                Live preview
                <ArrowUpRight className="transition-all duration-500 group-hover:rotate-45" />
              </div>
            </LinkAnimate> */}
          </div>
        </div>
      </div>
      {/* description of project */}
      <div className="mx-auto grid w-full max-w-7xl gap-20 px-10 md:grid-cols-2">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-lg">Description</p>
            <p className="flex text-xl font-medium md:text-3xl">
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg">Technology</p>
            <p className="flex text-xl font-medium md:text-3xl">
              {"TypeScript, React, Next.js, Tailwind, ..."}
            </p>
          </div>
        </div>
        <ImageFadeZoom src={`/projects/${params.slug}.jpeg`} />
      </div>
      {/* list images */}
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-10">
        <ImageFadeZoom src={`/projects/${params.slug}.jpeg`} />
        <ImageFadeZoom src={`/projects/${params.slug}.jpeg`} />
      </div>
      {/* next or prev project */}
      <div className="mx-auto flex w-full max-w-5xl items-center justify-around gap-10 px-10">
        <LinkAnimate
          href={"/projects/project-1"}
          id={`link__project--${params.slug}--prev`}
          className="group"
        >
          <div className="flex items-center gap-2 text-xl font-normal md:text-2xl">
            <ArrowLeft className="transition-all duration-500 group-hover:-translate-x-4" />
            Prev
          </div>
        </LinkAnimate>
        <LinkAnimate
          href={"/projects/project-1"}
          id={`link__project--${params.slug}--next`}
          className="group"
        >
          <div className="flex items-center gap-2 text-xl font-normal md:text-2xl">
            Next
            <ArrowRight className="transition-all duration-500 group-hover:translate-x-4" />
          </div>
        </LinkAnimate>
      </div>
    </div>
  );
}
