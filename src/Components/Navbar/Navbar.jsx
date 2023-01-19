import React, { useContext } from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { themeContext } from '../../Context'

export default function Navbar() {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
        <div className='nav-wrapper' >
            <div className="nav-left">
                <div className="nav-brand">Rohit</div>
                <Toggle />
            </div>
            <div className="nav-right">
                <div className={`nav-list ${darkMode ? 'nav-l-dark' : 'nav-l-light'}`}>
                    <ul>
                        <li>Home</li>
                        <li>About Me</li>
                        <li>Portfolio</li>
                    </ul>
                </div>
                <button className={`
                button nav-button
                ${darkMode ? 'button-dark' : 'button-light'}
                `}> Contact </button>
            </div>
        </div>
    )
}
