import React, { useState } from 'react'
import './styles/Skills.scss'

const Skills = () => {
    
    const [showElement1, setShowElement1] = useState(false);
    const [showElement2, setShowElement2] = useState(false);
    const [showElement3, setShowElement3] = useState(false);
    const [imageSrc, setImageSrc] = useState(require('./images/burger_blank.png'));
    // eslint-disable-next-line no-unused-vars
    const [_, setBurger] = useState(false)
    
    const handleMouseEnter = (element) => {
      if (element === 1) {
        setShowElement1(true);
        setImageSrc(require('./images/burger_topbun.png'))
      }else if (element === 2){ 
        setShowElement2(true);
        setImageSrc(require('./images/burger_middle.png'))
      }else if (element === 3){ 
        setShowElement3(true);
        setImageSrc(require('./images/burger_bottombun.png'))
      };
    }
    const handleMouseLeave = () => {
      setShowElement1(false);
      setShowElement2(false);
      setShowElement3(false);
      setImageSrc(require('./images/burger_blank.png'))

    };

  return (
    <div className='main-skills' id='skills'>
        <div className='top-skills'>
            <h2>Skills</h2>
        </div>
        <div className='bottom-skills'>
            <div className='image'>
                <img className='burger' src={imageSrc} alt='' onMouseEnter={() => setBurger(true)} onMouseLeave={() => setBurger(false)} />
                <div className='elements'>
                    <div className='pre-ele1' onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
                    {showElement1 === true && (
                        <div className='element1'></div>   
                    )}
                    </div>

                    <div className='pre-ele2' onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
                    {showElement2 === true && (
                        <div className='element2'></div>   
                    )}
                    </div>

                    <div className='pre-ele3' onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>
                    {showElement3 === true && (
                        <div className='element3'></div>   
                    )}
                    </div>
                </div>
            </div>
             
            {!showElement1 && !showElement2 && !showElement3 && (
            <div className="resume-burger">
                    <div className='text'>
                        "Programming is like a digital burger, full of layers of code that combine to create a delicious 
                        experience for the user." 
                        
                    </div>
                    <div className="text-select">
                        Select a layer on the burger to show stack skills.
                    </div>
            </div>
            )}
            {showElement1 && (<div className="tools-burger">
                <div className='end'>
                    <div className='text'>
                        Front End
                    </div>
                </div>
                <div className='top-fav'>
                    <div className="text-select-all">
                        <div className='box-java common-box'>
                            <div className='div-icon'><img className='jav' src={(require('./images/javascript.png'))} alt=''/></div>
                            <div className='name-java common-name'>JavaScript</div>
                        </div>
                        <div className='box-react common-box'>
                            <div className='div-icon'><img className='react' src={(require('./images/react.png'))} alt=''/></div>
                                <div className='name-react common-name'>React</div>
                            </div>    
                        <div className='box-redux common-box'>
                            <div className='div-icon'><img className='redux' src={(require('./images/redux.png'))} alt=''/></div>
                            <div className='name-redux common-name'>Redux</div>
                        </div>     
                    </div>
                    <div className="text-select-all">
                        <div className='box-html common-box'>
                            <div className='div-icon'><img className='html' src={(require('./images/html5.png'))} alt=''/></div>
                            <div className='name-html common-name'>HTML5</div>
                        </div>
                        <div className='box-css common-box'>
                            <div className='div-icon'><img className='css' src={(require('./images/css.png'))} alt=''/></div>
                            <div className='name-css common-name'>CSS3</div>
                        </div>
                    </div>
                </div>
                    
            </div>
            )}

            

            {showElement2 && (<div className="tools-burger">
                <div className='end'>
                    <div className='text'>
                        Tools
                    </div>
                </div>
                <div className='top-fav'>
                    <div className="text-select-all">
                        <div className='box-git common-box'>
                            <div className='div-icon'><img className='git' src={(require('./images/git.png'))} alt=''/></div>
                            <div className='name-git common-name'>Git</div>
                        </div>
                        <div className='box-heroku common-box'>
                            <div className='div-icon'><img className='heroku' src={(require('./images/heroku.png'))} alt=''/></div>
                            <div className='name-heroku common-name'>Heroku</div>
                        </div>    
                          
                    </div>
                    <div className="text-select-all">
                        <div className='box-oauth common-box'>
                            <div className='div-icon'><img className='oauth' src={(require('./images/id.png'))} alt=''/></div>
                            <div className='name-oauth common-name'>OAuth</div>
                        </div>
                        <div className='box-vercel common-box'>
                            <div className='div-icon'><img className='vercel' src={(require('./images/vercel.png'))} alt=''/></div>
                            <div className='name-vercel common-name'>Vercel</div>
                        </div>
                        <div className='box-netlify common-box'>
                            <div className='div-icon'><img className='netlify' src={(require('./images/netlify.jpg'))} alt=''/></div>
                            <div className='name-netlify common-name'>Netlify</div>
                        </div>
                    </div>
                </div>
                    
            </div>
            )}

            

            {showElement3 && (<div className="tools-burger tool-back">
                <div className='end'>
                    <div className='text'>
                        Back End
                    </div>
                </div>
                <div className='top-fav'>
                    <div className="text-select-all">
                        <div className='box-express common-box'>
                            <div className='div-icon'><img className='express back' src={(require('./images/express.png'))} alt=''/></div>
                            <div className='name-express common-name'>Express</div>
                        </div>
                        <div className='box-node common-box'>
                            <div className='div-icon'><img className='node back' src={(require('./images/node.png'))} alt=''/></div>
                            <div className='name-node common-name'>Node</div>
                        </div>    
                        <div className='box-mysql common-box'>
                            <div className='div-icon'><img className='mysql back' src={(require('./images/mysql.png'))} alt=''/></div>
                            <div className='name-mysql common-name'>MySql</div>
                        </div>     
                    </div>
                    <div className="text-select-all">
                        <div className='box-restfulapi common-box'>
                            <div className='div-icon'><img className='restfulapi back' src={(require('./images/restfulapi.png'))} alt=''/></div>
                            <div className='name-restfulapi common-name'>RESTful API</div>
                        </div>
                        <div className='box-strapi common-box'>
                            <div className='div-icon'><img className='strapi back' src={(require('./images/strapi.png'))} alt=''/></div>
                            <div className='name-strapi common-name'>Strapi</div>
                        </div>
                        <div className='box-mongodb common-box'>
                            <div className='div-icon'><img className='mongodb back' src={(require('./images/mongodb.png'))} alt=''/></div>
                            <div className='name-mongodb common-name'>MongoDB</div>
                        </div> 
                    </div>
                </div>
                    
            </div>
            )}
            
        </div>
    </div>
  )
}

export default Skills