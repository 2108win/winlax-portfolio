import SparklesText from "@/components/ui/sparkles-text";
import BlurFade from "@/components/utils/animations/blur-fade";

export default function NotFound() {
  return (
    <div className="z-50 mx-auto max-w-5xl px-10">
      <div className="z-[999] mt-36 flex flex-col items-center justify-center gap-5">
        <BlurFade delay={0.5} inView>
          <SparklesText
            text={"404"}
            className="font-clashDisplay text-7xl font-bold drop-shadow-2xl sm:text-6xl md:text-8xl lg:text-9xl"
            colors={{ first: "#0ABFBC", second: "#FC354C" }}
          />
        </BlurFade>
        <BlurFade delay={2} inView>
          <SparklesText
            className="text-3xl font-bold"
            text="Oh no! We can't find the page you're looking for."
            colors={{ first: "#5D26C1", second: "#6be585" }}
            auraPosition={"right"}
          />
        </BlurFade>
      </div>
    </div>
  );
}
