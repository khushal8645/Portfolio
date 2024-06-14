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
              <small>Computer Engineering Completed</small>
            </article>
            <article className='about_card'>
              <HiUsers className='about_icon' />
              <h5>Grades</h5>
              <small>8.39 CGPA</small>
            </article>
            <article className='about_card'>
              <MdLocationPin className='about_icon' />
              <h5>Loaction</h5>
              <small>Ahmedabad</small>
            </article>
          </div>

          <p>"Hello! I'm Khushal Nandaniya,  Junior Frontend Developer with hands-on experience in developing and customizing Shopify
 themes using HTML, CSS, and Liquid. Skilled in implementing responsive design and integrating
 third-party apps to enhance e-commerce functionality. Adept at collaborating with cross-functional
 teams to create user-friendly, dynamic websites. Proficient in performance optimization, SEO best
 practices, and using Shopify's admin panel for efficient store management. Strong problem-solving
 abilities with a focus on delivering high-quality code and improving user experience </p>

          <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
