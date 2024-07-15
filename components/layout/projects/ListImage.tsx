import BlurFade from "@/components/utils/animations/blur-fade";
import ImageFadeZoom from "@/components/utils/animations/image-fade-zoom";
import { Project } from "@/lib/interface";
import { cn } from "@/lib/utils";

const ListImage = ({
  projectImages,
  className,
}: {
  projectImages: Project["projectImages"];
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-5xl flex-col gap-5 px-10 sm:gap-10",
        className,
      )}
    >
      {projectImages.map((item, i) => (
        <BlurFade key={item._id} delay={0.25 + i * 0.05} inView>
          <ImageFadeZoom
            containerClassName="rounded-sm shadow-md md:rounded-lg border-[0.5px] border-foreground/20"
            className="rounded-sm md:rounded-lg"
            src={item.url || "/image-placeholder.png"}
            nameImage={item.nameImage}
          />
        </BlurFade>
      ))}
    </div>
  );
};

export default ListImage;
