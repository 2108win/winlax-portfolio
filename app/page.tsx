import About from "@/components/layout/home/About";
import Hero from "@/components/layout/home/Hero";
import ProjectFeatured from "@/components/layout/projects/ProjectFeatured";
export default function Home() {
  return (
    <div className="z-50 flex h-full min-h-svh w-full flex-col items-center justify-center space-y-20 overflow-hidden">
      <Hero />
      <About />
      <ProjectFeatured />
    </div>
  );
}
