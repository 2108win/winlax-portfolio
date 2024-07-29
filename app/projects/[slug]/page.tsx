import NotFound from "@/app/not-found";
import ImageHero from "@/components/layout/projects/ImageHero";
import ListImage from "@/components/layout/projects/ListImage";
import ProjectFeatured from "@/components/layout/projects/ProjectFeatured";
import RelateLink from "@/components/layout/projects/RelateLink";
import { Button, buttonVariants } from "@/components/ui/button";
import ImageFadeZoom from "@/components/utils/animations/image-fade-zoom";
import LinkTransition from "@/components/utils/animations/link-transition";
import { TracingBeam } from "@/components/utils/animations/tracing-beam";
import { Project, resProjects } from "@/lib/interface";
import { cn } from "@/lib/utils";
import { getProjectBySlug, getProjectList } from "@/utils/getProjects";
import { PortableText } from "@portabletext/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const data: Project = await getProjectBySlug(params.slug);
  const desc = `Technologies using: ${data?.technologies.map((item) => item)}`;
  return {
    title: {
      absolute: data
        ? data?.title + " | Winlax Projects"
        : "Projects Not Found",
    },
    description: data && desc,
    openGraph: {
      images: [
        {
          url: data?.heroImage.url || "/og/og-projects.png",
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const projects: resProjects = await getProjectList();
  const data: Project[] = projects.projects;
  return data.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({ params }: Props) {
  const data: Project = await getProjectBySlug(params.slug);
  const currentIndexSlug = data && data.slugs.indexOf(params.slug);
  const prevSlug =
    (data && data.slugs[currentIndexSlug - 1]) ||
    data?.slugs[data?.slugs.length - 1];
  const nextSlug = (data && data.slugs[currentIndexSlug + 1]) || data?.slugs[0];
  return data ? (
    <div className="z-50 flex flex-col gap-10">
      <ImageHero
        title={data.title}
        src={data.heroImage.url || "/image-placeholder.png"}
      />
      <TracingBeam className="flex flex-col gap-10">
        {/* information of project */}

        <div
          id="details"
          className="mx-auto grid w-full max-w-5xl justify-between gap-10 px-10 sm:w-fit sm:grid-cols-2"
        >
          {data.information.map((item) =>
            item.informationType === "url" ? (
              <div key={item._key} className="flex flex-col gap-2">
                <p className="text-lg text-primary md:text-xl">
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
                <p className="text-lg text-primary md:text-xl">
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
              <p className="text-lg text-primary md:text-xl">Description</p>
              <div className="prose text-xl mix-blend-normal dark:prose-invert md:prose-lg lg:prose-xl prose-a:italic prose-strong:font-poppins prose-li:marker:text-primary md:text-3xl">
                <PortableText value={data?.description} />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg text-primary md:text-xl">Technology</p>
              <p className="flex text-xl md:text-3xl">
                {data?.technologies.map((item) => item).join(", ")}.
              </p>
            </div>
          </div>
          <ImageFadeZoom
            containerClassName="rounded-sm shadow-md md:rounded-lg max-h-[40rem]"
            className="h-auto rounded-sm md:aspect-[5/4] md:rounded-lg xl:aspect-auto"
            src={data?.heroImage.url || "/image-placeholder.png"}
          />
        </div>
        {/* list images */}
        <ListImage
          className="px-10"
          projectImages={data?.projectImages || []}
        />
        {/* next or prev project */}
        <RelateLink nextLink={nextSlug} prevLink={prevSlug} />
      </TracingBeam>
    </div>
  ) : (
    <div className="relative flex h-full w-full flex-col items-center gap-10">
      <NotFound
        text="Project not found!"
        options={
          <Link href="#projects-featured">
            <Button
              variant="gooeyRight"
              className={cn(
                "w-full",
                buttonVariants({
                  variant: "expandIcon",
                }),
                "hover:text-primary-foreground",
              )}
              type="submit"
            >
              <span className="px-3 font-bold">See all projects</span>
            </Button>
          </Link>
        }
      />
      <ProjectFeatured className="mt-0" numberOfProject={3} />
    </div>
  );
}
