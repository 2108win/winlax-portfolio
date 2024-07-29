"use client";
import { InfiniteMovingItems } from "@/components/utils/animations/text/infinite-moving-items";
import { Icons } from "@/utils/icons";
import NotFound from "../not-found";
export default function TryingPage() {
  return (
    <div className="relative mx-auto mt-32 flex w-full max-w-7xl flex-col items-center justify-center gap-10">
      <InfiniteMovingItems
        items={Icons}
        speed="normal"
        itemClassName="text-6xl p-4 rounded-sm"
        direction="left"
        className="-rotate-12"
      />
      <InfiniteMovingItems
        items={Icons}
        speed="normal"
        itemClassName="text-6xl p-4 rounded-sm"
        direction="right"
        className="absolute left-0 top-0 rotate-12"
      />
      <NotFound text="This page is still in development" />
    </div>
  );
}
