"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { animationPageIn } from "@/lib/animations";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animationPageIn();
  }, []);
  return (
    <div className="z-50">
      <div
        id="banner__circle"
        className="fixed left-0 top-0 z-[999999] h-[200vh] w-full bg-orange-400"
      ></div>
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
