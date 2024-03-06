import React from 'react'
import Toggle from './Toggle'
import { Link } from 'react-scroll'
import { themeContext } from '../Context'
import { useContext } from 'react'

const Navbar = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (
        <>
            <div className="n-wrapper" id='Navbar'>
                <div className="n-left">
                <Link spy={true} to='NavBar' smooth={true} activeClass='activeClass'>
                    <div className="n-name" style={{color:darkMode? 'black': ''}}>Robo</div>
                    </Link>
                    <Toggle />
                </div>
                <div className="n-right">
                    <div className="n-list">
                        <ul>
                            <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                                <li style={{color:darkMode? 'black': ''}}>Home</li>
                            </Link>
                            <Link spy={true} to='Services' smooth={true} activeClass='activeClass'>
                                <li style={{color:darkMode? 'black': ''}}>Services</li>
                            </Link>
                            <Link spy={true} to='Skills' smooth={true} activeClass='activeClass'>
                                <li style={{color:darkMode? 'black': ''}}>Skills</li>
                            </Link>
                            <Link spy={true} to='Portfolio' smooth={true} activeClass='activeClass'>
                                <li style={{color:darkMode? 'black': ''}}>Portfolio</li>
                            </Link>
                        </ul>
                    </div>
                    <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
                    <button className='raise n-button'>Contact</button>
                    </Link>
                </div>
            </div>
            <div style={{ height: '10vh' }}></div>
        </>
    )
}

export default Navbar