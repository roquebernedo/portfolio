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
        <div className='top'>
            <h2>Skills</h2>
        </div>
        <div className='bottom'>
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
            <div className="resume">
                
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
                    <div className="text-select">
                        <div className='box-java'>
                            <img className='jav' src={(require('./images/javascript.png'))} alt=''/>
                            <div className='name-java'>JavaScript</div>
                        </div>
                        <div className='box-react'>
                            <img className='react' src={(require('./images/react.png'))} alt=''/>
                            <div className='name-react'>React</div>
                        </div>    
                        <div className='box-redux'>
                            <img className='redux' src={(require('./images/redux.png'))} alt=''/>
                            <div className='name-redux'>Redux</div>
                        </div>     
                    </div>
                    <div className="text-select2">
                        <div className='box-html'>
                            <img className='html' src={(require('./images/html5.png'))} alt=''/>
                            <div className='name-html'>HTML5</div>
                        </div>
                        <div className='box-css'>
                            <img className='css' src={(require('./images/css.png'))} alt=''/>
                            <div className='name-css'>CSS3</div>
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
                    <div className="text-select">
                        <div className='box-git'>
                            <img className='git' src={(require('./images/git.png'))} alt=''/>
                            <div className='name-git'>Git</div>
                        </div>
                        <div className='box-heroku'>
                            <img className='heroku' src={(require('./images/heroku.png'))} alt=''/>
                            <div className='name-heroku'>Heroku</div>
                        </div>    
                          
                    </div>
                    <div className="text-select2">
                        <div className='box-html'>
                            <img className='html' src={(require('./images/id.png'))} alt=''/>
                            <div className='name-html'>OAuth</div>
                        </div>
                        <div className='box-css'>
                            <img className='css' src={(require('./images/vercel.png'))} alt=''/>
                            <div className='name-css'>Vercel</div>
                        </div>
                    </div>
                </div>
                    
            </div>
            )}

            

            {showElement3 && (<div className="tools-burger">
                <div className='end'>
                    <div className='text'>
                        Back End
                    </div>
                </div>
                <div className='top-fav'>
                    <div className="text-select">
                        <div className='box-express'>
                            <img className='express back' src={(require('./images/express.png'))} alt=''/>
                            <div className='name-express'>Express</div>
                        </div>
                        <div className='box-node'>
                            <img className='node back' src={(require('./images/node.png'))} alt=''/>
                            <div className='name-node'>Node</div>
                        </div>    
                        <div className='box-mysql'>
                            <img className='mysql back' src={(require('./images/mysql.png'))} alt=''/>
                            <div className='name-mysql'>MySql</div>
                        </div>
                        <div className='box-mongodb'>
                            <img className='mongodb back' src={(require('./images/mongodb.png'))} alt=''/>
                            <div className='name-mongodb'>MongoDB</div>
                        </div>      
                    </div>
                    <div className="text-select2">
                        <div className='box-restfulapi'>
                            <img className='restfulapi back' src={(require('./images/restfulapi.png'))} alt=''/>
                            <div className='name-restfulapi'>RESTful API</div>
                        </div>
                        <div className='box-strapi'>
                            <img className='strapi back' src={(require('./images/strapi.png'))} alt=''/>
                            <div className='name-strapi'>Strapi</div>
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