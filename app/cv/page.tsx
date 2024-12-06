import { buttonVariants } from "@/components/ui/button";
import ButtonDownload from "@/components/utils/button-download";
import { cn } from "@/lib/utils";
import CVWinlaxFrontendDeveloperDark from "@/public/cv-winlax-frontend-developer-dark.png";
import CVWinlaxFrontendDeveloperLight from "@/public/cv-winlax-frontend-developer-light.png";
import Image from "next/image";
import Link from "next/link";
export default function CVPage() {
  return (
    <div className="relative z-50 mt-20 flex h-full flex-col items-center justify-center px-5 py-10">
      <ButtonDownload />
      <div className="group w-full max-w-5xl space-y-10">
        {/* <div className="relative">
          <Link
            target="_blank"
            href={"/cover-letter-light.pdf"}
            className={cn(
              buttonVariants({ variant: "gooeyLeft" }),
              buttonVariants({ variant: "secondary", size: "sm" }),
              "absolute bottom-0 left-5 z-[-1] shadow-md transition-all duration-500 group-hover:-bottom-5 group-hover:z-10",
            )}
          >
            cover-letter.pdf
          </Link>
          image cover-letter-light
          <Image
            placeholder="blur"
            src={CoverLetterLight}
            alt="cover-letter-light"
            width={1224}
            height={710}
            className="w-full overflow-hidden rounded-lg border-[0.5px] border-foreground/20 shadow-lg transition-all dark:invisible"
          />
          image cover-letter-dark
          <Image
            placeholder="blur"
            src={CoverLetterDark}
            alt="cover-letter-dark"
            width={1224}
            height={710}
            className="invisible absolute inset-0 left-0 top-0 w-full overflow-hidden rounded-lg border-[0.5px] border-foreground/20 shadow-lg transition-all dark:visible"
          />
        </div> */}
        <div className="relative">
          <Link
            target="_blank"
            href={"/cv-winlax-frontend-developer-main.pdf"}
            className={cn(
              buttonVariants({ variant: "gooeyLeft" }),
              buttonVariants({ variant: "secondary", size: "sm" }),
              "absolute bottom-0 left-5 z-[-1] shadow-md transition-all duration-500 group-hover:-bottom-5 group-hover:z-10",
            )}
          >
            {" "}
            cv-winlax-frontend-developer-main.pdf
          </Link>
          {/* image cv-winlax-frontend-developer-light */}
          <Image
            placeholder="blur"
            src={CVWinlaxFrontendDeveloperLight}
            alt="cv-winlax-frontend-developer-light"
            width={1224}
            height={1584}
            className="w-full overflow-hidden rounded-lg border-[0.5px] border-foreground/20 !bg-background shadow-lg transition-all dark:invisible"
          />
          {/* image cv-winlax-frontend-developer-dark */}
          <Image
            placeholder="blur"
            src={CVWinlaxFrontendDeveloperDark}
            alt="cv-winlax-frontend-developer-dark"
            width={1224}
            height={1584}
            className="invisible absolute inset-0 left-0 top-0 overflow-hidden rounded-lg border-[0.5px] border-foreground/20 !bg-background shadow-lg transition-all dark:visible"
          />
        </div>
      </div>
    </div>
  );
}
