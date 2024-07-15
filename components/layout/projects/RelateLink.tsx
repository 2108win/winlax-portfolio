import LinkTransition from "@/components/utils/animations/link-transition";
import { ArrowLeft, ArrowRight } from "lucide-react";

const RelateLink = ({
  prevLink,
  nextLink,
}: {
  prevLink: string;
  nextLink: string;
}) => {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-wrap justify-around gap-5 overflow-hidden">
      {prevLink && (
        <LinkTransition
          href={`/projects/${prevLink}`}
          isNormalLink
          hasUnderline={false}
          hasAnimate={false}
          icon={
            <ArrowLeft className="hidden w-14 transition-all duration-500 group-hover:-translate-x-4 sm:inline-block" />
          }
          iconLeft
          className="group flex items-center justify-end gap-2 text-xl font-normal md:text-2xl"
        >
          {nextLink ? "Prev " + prevLink : "Go " + prevLink}
        </LinkTransition>
      )}
      {nextLink && (
        <LinkTransition
          href={`/projects/${nextLink}`}
          hasUnderline={false}
          className="group flex items-center justify-start gap-2 text-xl font-normal md:text-2xl"
          hasAnimate={false}
          icon={
            <ArrowRight className="group hidden w-14 transition-all duration-500 group-hover:translate-x-4 sm:inline-block" />
          }
        >
          {prevLink ? "Next " + nextLink : "Go " + nextLink}
        </LinkTransition>
      )}
    </div>
  );
};

export default RelateLink;
