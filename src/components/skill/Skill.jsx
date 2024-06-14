import React from 'react'
import "./skill.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Skill = () => {
  return (
    <section id="skill">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className='container skill_container'>
        <div className='skill_frontend'>
          <h3>Frontend Development</h3>
          <div className='skill_content'>
            <article className='skill_detail'>
              <div className='skill_icon'>
              <BsFillPatchCheckFill className='skill_detail-icon' />
              <h4>HTML5</h4>
              </div>
              <small className='text-light'>experienced</small>
            </article>
            <article className='skill_detail'>
              <div className='skill_icon'>
              <BsFillPatchCheckFill className='skill_detail-icon' />
              <h4>CSS3</h4>
              </div>
              <small className='text-light'>experienced</small>
            </article>
            <article className='skill_detail'>
              <div className='skill_icon'>
              <BsFillPatchCheckFill className='skill_detail-icon'/>
              <h4>Javascript</h4>
              </div>
              <small className='text-light'>experienced</small>
            </article>
            <article className='skill_detail'>
              <div className='skill_icon'>
              <BsFillPatchCheckFill className='skill_detail-icon'/>
              <h4>ReactJS</h4>
              </div>
              <small className='text-light'>intermediate</small>
            </article>
            <article className='skill_detail'>
              <div className='skill_icon'>
              <BsFillPatchCheckFill className='skill_detail-icon'/>
              <h4>Bootstrap</h4>
              </div>
              <small className='text-light'>experienced</small>
            </article>
            <article className='skill_detail'>
              <div className='skill_icon'>
              <BsFillPatchCheckFill className='skill_detail-icon' />
              <h4>Shopify Ecommerce</h4>
              </div>
              <small className='text-light'>experienced</small>
            </article>
            <article className='skill_detail'>
              <div className='skill_icon'>
              <BsFillPatchCheckFill className='skill_detail-icon' />
              <h4>Liquid</h4>
              </div>
              <small className='text-light'>experienced</small>
            </article>
            <article className='skill_detail'>
              <div className='skill_icon'>
              <BsFillPatchCheckFill className='skill_detail-icon' />
              <h4>Tailwind</h4>
              </div>
              <small className='text-light'>experienced</small>
            </article>
          </div>
        </div>
        <div className='skill_backend'>
          <h3>Backend Development</h3>
          <div className='skill_content'>
            <article className='skill_detail'>
            <div className='skill_icon'>
              <BsFillPatchCheckFill className='skill_detail-icon'/>
              
              <h4>NodeJS</h4>
              </div>
              <small className='text-light'>Basic</small>
            </article>
            <article className='skill_detail'>
            <div className='skill_icon'>
              <BsFillPatchCheckFill className='skill_detail-icon'/>
            
              <h4>ExpressJS</h4>
              </div>
              <small className='text-light'>Basic</small>
            </article>
            <article className='skill_detail'>
            <div className='skill_icon'>
              <BsFillPatchCheckFill className='skill_detail-icon'/>
             
              <h4>MongoDB</h4>
              </div>
              <small className='text-light'>Basic</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill
