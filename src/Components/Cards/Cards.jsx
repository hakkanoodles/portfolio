import React, { useContext } from 'react'
import './Cards.css'
import { themeContext } from '../../Context'

export default function Cards({ emoji, heading, details }) {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
        <div className={`card ${darkMode? 'card-dark': 'card-light'}`}>
            <img src={emoji} alt="" />
            <span>{heading}</span>
            <span>{details}</span>
            <button className={`c-button ${darkMode? 'c-btn-dark': 'c-btn-light'} `}>Learn More</button>
        </div>
    )
}
