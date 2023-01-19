import React, { useContext } from 'react'
import './Toggle.css'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from '../../Context'

export default function Toggle() {
const theme = useContext(themeContext);
const darkMode = theme.state.darkMode;

const handleToggle = ()=> {
  theme.dispatch({type: 'toggle'})
}

  return (
    <div className={`toggle ${darkMode? 'toggle-dark': 'toggle-light'}`} onClick={handleToggle} >
        <div className={`t-btn ${darkMode? 't-btn-dark': 't-btn-light'}`}  style={darkMode? {right:'2px' }: {left: '2px'}}></div>
        <Sun />
        <Moon />
    </div>
  )
}
