import React from 'react'
import "./header.css";
import CTA from '../../CTA';
import ME from "../../myimg.png";
import Social from '../../Social';

const Header = () => {
  return (
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Khushal Nandaniya</h1>
      <h5 className="text-light">FullStack Developer</h5>
      <CTA /> 
      <Social />
      <div className="me">
        <img src={ME} alt='me' />
      </div>

      <a href='#contact' className='scroll_down'>Scroll Down</a>

    </div>
  )
}

export default Header
