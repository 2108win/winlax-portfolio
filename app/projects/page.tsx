import ProjectFeatured from "@/components/layout/projects/ProjectFeatured";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects - All projects I have done in my journey.",
  openGraph: {
    images: [
      {
        url: "/og/og-projects.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};
export default function ProjectPage() {
  return <ProjectFeatured />;
}
