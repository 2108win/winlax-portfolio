import ImageFadeZoom from "@/components/utils/animations/image-fade-zoom";
import ImageHero from "@/components/layout/projects/ImageHero";
import { Project } from "@/lib/interface";
import { getProjectBySlug, getProjectList } from "@/utils/getProjects";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import React from "react";
import { PortableText } from "@portabletext/react";
import LinkTransition from "@/components/utils/animations/link-transition";
import BlurFade from "@/components/utils/animations/blur-fade";
type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const projects: Project[] = await getProjectList();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({ params }: Props) {
  const data: Project = await getProjectBySlug(params.slug);
  const currentSlug = params.slug;
  const prevSlug = data?.slugs?.[data.slugs.indexOf(currentSlug) - 1];
  const nextSlug = data?.slugs?.[data.slugs.indexOf(currentSlug) + 1];
  return (
    <div className="z-50 flex flex-col gap-20">
      <ImageHero
        title={data?.title ? data.title : params.slug}
        src={data?.heroImage.url || "/image-placeholder.png"}
      />
      {/* information of project */}
      <div
        id="details"
        className="mx-auto grid max-w-5xl grid-cols-2 gap-10 px-10"
      >
        {data?.information.map((item) =>
          item.informationType === "url" ? (
            <div key={item._key} className="flex flex-col gap-2">
              <p className="text-lg text-orange-400 md:text-xl">
                {item.informationTitle}
              </p>
              <div className="flex">
                <LinkTransition
                  href={item.informationUrl?.url || "#"}
                  isNormalLink
                  icon={
                    <ArrowUpRight className="transition-all duration-500 group-hover:rotate-45" />
                  }
                  className="flex items-center gap-2 text-xl font-medium md:text-3xl"
                >
                  {item.informationUrl?.title || item.informationTitle}
                </LinkTransition>
              </div>
            </div>
          ) : (
            <div key={item._key} className="flex flex-col gap-2">
              <p className="text-lg text-orange-400 md:text-xl">
                {item.informationTitle}
              </p>
              <p className="flex text-xl md:text-3xl">
                {item.informationDescription}
              </p>
            </div>
          ),
        )}
      </div>
      {/* description of project */}
      <div className="mx-auto grid h-full w-full max-w-5xl items-center gap-10 px-10 xl:max-w-[100rem] xl:grid-cols-2">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-lg text-orange-400 md:text-xl">Description</p>
            <div className="prose text-xl dark:prose-invert md:prose-lg lg:prose-xl prose-a:italic prose-strong:font-poppins prose-li:marker:text-orange-400 md:text-3xl">
              <PortableText value={data?.description} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg text-orange-400 md:text-xl">Technology</p>
            <p className="flex text-xl md:text-3xl">
              {data?.technologies.map((item) => item).join(", ")}.
            </p>
          </div>
        </div>
        <ImageFadeZoom
          classNameContainer="rounded-sm shadow-md md:rounded-lg max-h-[40rem]"
          className="h-auto rounded-sm md:aspect-[5/4] md:rounded-lg xl:aspect-auto"
          src={data?.heroImage.url || "/image-placeholder.png"}
        />
      </div>
      {/* list images */}
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-10">
        {data?.projectImages.map((item, i) => (
          <BlurFade key={item._id} delay={0.25 + i * 0.05} inView>
            <ImageFadeZoom
              classNameContainer="rounded-sm shadow-md md:rounded-lg border-[0.5px] border-foreground/20"
              className="rounded-sm md:rounded-lg"
              src={item.url || "/image-placeholder.png"}
            />
          </BlurFade>
        ))}
      </div>
      {/* next or prev project */}
      <div className="mx-auto flex w-full max-w-5xl items-center justify-around gap-5">
        {prevSlug && (
          <LinkTransition
            href={`/projects/${prevSlug}`}
            isNormalLink
            hasUnderline={false}
            hasAnimate={false}
            icon={
              <ArrowLeft className="w-14 transition-all duration-500 group-hover:-translate-x-4" />
            }
            iconLeft
            className="flex items-center justify-end gap-2 text-xl font-normal md:text-2xl"
          >
            {nextSlug ? "Prev " + prevSlug : "Go " + prevSlug}
          </LinkTransition>
        )}
        {nextSlug && (
          <LinkTransition
            href={`/projects/${nextSlug}`}
            hasUnderline={false}
            className="flex items-center justify-start gap-2 text-xl font-normal md:text-2xl"
            hasAnimate={false}
            icon={
              <ArrowRight className="w-14 transition-all duration-500 group-hover:translate-x-4" />
            }
          >
            {prevSlug ? "Next " + nextSlug : "Go " + nextSlug}
          </LinkTransition>
        )}
      </div>
    </div>
  );
}
