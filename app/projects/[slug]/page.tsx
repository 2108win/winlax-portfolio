import ImageFadeZoom from "@/components/base/animations/image-fade-zoom";
import LinkAnimate from "@/components/base/animations/link-animate";
import ImageHero from "@/components/layout/projects/ImageHero";
import { Project } from "@/lib/interface";
import { getProjectBySlug } from "@/utils/getProjects";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import React from "react";
import { PortableText } from "@portabletext/react";
type Props = {
  params: {
    slug: string;
  };
};
export default async function ProjectDetail({ params }: Props) {
  const data: Project = await getProjectBySlug(params.slug);

  return (
    <div className="flex flex-col gap-20">
      <ImageHero
        title={data.title}
        src={data.heroImage.url || "/image-placeholder.png"}
      />
      {/* information of project */}
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-10 px-10">
        {data.information.map((item) =>
          item.informationType === "url" ? (
            <div key={item._key} className="flex flex-col gap-2">
              <p className="text-lg text-orange-400 md:text-xl">
                {item.informationTitle}
              </p>
              <div className="flex">
                <LinkAnimate
                  href={item.informationUrl?.url || "#"}
                  id={`link__project--${item.informationUrl?.title.split(" ").join("-") || item._key}`}
                  isNormalLink
                  className="group"
                >
                  <div className="flex items-center gap-2 text-xl font-medium md:text-3xl">
                    {item.informationUrl?.title || item.informationTitle}
                    <ArrowUpRight className="transition-all duration-500 group-hover:rotate-45" />
                  </div>
                </LinkAnimate>
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
      <div className="mx-auto grid w-full max-w-[100rem] items-center gap-20 px-10 py-10 lg:grid-cols-2">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-lg text-orange-400 md:text-xl">Description</p>
            <div className="prose md:prose-lg lg:prose-xl dark:prose-invert prose-li:marker:text-orange-400 text-xl md:text-3xl">
              <PortableText value={data.description} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg text-orange-400 md:text-xl">Technology</p>
            <p className="flex text-xl md:text-3xl">
              {data.technologies.map((item) => item).join(", ")}.
            </p>
          </div>
        </div>
        <ImageFadeZoom
          classNameContainer="rounded-sm h-full shadow-md md:rounded-lg max-h-[40rem]"
          className="rounded-sm sm:aspect-[5/4] md:aspect-[5/3] md:rounded-lg"
          src={data.heroImage.url || "/image-placeholder.png"}
        />
      </div>
      {/* list images */}
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-10">
        {data.projectImages.map((item) => (
          <ImageFadeZoom
            key={item._id}
            classNameContainer="rounded-sm shadow-md md:rounded-lg max-h-[40rem]"
            className="rounded-sm sm:aspect-[5/4] md:aspect-[5/3] md:rounded-lg"
            src={item.url || "/image-placeholder.png"}
          />
        ))}
      </div>
      {/* next or prev project */}
      <div className="mx-auto flex w-full max-w-5xl items-center justify-around gap-5">
        <LinkAnimate
          href={"#"}
          isNormalLink
          hasUnderline={false}
          id={`link__project--prev`}
          className="group"
        >
          <div
            id="link__project--prev"
            className="flex items-center justify-end gap-2 text-xl font-normal md:text-2xl"
          >
            <ArrowLeft className="w-14 transition-all duration-500 group-hover:-translate-x-4" />
            Prev
          </div>
        </LinkAnimate>
        <LinkAnimate
          href={"#"}
          isNormalLink
          hasUnderline={false}
          id={`link__project--next`}
          className="group"
        >
          <div
            id="link__project--next"
            className="flex items-center justify-start gap-2 text-xl font-normal md:text-2xl"
          >
            Next
            <ArrowRight className="w-14 transition-all duration-500 group-hover:translate-x-4" />
          </div>
        </LinkAnimate>
      </div>
    </div>
  );
}