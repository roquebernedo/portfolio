import React from 'react'
import "./styles/Projects.scss"
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className='main-projects' id='projects'>
        <div className='top-projects'>
            <h2 className='title-projects'>Projects</h2>
        </div>
        <div className='first-project2'>
                <div className='left'>
                    <h3 className='title-left left-name'>E-commerce</h3>
                    <div className='info'>
                        <div className='tech'>
                            <div className='tech-1 tools-1'>
                                <div className='technologies-1 Ja'>JavaScript</div>
                                <div className='technologies-2'>React</div>
                                <div className='technologies-3 Css'>CSS</div>
                                <div className='technologies-4 Strap'>Redux</div>
                            </div>
                            <div className='tech-2'>
                                <div className='technologies-5 tool'>Node/Express</div>
                                <div className='technologies-6 tool'>MongoDB</div>
                                <div className='technologies-6 tool'>Stripe</div>
                            </div>
                        </div>
                        <div className='desc'>
                            <div className='desc-son'>
                            An eCommerce site attempting to fill the world's insatiable need for all things, 
                            clothing and much more. We closely followed and emulated the top online shopping experiences to 
                            deliver a fun, original website.
                            </div>
                        </div>
                        <div className='note'>
                            <div className='desc-son'>
                            Note: This App will be hosted on Netlify server. Try to choose what suits you best and put it 
                            in the shopping cart
                            </div>
                        </div>
                        <div className='buttons-projects'>
                            <div className='but'><Link to="https://ecommerce-rq.netlify.app/" className='res'>See Live</Link></div>
                            <div className='but'><Link to="https://github.com/roquebernedo/E-commerce" className='res res-1'>Source Code</Link></div>
                        </div>
                    </div>
                    
                </div>
                <div className='right'>
                    <img className='recipe' src={require('./images/ecommerce.JPG')} alt="" />
                </div>
            </div>

            <div className='first-project2'>
                <div className='left'>
                    <h3 className='title-left left-name'>Apleton</h3>
                    <div className='info'>
                        <div className='tech'>
                            <div className='tech-1 tools-1'>
                                <div className='technologies-1 Ja'>JavaScript</div>
                                <div className='technologies-2'>React</div>
                                <div className='technologies-3 Css'>CSS</div>
                            </div>
                        </div>
                        <div className='desc'>
                            <div className='desc-son'> 
                            Front-end of the Ableton, page music production software, especially their popular electronic
                            music creation and editing software called "Ableton Live". This enables musicians, producers, 
                            and artists to professionally create, record, edit, and mix music.
                            </div>
                        </div>
                        <div className='note'>
                            <div className='desc-son'>
                            Note: This App will be hosted on Vercel server. 
                            It's a copy of Ableton, the Ableton Live software that is widely used in the music industry.
                            </div>
                        </div>
                        <div className='buttons-projects'>
                            <div className='but'><Link to="https://apleton.vercel.app/" className='res'>See Live</Link></div>
                            <div className='but'><Link to="https://github.com/roquebernedo/Apleton" className='res res-1'>Source Code</Link></div>
                        </div>
                    </div>
                    
                </div>
                <div className='right'>
                    <img className='recipe' src={require('./images/Ableton.JPG')} alt="" />
                </div>
            </div>

            <div className='first-project'>
                <div className='left'>
                    <h3 className='title-left left-recipe'>Recipe App</h3>
                    <div className='info'>
                        <div className='tech'>
                            <div className='tech-1'>
                                <div className='technologies-1'>Oauth</div>
                                <div className='technologies-2'>React</div>
                                <div className='technologies-3'>JsonWebtoken</div>
                                <div className='technologies-4'>Mapbox</div>
                            </div>
                            <div className='tech-2'>
                                <div className='technologies-5'>Node/Express</div>
                                <div className='technologies-6'>MongoDB</div>
                            </div>
                        </div>
                        <div className='desc'>
                            <div className='desc-son'>
                            An interactive, useful and very valuable kitchen tool where you can save your recipes
                            and share it to the world, you can share it with friends and family. This app can also be shared 
                            with social networks.
                            </div>
                        </div>
                        <div className='note'>
                            <div className='desc-son'>
                            Note: This app is still under construction, you can also enter recipes of all kinds 
                            of nationalities, dare to share
                            </div>
                        </div>
                        <div className='buttons-projects'>
                            <div className='but'><Link to="https://reciperq.netlify.app/" className='res'>See Live</Link></div>
                            <div className='but'><Link to="https://github.com/roquebernedo/deffullstack" className='res res-1'>Source Code</Link></div>
                        </div>
                    </div>
                    
                </div>
                <div className='right'>
                    <img className='recipe' src={require('./images/recipe.png')} alt="" />
                </div>
            </div>  
        
    </div>
  )
}

export default Projects