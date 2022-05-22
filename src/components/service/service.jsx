import './service.css'
import React from 'react'
import {BiCheck} from 'react-icons/bi'

const service = () => {
  return (
    <section id='service'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>
              UI/UX Designer
            </h3>
          </div>
          <ul className="service_list">
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quis?</p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quis?</p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quis?</p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quis?</p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quis?</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>
              Web Development
            </h3>
          </div>
          <ul className="service_list">
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quis?</p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quis?</p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quis?</p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quis?</p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quis?</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>
              Content Creation
            </h3>
          </div>
          <ul className="service_list">
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quis?</p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quis?</p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quis?</p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quis?</p>
            </li>
            <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, quis?</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default service