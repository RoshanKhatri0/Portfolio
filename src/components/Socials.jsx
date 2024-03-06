import React from 'react';
import { themeContext } from '../Context'
import { useContext } from 'react'

const Socials = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
  return (
    <div className="socials">
      <ul>
        <li style={{ '--i': '#4267B2', '--j': '#6834cb' , boxShadow:darkMode? '0 10px 25px rgba(255, 255, 255, 0.6)':''}}>
          <span className="icon"><i className="fa fa-facebook"></i></span>
          <span className="titulo"><a href="https://www.facebook.com/Roshan.khatri4" target='blank'>facebook</a></span>
        </li>
      </ul>
      <ul>
        <li style={{ '--i': '#283048', '--j': '#859398' , boxShadow:darkMode? '0 10px 25px rgba(255, 255, 255, 0.6)':''}}>
          <span className="icon"><i className="fa fa-github"></i></span>
          <span className="titulo"><a href="https://github.com/RoshanKhatri0" target='blank'>Github</a></span>
        </li>
      </ul>
      <ul>
        <li style={{ '--i': '#FC466B', '--j': '#3F5EFB' , boxShadow:darkMode? '0 10px 25px rgba(255, 255, 255, 0.6)':''}}>
          <span className="icon"><i className="fa fa-instagram"></i></span>
          <span className="titulo"><a href="https://www.instagram.com/roshan_khatri4/" target='blank'>Instagram</a></span>
        </li>
      </ul>
      
      <ul>
        <li style={{ '--i': '#0077b5', '--j': '#5ec3d4' , boxShadow:darkMode? '0 10px 25px rgba(255, 255, 255, 0.6)':''}}>
          <span className="icon"><i className="fa fa-linkedin"></i></span>
          <span className="titulo"><a href="https://www.linkedin.com/in/roshan-khatri4/" target='blank'>linkedin</a></span>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
