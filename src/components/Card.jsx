import React from 'react'
import { themeContext } from '../Context'
import { useContext } from 'react'

const Card = ({emoji, heading , detail}) => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <>
        <div className="card">
            <img src={emoji} alt="card img" />
            <span>{heading}</span>
            <span style={{color:darkMode? 'white': ''}}>{detail}</span>
            <button className='c-button'>Learn more</button>
        </div>
    </>
  )
}

export default Card