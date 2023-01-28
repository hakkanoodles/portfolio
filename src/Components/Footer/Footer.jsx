import React, { useContext } from 'react'
import './Footer.css'
import waveYellow from '../../images/wave.png'
import wavePurple from '../../images/wave2.png'
import Gmail from '@iconscout/react-unicons/icons/uil-mailbox'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import { themeContext } from '../../Context'

export default function Footer() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className='footer'>
      {darkMode ?
        <img src={wavePurple} alt=""  />:
        <img src={waveYellow} alt=""  /> 
      }

      <div className="f-content">
        <span>You can contact me here</span>
        <div className={`f-icons ${darkMode?'f-dark': 'f-light'} `}>
          <a href="https://github.com/hakkanoodles">
            <Github color='white' size='3rem' />
          </a>
          <a href="https://rohit.arick@gmail.com">
            <Gmail color='white' size='3rem' />
          </a>
          <a href="https://instagram.com/rohitprakashkashyap?igshid=OGQ2MjdiOTE=">
            <Insta color='white' size='3rem' />
          </a>
        </div>
      </div>
    </div>
  )
}
