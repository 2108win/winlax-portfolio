import ImageHero from "@/components/layout/projects/ImageHero";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};
export default function ProjectDetail({ params }: Props) {
  return (
    <div className="flex flex-col gap-20">
      <ImageHero slug={params.slug} />
    </div>
  );
}
