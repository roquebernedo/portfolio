import React, { useState } from 'react'
import './styles/Skills.scss'
import ToolBox from './components/ToolBox'
import ToolsBurger from './components/ToolsBurger';

const Skills = ({ change }) => {
    
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
                        {change 
                            ? "Programming is like a digital burger, full of layers of code that combine to create a delicious experience for the user."
                            : "Programacion es como una hamburguesa digital, repleta de capas de codigo que combinan para crear una deliciosa experiencia para el usuario."
                        }
                        
                    </div>
                    <div className="text-select">
                        {change
                            ? "Select a layer on the burger to show stack skills."
                            : "Selecciona una capa en la hamburguesa para mostrar el stack de habilidades"
                        }
                    </div>
            </div>
            )}
            {showElement1 && (
            <ToolsBurger 
                titleTools={'Front End'} 
                mainChildren={[
                    <ToolBox key='java' toolClass={'jav'} imgIcon={require('./images/javascript.png')} toolName={'Javascript'}/>,
                    <ToolBox key='react' toolClass={'react'} imgIcon={require('./images/react.png')} toolName={'React'}/>,
                    <ToolBox key='redux' toolClass={'redux'} imgIcon={require('./images/redux.png')} toolName={'Redux'}/>
                ]}
                additionalChildren={[
                    <ToolBox key='html' toolClass={'html'} imgIcon={require('./images/html5.png')} toolName={'HTML5'}/>,
                    <ToolBox key='css' toolClass={'css'} imgIcon={require('./images/css.png')} toolName={'CSS3'}/>
                ]}
            />  
            )}

            {showElement2 && (
            <ToolsBurger 
                titleTools={'Tools'} 
                mainChildren={[
                    <ToolBox key='html' toolClass={'git'} imgIcon={require('./images/git.png')} toolName={'Git'}/>,
                    <ToolBox key='css' toolClass={'heroku'} imgIcon={require('./images/heroku.png')} toolName={'Heroku'}/>
                ]}
                additionalChildren={[
                    <ToolBox key='java' toolClass={'oauth'} imgIcon={require('./images/id.png')} toolName={'OAuth'}/>,
                    <ToolBox key='react' toolClass={'vercel'} imgIcon={require('./images/vercel.png')} toolName={'Vercel'}/>,
                    <ToolBox key='redux' toolClass={'netlify'} imgIcon={require('./images/netlify.jpg')} toolName={'Netlify'}/>
                ]}
            /> 
            )}

            {showElement3 && (
            <ToolsBurger 
                titleTools={'Back End'}
                mainChildren={[
                    <ToolBox key='express' toolClass={'express'} imgIcon={require('./images/express.png')} toolName={'Express'}/>,
                    <ToolBox key='node' toolClass={'node'} imgIcon={require('./images/node.png')} toolName={'Node'}/>,
                    <ToolBox key='mysql' toolClass={'mysql'} imgIcon={require('./images/mysql.png')} toolName={'MySql'}/>
                ]} 
                additionalChildren={[
                    <ToolBox key='restfulapi' toolClass={'restfulapi'} imgIcon={require('./images/restfulapi.png')} toolName={'RESTful API'}/>,
                    <ToolBox key='strapi' toolClass={'strapi'} imgIcon={require('./images/strapi.png')} toolName={'Strapi'}/>,
                    <ToolBox key='mongodb' toolClass={'mongodb'} imgIcon={require('./images/mongodb.png')} toolName={'MongoDB'}/>
                ]}
            />
            )}
            
        </div>
    </div>
  )
}

export default Skills