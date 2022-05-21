import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'

const header_socials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><BsTwitter/></a>
    </div>
  )
}

export default header_socials