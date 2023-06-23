import React from 'react'
import "./footer.css"
import { BsInstagram } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Khushal Nandaniya</a>

      <ul className='alllink'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#skill'>Skill</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer_social">
        <a href="https://instagram.com/khushal_8645?igshid=ZDc4ODBmNjlmNQ=="><BsInstagram /></a>
        <a href="https://www.linkedin.com/in/khushal-nandaniya-21b631247"><AiFillLinkedin /></a>
      </div>

      <div className="footer_copyright">
      <small>&copy; Khushal Nandaniya. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
