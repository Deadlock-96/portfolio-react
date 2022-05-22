import './exprience.css';
import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'

const exprience = () => {
  return (
    <section id='exprience'>
      <h5>What skills I have</h5>
      <h2>My Exprience</h2>
      <div className='container exprience-container'>
        <div className="exprience_frontend">
          <h3>Frontend Development</h3>
          <div className="exprience_content">

            <article className='exprience_details'><BsPatchCheckFill className='exprience_details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='exprience_details'><BsPatchCheckFill className='exprience_details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='exprience_details'><BsPatchCheckFill className='exprience_details-icon'/>
            <div>
            <h4>Javascript</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='exprience_details'><BsPatchCheckFill className='exprience_details-icon'/>
            <div>
            <h4>Angular</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='exprience_details'><BsPatchCheckFill className='exprience_details-icon'/>
           <div>
           <h4>React</h4>
            <small className='text-light'>Experienced</small>
           </div>
            </article>

            <article className='exprience_details'><BsPatchCheckFill className='exprience_details-icon'/>
            <div>
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </div>
            </article>

          </div>
        </div>

        <div className="exprience_backend">
        <h3>Backend Development</h3>
          <div className="exprience_content">

        
          <article className='exprience_details'><BsPatchCheckFill className='exprience_details-icon'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='exprience_details'><BsPatchCheckFill className='exprience_details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='exprience_details'><BsPatchCheckFill className='exprience_details-icon'/>
            <div>
            <h4>Javascript</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='exprience_details'><BsPatchCheckFill className='exprience_details-icon'/>
            <div>
            <h4>Angular</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>

            <article className='exprience_details'><BsPatchCheckFill className='exprience_details-icon'/>
           <div>
           <h4>React</h4>
            <small className='text-light'>Experienced</small>
           </div>
            </article>

            <article className='exprience_details'><BsPatchCheckFill className='exprience_details-icon'/>
            <div>
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </div>
            </article>
          </div>
        </div>

        {/* <div className="exprience_tools">
        <h3>Tools</h3>
          <div className="exprience_content">

            <article className='exprience_details'><BsPatchCheckFill className='exprience_details-icon'/>
            <h4>VS Code</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='exprience_details'><BsPatchCheckFill className='exprience_details-icon'/>
            <h4>Postman</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='exprience_details'><BsPatchCheckFill className='exprience_details-icon'/>
            <h4>MySQL</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='exprience_details'><BsPatchCheckFill className='exprience_details-icon'/>
            <h4>Sequelize</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='exprience_details'><BsPatchCheckFill className='exprience_details-icon'/>
            <h4>REST API</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='exprience_details'><BsPatchCheckFill className='exprience_details-icon'/>
            <h4>MongoDB</h4>
            <small className='text-light'>Experienced</small>
            </article>

          </div> */}
        {/* </div> */}
        </div>
      </section>
  )
}

export default exprience