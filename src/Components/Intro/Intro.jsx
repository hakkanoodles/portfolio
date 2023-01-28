import React, { useContext,useState } from 'react'
import './Intro.css'
import Github from '@iconscout/react-unicons/icons/uil-github'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import Thumbsup from '../../images/thumbup.png'
import Crown from '../../images/crown.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { motion} from 'framer-motion'
import CoolAnimation from '../CoolAnimation/CoolAnimation'


export default function Intro() {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;

    const [rotate, setRotate] = useState(false)

    return (
        <div className='i-wrapper' id='Intro'>
            <div className="i-left">
                <div className={`i-name ${darkMode ? 'i-n-dark' : 'i-n-light'} `}>
                    <span>Hi! I Am</span>
                    <span>Rohit Prakash</span>
                    <span>Aspiring Front-end developer, previously worked as Sr. Measuring Tech.</span>
                </div>
                {/* <button className={`button 
                ${darkMode ? 'button-dark' : 'button-light'}
                i-button`}>Hire Me</button> */}
                <div className="i-icon">
                    <a href="https://github.com/hakkanoodles">
                        <Github color={darkMode ? '#A904BF' : '#F2B705'} />
                    </a>
                    <a href="https://www.linkedin.com/in/rohit-prakash-7a07491a0">
                        <LinkedIn color={darkMode ? '#A904BF' : '#F2B705'} />
                    </a>
                </div>
            </div>
            <div className={`i-right ${darkMode ? 'i-r-dark' : 'i-r-light'}`}>
                <motion.div 
                initial={{scale: 0}}
                whileInView={{scale:2 }}
                transition={{duration: 1}}
                animate={{rotate: rotate? 270: 180 }}
                onClick ={()=>{
                    setRotate(!rotate)
                }}
                className="animation"
                >
                    <CoolAnimation />
                </motion.div>

                <motion.div
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.1 }}
                    className='floating-div'
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
                    initial={{ x: 0, opacity: 0 }}
                    whileInView={{ x: '150%', opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.1 }}
                    className='floating-div'
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
