import ImageHero from "@/components/layout/projects/ImageHero";
import ListImage from "@/components/layout/projects/ListImage";
import ProjectFeatured from "@/components/layout/projects/ProjectFeatured";
import RelateLink from "@/components/layout/projects/RelateLink";
import SparklesText from "@/components/ui/sparkles-text";
import BlurFade from "@/components/utils/animations/blur-fade";
import ImageFadeZoom from "@/components/utils/animations/image-fade-zoom";
import LinkTransition from "@/components/utils/animations/link-transition";
import { Project } from "@/lib/interface";
import { getProjectBySlug, getProjectList } from "@/utils/getProjects";
import { PortableText } from "@portabletext/react";
import { ArrowUpRight } from "lucide-react";
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
  const currentIndexSlug = data && data.slugs.indexOf(params.slug);
  const prevSlug = data && data.slugs[currentIndexSlug - 1];
  const nextSlug = data && data.slugs[currentIndexSlug + 1];
  return data ? (
    <div className="z-50 flex flex-col gap-10">
      <ImageHero
        title={data.title}
        src={data.heroImage.url || "/image-placeholder.png"}
      />
      {/* information of project */}
      <div
        id="details"
        className="mx-auto grid max-w-5xl grid-cols-subgrid gap-10 px-10 sm:grid-cols-2"
      >
        {data.information.map((item) =>
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
                  className="group flex items-center gap-2 text-xl font-medium md:text-3xl"
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
            <div className="prose text-xl mix-blend-normal dark:prose-invert md:prose-lg lg:prose-xl prose-a:italic prose-strong:font-poppins prose-li:marker:text-orange-400 md:text-3xl">
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
          containerClassName="rounded-sm shadow-md md:rounded-lg max-h-[40rem] -mx-5 sm:mx-0"
          className="h-auto rounded-sm md:aspect-[5/4] md:rounded-lg xl:aspect-auto"
          src={data?.heroImage.url || "/image-placeholder.png"}
        />
      </div>
      {/* list images */}
      <ListImage
        className="px-5 sm:px-10"
        projectImages={data?.projectImages || []}
      />
      {/* next or prev project */}
      <RelateLink nextLink={nextSlug} prevLink={prevSlug} />
    </div>
  ) : (
    <div className="relative flex h-full w-full flex-col items-center gap-10">
      <div className="z-[999] mt-20 flex flex-col items-center justify-center gap-5">
        <BlurFade delay={0.5} inView>
          <SparklesText
            text={"404"}
            className="font-clashDisplay text-7xl font-bold drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-8xl"
            colors={{ first: "#0ABFBC", second: "#FC354C" }}
          />
        </BlurFade>
        <BlurFade delay={2} inView>
          <SparklesText
            className="text-3xl font-bold"
            text="Project not found"
            colors={{ first: "#999", second: "#000" }}
          />
        </BlurFade>
      </div>
      <ProjectFeatured className="mt-0" hasTitle={false} numberOfProject={3} />
    </div>
  );
}
