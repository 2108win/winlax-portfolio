import { Button, buttonVariants } from "@/components/ui/button";
import BlurFade from "@/components/utils/animations/blur-fade";
import SparklesText from "@/components/utils/animations/text/sparkles-text";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

type NotFoundProps = {
  text?: string;
  colors?: {
    first: string;
    second: string;
  };
  options?: ReactNode;
};

export default function NotFound({ text, colors, options }: NotFoundProps) {
  return (
    <div className="z-50 mx-auto mt-36 flex max-w-5xl flex-col items-center justify-center gap-10 px-10">
      <BlurFade delay={0.5} inView>
        <SparklesText
          text={"404"}
          className="font-clashDisplay text-7xl font-bold drop-shadow-2xl sm:text-8xl md:text-9xl lg:text-[10rem]"
          colors={{ first: "#0ABFBC", second: "#FC354C" }}
        />
      </BlurFade>
      <BlurFade delay={2} inView>
        <SparklesText
          className="text-3xl font-bold"
          text={text || "Oh no! We can't find the page you're looking for."}
          colors={colors || { first: "#5D26C1", second: "#6be585" }}
          auraPosition={"right"}
        />
      </BlurFade>
      <BlurFade delay={3} inView>
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <Link href={"/"}>
            <Button
              variant="shine"
              Icon={ArrowLeftIcon}
              iconPlacement="left"
              className={cn(
                "w-full",
                buttonVariants({
                  variant: "expandIcon",
                }),
                "hover:text-primary-foreground",
              )}
              type="submit"
            >
              <span className="px-3 font-bold">Go Home</span>
            </Button>
          </Link>
          {options && (
            <>
              <span>or</span>
              {options}
            </>
          )}
        </div>
      </BlurFade>
    </div>
  );
}
