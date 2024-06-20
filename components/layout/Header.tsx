import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "../ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "../base/mode-toggle";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="absolute top-0 z-50 flex w-full items-center justify-between bg-neutral-100/10 px-5 py-5 dark:bg-neutral-900/10 md:px-12 lg:px-14">
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
      <Button className="hidden" variant={"ghost"} size={"icon"}>
        <span className="sr-only">Menu</span>
        <Menu size={50} />
      </Button>
      <div className="flex gap-2">
        <Link
          className={buttonVariants({
            variant: "outline",
            className: "rounded-full",
          })}
          href={"https://winlax-portfolio-93swck82h-2108win.vercel.app/"}
        >
          Back to Version 1
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
