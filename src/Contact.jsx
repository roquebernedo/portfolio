import React from 'react'
import "./styles/Contact.scss"
import { Link } from 'react-router-dom'
import { FaLinkedinIn } from "react-icons/fa"
import { BsGithub, BsYoutube } from "react-icons/bs"
import { IoIosDocument } from "react-icons/io"
import { BiChevronUp } from "react-icons/bi"

const Contact = () => {

  function handleScroll() {
    const skillsSection = document.getElementById('presentacion');
    if (skillsSection) {
        skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='main-contact' id='contact'>
        <div className='contact'>
            <div className='title'>
                <h2>contact</h2>
            </div>
            <div className='form'>
                <form action="">
                    <input type="text" placeholder='Name' className='name inputset'/>
                    <input type="text" placeholder='Email' className='email inputset'/>
                    <textarea className='message inputset' required name="message" placeholder='Message' rows="6"></textarea>
                </form>
            </div>
            <div className='button'>
                <Link className='send'>Send</Link>
            </div>
        </div>
        <div className='footer'>
            <div className='footer-bottom'>
                <div className='button-des'>
                    <Link onClick={() => handleScroll('presentacion')} className='as'><BiChevronUp/></Link>
                </div>
                <p className='icons'>
                    <Link to="https://www.linkedin.com/in/roquebernedo/" target='_blank' className='as'><FaLinkedinIn /></Link>
                    <Link to="https://github.com/roquebernedo/roquebernedo/tree/main" className='as'><BsGithub /></Link>
                    <Link className='as'><BsYoutube /></Link>
                    <Link to="https://drive.google.com/file/d/1h_zNXJyjg6GxGxVwRo2GfTnctilv6smv/view?usp=sharing" target='_blank' className='as'><IoIosDocument /></Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Contact