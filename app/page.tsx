import About from "@/components/base/home/About";
import Hero from "@/components/base/home/Hero";
export default function Home() {
  return (
    <div className="z-50 flex h-full min-h-svh w-full flex-col items-center justify-center space-y-20 overflow-hidden">
      <Hero />
      <About />
    </div>
  );
}
