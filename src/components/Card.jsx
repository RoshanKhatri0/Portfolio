import React from 'react'
import { themeContext } from '../Context'
import { useContext } from 'react'

const Card = ({emoji, heading , detail, link}) => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <>
        <div className="card">
            <img src={emoji} alt="card img" />
            <span>{heading}</span>
            <span style={{color:darkMode? 'white': ''}}>{detail}</span>
            <a href={`${link}`} target="_blank" rel="noopener noreferrer">
              <button className='c-button'>Learn more</button>       
            </a>
        </div>
    </>
  )
}

export default Card