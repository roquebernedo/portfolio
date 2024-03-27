import React from 'react'
import "./styles/Projects.scss"
import Project from './components/Project'
import Tool from './components/Tool'

const firstTool = ['Javascript', 'React', 'CSS', 'Redux', 'Node/Express', 'MongoDB', 'Stripe']
const first = [
    {
        name: 'Javascript',
        color: '#dace27'
    },
    {
        name: 'React',
        color: '#17969b'
    },
    {
        name: 'CSS',
        color: '#1641b9'
    },
    {
        name: 'Redux',
        color: '#6740af'
    },
    {
        name: 'Node/Express',
        color: '#0a4208'
    },
    {
        name: 'MongoDB',
        color: '#20831d'
    },
    {
        name: 'Stripe',
        color: '#8749d8'
    },
]
const secondTool = ['Javascript', 'React', 'CSS']
const thirdTool = ['Oauth', 'React', 'JsonWebtoken', 'Node/Express', 'MongoDB']
const fourthTool = ['Javascript', 'React', 'CSS']

const Projects = () => {
  return (
    <div className='main-projects' id='projects'>
        <div className='top-projects'>
            <h2 className='title-projects'>Projects</h2>
        </div>

        <Project
            title={'E-commerce'}
            tools={first.map((tools, index) => <Tool key={index} tool={tools.name} color={tools.color}/>)}
            introduction={"An eCommerce site attempting to fill the world's insatiable need for all things, videogames, consoles, laptops and much more. We closely followed and emulated the top online videogames store experiences to deliver a fun, original website."}
            render={'Note: This App will be hosted on Netlify and Render server. Try to choose what game you like and put it in the shopping cart'}
            webDirection={'https://ecommerce-rq.netlify.app/'}
            gitDirection={'https://github.com/roquebernedo/E-commerce'}
            titleImg={'ecommerce'}
            imgDirection={require('./images/toPortfolio.JPG')}
        />

        <Project 
            title={'Monogram Clone'}
            tools={secondTool.map((tools, index) => <Tool key={index} tool={tools}/>)}
            introduction={"Front-end of Monogram, Monogram is an innovative control surface designed to streamline editing and enhance interaction with creative software. With an intuitive and versatile design, Monogram is specifically crafted to facilitate photo editing, retouching, video editing, color correction, virtual production, audio/music production, and other creative workflows."}
            render={"Note: This App will be hosted on Netlify. It's a clone of Monogram."}
            webDirection={'https://monogram-clone.netlify.app/'}
            gitDirection={'https://github.com/roquebernedo/monogram'}
            titleImg={'ableton'}
            imgDirection={require('./images/monogram.JPG')}
        />

        <Project 
            title={'Ableton'}
            tools={fourthTool.map((tools, index) => <Tool key={index} tool={tools}/>)}
            introduction={'Front-end of the Ableton, page music production software, especially their popular electronic music creation and editing software called "Ableton Live". This enables musicians, producers, and artists to professionally create, record, edit, and mix music.'}
            render={"Note: This App will be hosted on Vercel server. It's a copy of Ableton, the Ableton Live software that is widely used in the music industry."}
            webDirection={'https://apleton.vercel.app/'}
            gitDirection={'https://github.com/roquebernedo/Apleton'}
            titleImg={'ableton'}
            imgDirection={require('./images/Ableton.JPG')}
        />

        <Project 
            title={'Recipes App'}
            tools={thirdTool.map((tools, index) => <Tool key={index} tool={tools}/>)}
            introduction={"An interactive, useful and very valuable kitchen tool where you can save your recipes and share it to the world, you can share it with friends and family. This app can also be shared with social networks."}
            render={"Note: This app is still under construction, you can also enter recipes of all kinds of nationalities, dare to share."}
            webDirection={'https://reciperq.netlify.app/'}
            gitDirection={'https://github.com/roquebernedo/deffullstack'}
            titleImg={'recipe'}
            imgDirection={require('./images/recipe.png')}
        />

    </div>
  )
}

export default Projects