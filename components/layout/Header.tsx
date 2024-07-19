import LinkTransition from "@/components/utils/animations/link-transition";
import MenuButton from "@/components/utils/menu-button";
import { ModeToggle } from "@/components/utils/mode-toggle";
import Image from "next/image";

const Header = () => {
  return (
    <div className="fixed top-0 z-[9999] flex w-full items-center justify-between px-5 py-5 md:px-12 lg:px-14">
      <LinkTransition
        href={"/"}
        hasAnimate={false}
        hasUnderline={false}
        className="group z-50"
      >
        <Image
          src={"/logo.png"}
          alt="logo"
          width={80}
          height={80}
          className="h-12 w-12 transition-all duration-300 group-hover:scale-95 md:h-16 md:w-16"
          priority
        />
      </LinkTransition>
      <MenuButton className="z-40" />
      <div className="z-50 flex w-12 items-center justify-center md:w-16">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
