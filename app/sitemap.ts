import { Project } from "@/lib/interface";
import { getProjectList } from "@/utils/getProjects";
import { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://winlax-portfolio.vercel.app";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjectList();
  console.log("🚀 ~ sitemap ~ projects:", projects);
  const projectEntries = projects.map((project: Project) => ({
    url: `${baseUrl}/projects/${project?.slug}`,
    lastModified: new Date(project?._createdAt),
    changeFrequency: "monthly",
    priority: 0.5,
  }));
  return [
    {
      url: baseUrl,
      lastModified: new Date("2024-06-01"),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/cv`,
      lastModified: new Date("2024-06-01"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date("2024-06-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2024-06-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...(projectEntries as MetadataRoute.Sitemap),
  ];
}
