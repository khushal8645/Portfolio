import React from 'react'
import "./about.css";
import Me from "../../about.jpg";
import { FaAward } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_img'>
            <img src={Me} alt='about-img' />
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Eduction</h5>
              <small>Final Year Computer Engineer Student</small>
            </article>
            <article className='about_card'>
              <HiUsers className='about_icon' />
              <h5>Grades</h5>
              <small>7.67 CGPA</small>
            </article>
            <article className='about_card'>
              <MdLocationPin className='about_icon' />
              <h5>Loaction</h5>
              <small>Ahmedabad</small>
            </article>
          </div>

          <p>"Hello! I'm Khushal Nandaniya, a passionate and motivated 4th-year computer engineering student specializing in both frontend and backend development. With a strong foundation in computer science and programming, I possess a solid understanding of web technologies and frameworks.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
