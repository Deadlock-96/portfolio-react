import "./about.css";
import React from "react";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { AiTwotoneFolderAdd } from "react-icons/ai";

const about = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>&lt; About Me /&gt;</h2>

      <div className="container about_container">

        <div className="about_me">
          <div className="about_me-image">
          <img src={ME} alt="About_image" />
          </div>
        </div>

        <div className="about_content">
          <span className="tags bottom-tags">&lt; cards &gt;</span>
          <div className="about_cards">

            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>Click to Know More</small>
            </article>

            <article className="about_card">
              <AiTwotoneFolderAdd className="about_icon" />
              <h5>Designated Projects</h5>
              <small>Click to Know More</small>
            </article>

            <article className="about_card">
              <FaUsers className="about_icon" />
              <h5>Certification and Challanges</h5>
              <small>Click to know more</small>
            </article>
          </div>
          <span className="tags bottom-tags">&lt;/ cards &gt;</span> <br />
          <p>
            <span className="tags top-tags">&lt; p &gt;</span>
            Akshay having 3.5 Months of intermediate level experience in Backend
            Developing and 2 months of beginner level experince in FrontEnd
            Developing. Currently working on React to get a good hands on it.
            <span className="tags bottom-tags">&lt;/ p &gt;</span>
          </p>
          <br />
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
