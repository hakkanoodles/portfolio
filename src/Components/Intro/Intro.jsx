import React, { useContext } from 'react'
import './Intro.css'
import Github from '@iconscout/react-unicons/icons/uil-github'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import YellowBlob from '../../images/Vector2.png'
import BlueBlob from '../../images/Vector1.png'
import Boy from '../../images/boy.png'
import Thumbsup from '../../images/thumbup.png'
import Crown from '../../images/crown.png'
import glassEmoji from '../../images/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'


export default function Intro() {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;

    return (
        <div className='i-wrapper'>
            <div className="i-left">
                <div className={`i-name ${darkMode ? 'i-n-dark' : 'i-n-light'} `}>
                    <span>Hi! I Am</span>
                    <span>Rohit Prakash</span>
                    <span>Aspiring Front-end developer, previously worked as Sr. Measuring Tech.</span>
                </div>
                <button className={`button 
                ${darkMode ? 'button-dark' : 'button-light'}
                i-button`}>Hire Me</button>
                <div className="i-icon">
                    <Github color={darkMode ? '#A904BF' : '#F2B705'} />
                    <LinkedIn color={darkMode ? '#A904BF' : '#F2B705'} />
                </div>
            </div>
            <div className={`i-right ${darkMode ? 'i-r-dark' : 'i-r-light'}`}>
                <img src={YellowBlob} alt="Github" />
                <img src={BlueBlob} alt="Github" />
                <img src={YellowBlob} alt="Github" />
                <img src={Boy} alt="Github" />
                <motion.img
                    initial={{ opacity: 0, x: -50, scale: 0.4 }}

                    whileInView={{ opacity: 1, x: 10, scale: 0.5, }}
                    transition={{ duration: 1, type: 'spring' }}
                    src={glassEmoji} alt="Github"
                />
                <motion.div
                    style={{ top: '8%', left: '54%' }}
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <FloatingDiv
                        image={Crown}
                        color1={darkMode ? 'white' : 'black'}
                        color2={darkMode ? 'black' : 'white'}
                        txt1="Web"
                        txt2="Developer"
                    />
                </motion.div>
                <motion.div
                    style={{ top: '51%', left: '6%' }}
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <FloatingDiv
                        image={Thumbsup}
                        color1={darkMode ? 'white' : 'black'}
                        color2={darkMode ? 'black' : 'white'}
                        txt1="Aspiring"
                        txt2="Web Developer"
                    />
                </motion.div>
                {/* blur div */}
                <div className="blur blur1"></div>
                <div className="blur blur2"></div>
            </div>
        </div>
    )
}
