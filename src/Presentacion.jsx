import React from 'react'
import "./styles/Presentacion.scss"
import { FaLinkedinIn } from "react-icons/fa"
import { BsGithub, BsYoutube } from "react-icons/bs"
import { IoIosDocument } from "react-icons/io"
import { Link } from 'react-router-dom';


const Presentacion = () => {

  
  function handleScroll(page) {
    const skillsSection = document.getElementById(page);
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
 
  return (
    <div className='main' id='presentacion'>
      <div className='top'>

        <Link to="https://www.linkedin.com/in/roquebernedo/" target='_blank' className='link'><FaLinkedinIn /></Link>
        <Link to="https://github.com/roquebernedo" className='link'><BsGithub /></Link>
        <Link className='link'><BsYoutube /></Link>
        <Link to="https://drive.google.com/file/d/1c7WQ_bYOwvUxsFH8P9RKOnZi0dv8znu5/view" target='_blank'  className='link'><IoIosDocument /></Link>
        
      </div>
      <div className='bottom'>
        <div className='box'>
          <h1>Hi, I'm <span>Roque</span><br/>I'm a full stack developer</h1>
          <p>
            <Link delay={1000} onClick={() => handleScroll('skills')} className='buttons'>Skills</Link>
            <Link smooth duration={1000} onClick={() => handleScroll("projects")} className='buttons'>Projects</Link>
            <Link onClick={() => handleScroll("about")} className='buttons'>About</Link>
            <Link onClick={() => handleScroll("contact")} className='buttons'>Contact</Link>
          </p>
        </div>
      </div>
      
    </div>
    
  )
}

export default Presentacion