import React from 'react'
import { Link } from 'react-router-dom'

const Project = ({ title, tools, introduction, render, webDirection, gitDirection, titleImg, imgDirection }) => {
    return(
        <div className='first-project2'>
            <div className='left'>
                <h3 className='title-left'>{title}</h3>
                <div className='info'>
                    <div className='tech'>
                        <div className='tech-1'>
                            {tools}
                        </div>
                    </div>
                    <div className='desc'>
                        <div className='desc-son'>
                            {introduction}
                        </div>
                    </div>
                    <div className='note'>
                        <div className='desc-son'>
                            {render}
                        </div>
                    </div>
                    <div className='buttons-projects'>
                        <div className='but'><Link to={webDirection} target='_blank' className='res'>See Live</Link></div>
                        <div className='but'><Link to={gitDirection} target='_blank' className='res res-1'>Source Code</Link></div>
                    </div>
                </div>   
            </div>

            <div className='rightEcomAble'>
                <img className={titleImg} src={imgDirection} alt="" />
            </div>
        </div>
    )
}

export default Project