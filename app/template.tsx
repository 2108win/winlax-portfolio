"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { buttonVariants } from "@/components/ui/button";
import { animationPageIn } from "@/lib/animations";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  useEffect(() => {
    document.getElementById("banner__circle") && animationPageIn();
  }, []);
  return (
    <div className="z-50">
      <div
        id="banner__circle"
        className="fixed left-0 top-0 z-[999999] flex h-[200vh] w-full flex-col items-center gap-5 bg-orange-400"
      >
        <Loader2 size={100} className="mt-[40vh] animate-spin text-white" />
        <Link
          href={`/${pathName}`}
          className={buttonVariants({ className: "w-fit" })}
        >
          Reload page
        </Link>
      </div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
