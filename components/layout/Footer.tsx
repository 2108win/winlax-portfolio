import React from "react";
import { ArrowUpRight } from "lucide-react";
import LinkTransition from "@/components/utils/animations/link-transition";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
const mail =
  "mailto:winlax2108@gmail.com?cc=dangcapcuawin@gmail.com&subject=Exploring%20Collaboration%20Opportunities%20-%20From%20winlax-portfolio&body=Dear%20Win%2C%0D%0A%0D%0AI%20hope%20this%20email%20finds%20you%20well.%0D%0A%0D%0AMy%20name%20is%20%5BYour%20Name%5D%2C%20and%20I%20am%20%5BYour%20Position%5D%20at%20%5BYour%20Company%5D.%20I%20recently%20came%20across%20your%20impressive%20work%20in%20the%20field%20of%20%5BYour%20Expertise%2FIndustry%5D%2C%20and%20I%20am%20very%20interested%20in%20exploring%20potential%20collaboration%20opportunities%20with%20you.%0D%0A%0D%0AWe%20are%20experts%20in%20%5Byour%20company's%20products%20and%20services%5D%2C%20and%20we%20think%20we%20can%20work%20well%20together.%20We%20like%20how%20you're%20doing%20something%20new%20and%20different%2C%20and%20we%20think%20we%20can%20do%20great%20things%20together.%0D%0A%0D%0A%5BEstablish%20a%20schedule%20for%20the%20meeting%5D%0D%0A%0D%0AThank%20you%20for%20considering%20this%20opportunity.%20I'm%20excited%20to%20work%20with%20you%20and%20see%20how%20we%20can%20benefit%20each%20other.%0D%0A%0D%0ABest%20regards%2C%0D%0A%5BYour%20sign%5D%0D%0A%0D%0A%0D%0AFrom%20website%20winlax-portfolio";

const socialData = [
  {
    socialName: "linkedin",
    display: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/2108win/",
  },
  {
    socialName: "github",
    display: <FaGithub />,
    url: "https://github.com/2108win",
  },
  {
    socialName: "instagram",
    display: <FaInstagram />,
    url: "https://www.instagram.com/win_lax/",
  },
  {
    socialName: "facebook",
    display: <FaFacebookF />,
    url: "https://www.facebook.com/2108win/",
  },
];

export default function Footer() {
  return (
    <div className="relative z-50 mx-auto flex h-full w-full max-w-5xl flex-col items-center overflow-hidden px-10 py-20">
      <div className="flex w-full flex-col justify-between gap-5 md:flex-row md:items-center">
        <div className="flex gap-2 text-xl">
          <span>Design by</span>
          <LinkTransition
            className="text-xl font-medium"
            href="https://www.instagram.com/win_lax/"
            isNormalLink
          >
            Win Lã
          </LinkTransition>
        </div>
        <div className="flex w-full flex-1 flex-col justify-between gap-4 sm:flex-row md:items-center md:justify-end">
          <LinkTransition
            href={mail}
            className="group text-xl font-medium"
            isNormalLink
            icon={
              <ArrowUpRight className="transition-all duration-500 group-hover:rotate-45" />
            }
          >
            Contact me by email
          </LinkTransition>
          <div className="flex items-center gap-4">
            {socialData.map((item) => (
              <LinkTransition
                key={"footer__link--social" + item.socialName}
                href={item.url}
                className="text-xl font-medium"
                isNormalLink
              >
                {item.display}
              </LinkTransition>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
