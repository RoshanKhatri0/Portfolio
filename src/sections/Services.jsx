import React from 'react'
import Card from '../components/Card'
import uiux from '../images/uiux.png'
import figma from '../images/figma.png'
import developer from '../images/developer.png'
import Resume from '../images/Roshan-Khatri-cv.pdf'
import { themeContext } from '../Context'
import { useContext } from 'react'
import {motion} from'framer-motion'

const Services = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    const transition = {duration:1.5 , type: 'spring'}
  return (
    <>
        <div className="services" id='Services'>
            <div className="s-left">
                <span style={{color:darkMode? 'white': ''}}>My</span>
                <span>Services</span>
                <span style={{color:darkMode? 'white': ''}}>Enthusiastic learner in web development
                    <br />
                    offering services in website design, API integration, and backend development. Let's embark on this journey together!
                </span>
                <a href={Resume} download>
                    <button className='raise s-button'>Download CV</button>
                </a>
                
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
            <div className="s-cards">
                <motion.div
                initial={{ left:'29rem'}}
                whileInView={{left:'24rem'}}
                transition={transition}
                style={{left:'24rem'}}>
                    <Card 
                    emoji = {figma} heading = 'Design' detail = 'Specialize in creating designs that are both visually stunning and highly functional'
                    />
                </motion.div>
                <motion.div
                initial={{ left: "-2rem", top: "12rem"}}
                whileInView={{left: '6rem'}}
                transition={transition}
                style={{top:'12rem',left:'6rem'}}>
                    <Card
                    emoji = {developer} heading = 'Developer' detail = 'FrontEnd (Html, Css, JavaScript, React), Backend(Nodejs, Expressjs, MongoDb)'
                    />
                </motion.div>
                <motion.div
                initial={{ left:'29rem'}}
                whileInView={{left:'22rem'}}
                transition={transition}
                style={{left:'22rem',top:'19rem'}}>
                    <Card
                    emoji = {uiux} heading = 'UI/UX' detail = 'Dedicated to creating seamless digital experiences'
                    />
                </motion.div>
                <div className="blur s-blur2" style={{background:"var(--purple"}}></div>
            </div>
        </div>
    </>
  )
}

export default Services