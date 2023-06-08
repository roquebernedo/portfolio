import React from 'react'
import "./styles/About.scss"
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div className='main-about' id='about'>
        <div className='top'>
            <h2>About</h2>
        </div>
        <div className='about-b'>
            <div className='image'>
                <img className='travis' src={require('./images/travis2.png')} alt=''/>
            </div>

            <div className='resume'>
                <div className='text'>
                    A self-taught developer, I took a leap and trained in modern application development 
                    not too long ago.
                </div>
                <div className="text">
                    With a positive attitude and an eagerness to pursue ambitious ideas, I quickly absorbed 
                    new concepts and tackled challenges with confidence.
                </div>
                <div className="text">
                    When not coding, you might find me playing chess, discovering new music, or learning a new 
                    language.
                </div>
                <div className='butt'><Link to="https://drive.google.com/file/d/1c7WQ_bYOwvUxsFH8P9RKOnZi0dv8znu5/view?usp=share_link" target='_blank' className='resu'>Resume</Link></div>
            </div>
        </div>
    </div>
  )
}

export default About