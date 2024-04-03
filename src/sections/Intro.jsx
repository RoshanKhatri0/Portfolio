import React from 'react'
import giphy from '../images/giphy.gif'
import mernlogo from '../images/mern.png'
import FloatingDiv from '../components/FloatingDiv'
import { ReactTyped } from 'react-typed'
import { themeContext } from '../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'
import Socials from '../components/Socials'

const Intro = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    const transition = {duration:2 , type: 'spring'}
    return (
        <>
            <div className="intro" id='Intro'>
                <div className="i-left">
                    <div className="i-name">
                        <span style={{color:darkMode? 'white': ''}}>Hi! I Am</span>
                        <span className='typing'>
                            <ReactTyped className='ty-text' strings={["Roshan Khatri","Robo"]} typeSpeed={120} backSpeed={120} loop />
                        </span>
                        <span style={{color:darkMode? 'white': ''}}>Full Stack MERN Developer experienced in web design and development, proficient in API integration, backend development, and database management.</span>
                    </div>
                    
                    <a href="mailto:roshankhatri9515@gmail.com">
                        <div className="i-button">
                            <button className='raise'>Hire Me</button>
                        </div>
                    </a>
                    <Socials/>

                </div>
                <div className="i-right">
                    <img src={giphy} alt="giif" />
                    <motion.div
                    initial={{ top:'-4%',left:'74%'}}
                    whileInView={{left:'68%'}}
                    transition={transition}
                    style={{ top: '-4%', left: '76%' }}
                    className='i-floaters'
                    >
                        <FloatingDiv image={mernlogo} text1="MERN" text2="Developer" />
                    </motion.div>
                    <motion.div
                    initial={{ left:'9rem',top:'18rem'}}
                    whileInView={{left:'0rem'}}
                    transition={transition}
                    style={{ top: '18rem', left: '2.5rem' }}
                    className='i-floaters'
                    >
                        <FloatingDiv image={mernlogo} text1="Currently" text2="learning" />
                    </motion.div>
                    {/* blur div */}
                    <div className="blur" style={{ background: "#C1F5FF" }}></div>
                    <div className="blur" style={{ background: "rgb(238 210 255)", top: '11rem', width: '21rem', height: '11rem', left: '-6rem' }}></div>

                </div>
            </div>
        </>
    )
}

export default Intro