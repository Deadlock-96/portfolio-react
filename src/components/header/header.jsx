import './header.css'
import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './header_socials'

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Akshay Kumar Eklare</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="Akshay"/>
        </div>

        <a href="#contacts" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header