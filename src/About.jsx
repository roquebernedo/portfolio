import React from 'react'
import "./styles/About.scss"
import { Link } from 'react-router-dom'


const About = ({ change }) => {
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
                    {change 
                        ? "A self-taught developer, i always felt curious about programming so i started studying web development on my own."
                        : "Desarrollador autodidacta, siempre me he sentido curioso por la programación, así que comencé a estudiar desarrollo web por mi cuenta."
                    }
                </div>
                <div className="text">
                    {change 
                        ? "Since then, I have dedicated my time and effort to improving my skills and knowledge by working on projects that combine creative and effective solutions."
                        : "Desde entonces, he dedicado mi tiempo y esfuerzo a mejorar mis habilidades y conocimientos trabajando en proyectos que combinan soluciones creativas y efectivas."
                    }
                </div>
                <div className="text">
                    {change 
                        ? "When i'm not coding, you might find me playing chess, discovering new music, or learning a new language."
                        : "Cuando no estoy programando, puedes encontrarme jugando ajedrez, descubriendo nueva música o aprendiendo un nuevo idioma."
                    }
                </div>
                <div className='butt'><Link to="https://drive.google.com/file/d/1W5MdmecfB5nSttV_fPZRMB__1FPc85mG/view" target='_blank' className='resu'>Resume</Link></div>
            </div>
        </div>
    </div>
  )
}

export default About