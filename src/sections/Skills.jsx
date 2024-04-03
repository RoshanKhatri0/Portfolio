import React from 'react'
import reactlogo from '../images/react.png'
import mongodb from '../images/mongodb.png'
import express from '../images/express.png'
import node from '../images/node.png'
import mern from '../images/mern.png'
import { themeContext } from '../Context'
import { useContext } from 'react'
import {motion} from 'framer-motion'

const Skills = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (
        <>
            <div className="skills" id='Skills'>
                <div className="s-left">
                    <span style={{color:darkMode? 'white': ''}}>Explore</span>
                    <span>My skills</span>
                    <span style={{color:darkMode? 'white': ''}}>Discover the skills I've acquired as a developer, spanning from frontend to backend.
                        <br />
                        Let's explore how these capabilities can enhance your project!
                    </span>
                    

                    <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
                </div>
                <div className="sk-right">
                    <motion.div
                    initial={{rotate:45}}
                    whileInView={{rotate:0}}  
                    viewport={{margin:'-40px'}}
                    transition={{duration:3.5 , type:'spring'}}  
                    className="sk-mainCircle">
                    <div className="sk-secCircle">
                        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                            <img src={reactlogo} alt="logoos" />
                        </a>
                    </div>
                    <div className="sk-secCircle">
                        <a href="https://www.mongodb.com/docs/" target="_blank" rel="noopener noreferrer">
                            <img src={mongodb} alt="logoos" />
                        </a>
                   </div>
                    <div className="sk-secCircle">
                        <a href="https://en.wikipedia.org/wiki/MEAN_(solution_stack)" target="_blank" rel="noopener noreferrer">
                            <img src={mern} alt="logoos" />
                        </a>
                        
                    </div>
                    <div className="sk-secCircle">
                        <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer">
                            <img src={node} alt="logoos" />
                        </a>
                        
                    </div>
                    <div className="sk-secCircle">
                        <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                            <img src={express} alt="logoos" />
                        </a>
                        
                    </div>
                    </motion.div>
                    <div className="sk-backCircle blueCircle"></div>
                    <div className="sk-backCircle yellowCircle"></div>
                </div>
            </div>
        </>
    )
}

export default Skills