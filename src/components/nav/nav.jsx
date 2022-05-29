import "./nav.css";
import React from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDots } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
// import { CgArrowBottomRight } from "react-icons/cg";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="/#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>

      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>

      <a
        href="#exprience"
        onClick={() => setActiveNav("#exprience")}
        className={activeNav === "#exprience" ? "active" : ""}
      >
        <BiBook />
      </a>

      <a
        href="#service"
        onClick={() => setActiveNav("#service")}
        className={activeNav === "#service" ? "active" : ""}
      >
        <RiServiceLine />
      </a>

      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDots />
      </a>

      {/* <a
        href="#footer"
        onClick={() => setActiveNav("#footer")}
        className={activeNav === "#footer" ? "active" : ""}
      >
        <CgArrowBottomRight />
      </a> */}
    </nav>
  );
};

export default Nav;
