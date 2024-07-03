"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { animationPageIn } from "@/lib/animations";
import { Loader2 } from "lucide-react";
import { useRouter, useSelectedLayoutSegments } from "next/navigation";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathName = useSelectedLayoutSegments();
  useEffect(() => {
    animationPageIn();
  }, []);
  return (
    <div className="z-50">
      <div
        id="banner__circle"
        className="fixed left-0 top-0 z-[999999] flex h-[200vh] w-full flex-col items-center gap-5 bg-orange-400"
      >
        <Loader2 size={100} className="mt-[40vh] animate-spin text-white" />
        <Button
          className="w-fit"
          onClick={() => router.push(`/${pathName.at(0)}`)}
        >
          Reload page {pathName.at(-1)}
        </Button>
      </div>
      <Header />

      {children}
      <Footer />
      <div className="z-10 mt-auto flex items-center justify-center py-8 text-center text-xl font-medium">
        DEVELOPING
        <Loader2 className="ml-2 h-6 w-6 animate-spin text-orange-400" />
      </div>
    </div>
  );
}
