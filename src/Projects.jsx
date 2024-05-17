import React from 'react'
import "./styles/Projects.scss"
import Project from './components/Project'
import Tool from './components/Tool'

const firstTool = ['Javascript', 'React', 'CSS', 'Redux', 'Node/Express', 'MongoDB', 'Stripe']
const secondTool = ['Javascript', 'React', 'CSS']
const thirdTool = ['Oauth', 'React', 'JsonWebtoken', 'Node/Express', 'MongoDB']
const fourthTool = ['Javascript', 'React', 'CSS']

const Projects = ({ change }) => {
  return (
    <div className='main-projects' id='projects'>
        <div className='top-projects'>
            <h2 className='title-projects'>Projects</h2>
        </div>

        <Project
            title={'E-commerce'}
            tools={firstTool.map((tools, index) => <Tool key={index} tool={tools}/>)}
            introduction={
                change
                    ? "An eCommerce site attempting to fill the world's insatiable need for all things, videogames, consoles, laptops and much more. We closely followed and emulated the top online videogames store experiences to deliver a fun, original website."
                    : "Un sitio eCommerce que intenta satisfacer la insaciable necesidad del mundo por todo tipo de cosas: videojuegos, consolas, laptops y mucho más. Seguimos de cerca y emulamos las mejores experiencias de tiendas en línea de videojuegos para ofrecer un sitio web divertido y original."
            }
            render={
                change 
                    ? 'Note: This App will be hosted on Netlify and Render server. Try to choose what game you like and put it in the shopping cart.'
                    : 'Nota: Esta app estara alojada en Netlify y en el servidor de Render. Intenta elegir el juego que te guste y ponlo en el carrito de compras.'
            }
            webDirection={'https://ecommercerq.netlify.app/'}
            gitDirection={'https://github.com/roquebernedo/E-commerce'}
            titleImg={'ecommerce'}
            imgDirection={require('./images/toPortfolio.JPG')}
        />

        <Project 
            title={'Monogram Clone'}
            tools={secondTool.map((tools, index) => <Tool key={index} tool={tools}/>)}
            introduction={
                change
                    ? "Front-end of Monogram, Monogram is an innovative control surface designed to streamline editing and enhance interaction with creative software. With an intuitive and versatile design, Monogram is specifically crafted to facilitate photo editing, retouching, video editing, color correction, virtual production, audio/music production, and other creative workflows."
                    : "Front-end de Monogram, Monogram es una innovadora superficie de control diseñada para agilizar la edición y mejorar la interacción con software creativo. Con un diseño intuitivo y versátil, Monogram está específicamente diseñado para facilitar la edición de fotos, el retoque, la edición de video, la corrección de color, la producción virtual, la producción de audio/música y otros flujos de trabajo creativos."
            }
            render={
                change
                    ? "Note: This App will be hosted on Netlify. It's a clone of Monogram."
                    : "Nota: Esta App estara alojada en Netlify. Es un clon de Monogram."
            }
            webDirection={'https://monogram-clone.netlify.app/'}
            gitDirection={'https://github.com/roquebernedo/monogram'}
            titleImg={'ableton'}
            imgDirection={require('./images/monogram.JPG')}
        />

        <Project 
            title={'Ableton'}
            tools={fourthTool.map((tools, index) => <Tool key={index} tool={tools}/>)}
            introduction={
                change
                    ? 'Front-end of the Ableton, page music production software, especially their popular electronic music creation and editing software called "Ableton Live". This enables musicians, producers, and artists to professionally create, record, edit, and mix music.'
                    : "Front-end de Ableton, página de software de producción musical, especialmente su popular software de creación y edición de música electrónica llamado 'Ableton Live'. Esto permite a músicos, productores y artistas crear, grabar, editar y mezclar música de manera profesional."
            }
            render={
                change
                    ? "Note: This App will be hosted on Vercel server. It's a copy of Ableton, the Ableton Live software that is widely used in the music industry."
                    : "Nota: Esta App estara alojada en Vercel server. Es un clon de Ableton, el software en vivo de Ableton que es ampliamente usado en la industria musical."
            }
            webDirection={'https://apleton.vercel.app/'}
            gitDirection={'https://github.com/roquebernedo/Apleton'}
            titleImg={'ableton'}
            imgDirection={require('./images/Ableton.JPG')}
        />

        <Project 
            title={'Recipes App'}
            tools={thirdTool.map((tools, index) => <Tool key={index} tool={tools}/>)}
            introduction={
                change
                    ? "An interactive, useful and very valuable kitchen tool where you can save your recipes and share it to the world, you can share it with friends and family. This app can also be shared with social networks."
                    : "Una herramienta de cocina interactiva, útil y muy valiosa donde puedes guardar tus recetas y compartirlas con el mundo, con amigos y familiares. Esta aplicación también se puede compartir en las redes sociales."
            }
            render={
                change
                    ? "Note: This App is still under construction, you can also enter recipes of all kinds of nationalities, dare to share."
                    : "Nota: Esta App esta aun bajo construccion, tambien podras colocar recetas de todo tipo de nacionalidades, atrevete a compartir."
            }
            webDirection={'https://reciperq.netlify.app/'}
            gitDirection={'https://github.com/roquebernedo/deffullstack'}
            titleImg={'recipe'}
            imgDirection={require('./images/recipe.png')}
        />

    </div>
  )
}

export default Projects