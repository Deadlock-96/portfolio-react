import './nav.css'
import React from 'react'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDots} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'

const nav = () => {
  return (
    <nav>
      <a href="#home"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contacts"><BiMessageSquareDots/></a>
    </nav>
  )
}

export default nav