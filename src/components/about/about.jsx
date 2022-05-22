import './about.css';
import React from 'react'
import ME from '../../assets/me-about.jpg';
import {FaAward} from 'react-icons/fa';
import {FaUsers} from 'react-icons/fa';
import{AiTwotoneFolderAdd} from 'react-icons/ai';

const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <img src={ME} alt="About_image" />
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
            <FaAward className="about_icon"/>
              <h5>Experince</h5>
              <small>5 Months Woring Experince</small>
            </article>

            <article className='about_card'>
            <FaUsers className="about_icon"/>
              <h5>Clients</h5>
              <small>200+ clients worldwide</small>
            </article>

            <article className='about_card'>
            <AiTwotoneFolderAdd className="about_icon"/>
              <h5>Projects</h5>
              <small>80+ completed projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor mollitia, ducimus, ratione quis ipsa earum ipsum quia iure quibusdam architecto eius repudiandae, doloremque eaque aliquam facilis atque animi deleniti vero.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default about