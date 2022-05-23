import './testimonial.css';
import React from 'react';
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Akshay',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, reiciendis exercitationem. Exercitationem dolorem alias excepturi nesciunt molestias dicta accusamus ratione.'
  },
  {
    avatar: AVTR2,
    name: 'Akshay',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, reiciendis exercitationem. Exercitationem dolorem alias excepturi nesciunt molestias dicta accusamus ratione.'
  },
  {
    avatar: AVTR3,
    name: 'Akshay',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, reiciendis exercitationem. Exercitationem dolorem alias excepturi nesciunt molestias dicta accusamus ratione.'
  },
  {
    avatar: AVTR4,
    name: 'Akshay',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, reiciendis exercitationem. Exercitationem dolorem alias excepturi nesciunt molestias dicta accusamus ratione.'
  }
]

const testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review From Clients</h5>
      <h2>Testimonial</h2>

      <Swiper className="container testimonial_container"
            // install Swiper modules
            modules={[Pagination, A11y]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
            <SwiperSlide key={index} className="testimonial">
            <div className="client_avatar">
              <img src={avatar} alt="" />
            </div>
              <h5>{name}</h5>
              <small className='client_review'>{review}</small>
          </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonial