import "./exprience.css";
import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";

const exprience = () => {
  return (
    <section id="exprience">
      <h5>What skills I have</h5>
      <h2>&lt; Technology Stack /&gt;</h2>
        <span className="tags top-tags">&lt; article &gt;</span>
      <div className="container exprience-container">
        <div className="exprience_frontend">
          <h3>Frontend Development</h3>
          <div className="exprience_content">
            <article className="exprience_details">
              <BsPatchCheckFill className="exprience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exprience_details">
              <BsPatchCheckFill className="exprience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exprience_details">
              <BsPatchCheckFill className="exprience_details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exprience_details">
              <BsPatchCheckFill className="exprience_details-icon" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="exprience_details">
              <BsPatchCheckFill className="exprience_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="exprience_details">
              <BsPatchCheckFill className="exprience_details-icon" />
              <div>
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </div>
            </article>
          </div>
        </div>
        
        <div className="exprience_backend">
          <h3>Backend Development</h3>
          <div className="exprience_content">
            <article className="exprience_details">
              <BsPatchCheckFill className="exprience_details-icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exprience_details">
              <BsPatchCheckFill className="exprience_details-icon" />
              <div>
                <h4>ExpressJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            {/* <article className='exprience_details'><BsPatchCheckFill className='exprience_details-icon'/>
            <div>
            <h4>MySQL</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='exprience_details'><BsPatchCheckFill className='exprience_details-icon'/>
            <div>
            <h4>Firebase</h4>
            <small className='text-light'>Beginner</small>
            </div>
            </article>

            <article className='exprience_details'><BsPatchCheckFill className='exprience_details-icon'/>
           <div>
           <h4>MongoDB</h4>
            <small className='text-light'>Beginner</small>
           </div>
            </article> */}

            {/* <article className='exprience_details'><BsPatchCheckFill className='exprience_details-icon'/>
            <div>
            <div>
            <h4>Bootstrap</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </div>
            </article> */}
          </div>
        </div>

        <div className="exprience_backend">
          <h3>Database</h3>
          <div className="exprience_content">
            <article className="exprience_details">
              <BsPatchCheckFill className="exprience_details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exprience_details">
              <BsPatchCheckFill className="exprience_details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exprience_details">
              <BsPatchCheckFill className="exprience_details-icon" />
              <div>
                <h4>Firebase</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exprience_details">
              <BsPatchCheckFill className="exprience_details-icon" />
              <div>
                <h4>REST API</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="exprience_backend">
          <h3>Testing</h3>
          <div className="exprience_content">
            <article className="exprience_details">
              <BsPatchCheckFill className="exprience_details-icon" />
              <div>
                <h4>Postman</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
        <span className="tags bottom-tags">&lt;/ article &gt;</span>
    </section>
  );
};

export default exprience;
