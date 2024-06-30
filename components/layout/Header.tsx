import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "@/components/base/mode-toggle";
import MenuButton from "../base/menu-button";

const Header = () => {
  return (
    <div className="sticky top-0 z-[9999] flex w-full items-center justify-between bg-neutral-100/30 px-5 py-5 dark:bg-neutral-900/10 md:px-12 lg:px-14">
      <Link href={"/"} className="hover:scale-90">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={80}
          height={80}
          className="h-12 w-12 md:h-16 md:w-16"
          priority
        />
      </Link>
      <MenuButton />
      <ModeToggle />
    </div>
  );
};

export default Header;
