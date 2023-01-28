import React, { useContext } from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { themeContext } from '../../Context'
import { Link } from 'react-scroll'

export default function Navbar() {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
        <div className='nav-wrapper' id='Navbar' >
            <div className="nav-left">
                <div className="nav-brand">Rohit</div>
                <div className="toggle-btn">
                    <Toggle />
                </div>
            </div>
            <div className="nav-right">
                <div className={`nav-list ${darkMode ? 'nav-l-dark' : 'nav-l-light'}`}>
                    <ul>
                        <Link spy={true} to='Intro' smooth offset={-180} activeClass='activeClass' >
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth offset={-70} >
                            <li>Services</li>
                        </Link>
                        <Link spy={true} to="Portfolio" smooth offset={-70}>
                            <li>Portfolio</li>
                        </Link>
                    </ul>
                </div>

                <div className={`button nav-button ${darkMode ? 'button-dark' : 'button-light'}`}>
                    <Link spy={true} to='Contact' smooth offset={-70}>
                        Contact
                    </Link>
                </div>

            </div>
        </div>
    )
}
