import React from "react";
import LinkAnimate from "@/components/base/animations/link-animate";

export default function Footer() {
  return (
    <div className="relative z-10 mx-auto my-5 flex h-full w-full max-w-5xl flex-col items-center space-y-10 overflow-hidden px-10 py-5">
      <div className="flex w-full items-center justify-between gap-5">
        <div className="flex gap-2 text-xl">
          <span>Design by</span>
          <LinkAnimate
            id="footer__link--winlax"
            className="text-xl"
            href="https://www.instagram.com/win_lax/"
            isNormalLink
          >
            Win Lã
          </LinkAnimate>
        </div>
      </div>
    </div>
  );
}
