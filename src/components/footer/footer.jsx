import './footer.css'
import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const footer = () => {
  return (
    <footer>
      <a href="/#" className='footer_logo'>Akshay</a>
      <ul className="permainks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#exprience">Experience</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact Me </a></li>
      </ul>

      <div className="footer_socials">        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><BsTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Akshay Kumar Eklare. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default footer