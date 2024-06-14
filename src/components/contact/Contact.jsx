import "./contact.css"
import {AiOutlineMail} from "react-icons/ai";
import {BsInstagram} from "react-icons/bs";
import {BsWhatsapp} from "react-icons/bs";
import emailjs from "emailjs-com";
import React, { useRef } from 'react';

const Contact = () => {

  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oihmayd', 'template_eeqnun8', form.current, 'fk9HEfVBSyknbFSLa')
   
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='conatiner contact_container'>
        <div className='contact_options'>
        <article className='contact_option'>
        <AiOutlineMail className='contact_icon'/>
          <h4>Email</h4>
          <h5>nandaniyakhushal@gmail.com</h5>
          <a href="mailto:nandaniyakhushal@gmail.com" target={'_blank'}>Send a Message</a>
        </article>
        <article className='contact_option'>
        <BsInstagram className='contact_icon'/>
          <h4>Instagram</h4>
          <h5>khushal_8645</h5>
          <a href='https://instagram.com/khushal_8645?igshid=ZDc4ODBmNjlmNQ==' target={'_blank'}>Send a Message</a>
        </article>
        <article className='contact_option'>
        <BsWhatsapp className='contact_icon'/>
          <h4>Whatsapp</h4>
          <h5>+91 9328537327</h5>
          <a href='https://wa.me/+919328537327' target={'_blank'}>Send a Message</a>
        </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input name='name' placeholder='your full name' type='text' required />
          <input type='email' placeholder='your email address' required />
          <textarea name='message' placeholder='your message' rows="7" required />
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
