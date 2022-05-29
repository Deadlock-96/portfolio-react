import "./header.css";
import React from "react";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./header_socials";
import Logo from "../../assets/AKE - Solid White.png";
import TypeAnimation from "react-type-animation";

const header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>
          <TypeAnimation
            sequence={[
              "< Akshay Kumar Eklare .../>",
              1000,
              "< A Developer />",
              1000,
              "< A Learner />",
              1000,
              "< From Mumbai />",
              1000,
              "",
            ]}
            wrapper="h1"
            repeat={Infinity}
          />
        </h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="Akshay" />
        </div>
      </div>
      <div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
