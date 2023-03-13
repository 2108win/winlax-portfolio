import React from "react";
import { Link } from "react-scroll";
import { BiArrowToTop } from "react-icons/bi";
type Props = {};

export default function ScrollToTop({}: Props) {
  return (
    <div className="buttonToTop">
      <Link activeClass="active" to="hero" spy={true} smooth={true} duration={500}>
        <BiArrowToTop className="w-8 h-8 text-grayLight" />
      </Link>
    </div>
  );
}
