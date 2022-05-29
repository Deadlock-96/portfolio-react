import "./testimonial.css";
import React from "react";
import KrackinInternship from "../../assets/Krackin Internship.jpg";
import Guvi from "../../assets/Guvi Robotics.png";
import R from "../../assets/certificate - R.jpg";
import AMCEC from "../../assets/AMCEC.jpg";
import Python from "../../assets/HackerRank Pythonbasic.png";

// import Swiper core and required modules
import { Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: KrackinInternship,
    name: "Data Science with Tableau and Python, Machine Learning by KRACKiN iNRTURE",
    // review:
    //   "This internship was all about Data Science with Tableau and Python & Machine Learning.",
  },
  {
    avatar: Guvi,
    name: "Robotic Process Atomation by GUVI",
    // review:
    //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, reiciendis exercitationem. Exercitationem dolorem alias excepturi nesciunt molestias dicta accusamus ratione.",
  },
  {
    avatar: R,
    name: "R Programming from Udemy",
    // review:
    //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, reiciendis exercitationem. Exercitationem dolorem alias excepturi nesciunt molestias dicta accusamus ratione.",
  },
  {
    avatar: AMCEC,
    name: "Devops: Containerization with Docker by AMC Engineering College",
    // review:
    //   "It was a Three days workshop conducted by AMCEC Engneering College. This Worshop was all about the basics of Docker, Use of Docker ",
  },
  {
    avatar: Python,
    name: "Basic Pyhton Certification from HackerRank",
    // review:
    //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, reiciendis exercitationem. Exercitationem dolorem alias excepturi nesciunt molestias dicta accusamus ratione.",
  },
];

const testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Extra Activites</h5>
      <h2>&lt; Certification /&gt;</h2>
      <span className="tags top-tags">&lt; Swiper &gt;</span>
      <Swiper
        className="container testimonial_container"
        // install Swiper modules
        modules={[Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="" />
              </div>
              <h5>{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <span className="tags bottom-tags">&lt;/ Swiper &gt;</span>
    </section>
  );
};

export default testimonial;
