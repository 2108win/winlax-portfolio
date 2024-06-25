import React from "react";
import LinkAnimate from "@/components/base/animations/link-animate";
import { TextAnimate } from "../base/animations/text-animate";

const mail =
  "mailto:winlax2108@gmail.com?cc=dangcapcuawin@gmail.com&subject=Exploring%20Collaboration%20Opportunities%20-%20From%20winlax-portfolio&body=Dear%20Win%2C%0D%0A%0D%0AI%20hope%20this%20email%20finds%20you%20well.%0D%0A%0D%0AMy%20name%20is%20%5BYour%20Name%5D%2C%20and%20I%20am%20%5BYour%20Position%5D%20at%20%5BYour%20Company%5D.%20I%20recently%20came%20across%20your%20impressive%20work%20in%20the%20field%20of%20%5BYour%20Expertise%2FIndustry%5D%2C%20and%20I%20am%20very%20interested%20in%20exploring%20potential%20collaboration%20opportunities%20with%20you.%0D%0A%0D%0AWe%20are%20experts%20in%20%5Byour%20company's%20products%20and%20services%5D%2C%20and%20we%20think%20we%20can%20work%20well%20together.%20We%20like%20how%20you're%20doing%20something%20new%20and%20different%2C%20and%20we%20think%20we%20can%20do%20great%20things%20together.%0D%0A%0D%0A%5BEstablish%20a%20schedule%20for%20the%20meeting%5D%0D%0A%0D%0AThank%20you%20for%20considering%20this%20opportunity.%20I'm%20excited%20to%20work%20with%20you%20and%20see%20how%20we%20can%20benefit%20each%20other.%0D%0A%0D%0ABest%20regards%2C%0D%0A%5BYour%20sign%5D%0D%0A%0D%0A%0D%0AFrom%20website%20winlax-portfolio";

export default function ConnectMe() {
  return (
    <div className="relative z-10 mx-auto my-10 flex h-full w-full max-w-5xl flex-col items-center space-y-10 overflow-hidden px-10 py-20">
      <div className="flex w-full flex-col space-y-8">
        <TextAnimate
          id="connectMe__text"
          className="text-pretty font-clashDisplay text-2xl sm:text-4xl md:text-6xl"
        >
          Want to Start a Project?
        </TextAnimate>
        <LinkAnimate
          id="connectMe__link"
          className="flex-wrap text-pretty text-5xl sm:text-8xl md:text-9xl lg:text-[10rem]"
          href={mail}
          hasUnderline={false}
        >
          Let's Talk
        </LinkAnimate>
      </div>
    </div>
  );
}
