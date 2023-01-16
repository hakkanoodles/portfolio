import React from 'react'
import './Intro.css'
import Github from '../../images/github.png'
import LinkedIn from '../../images/linkedin.png'
import YellowBlob from '../../images/Vector2.png'
import BlueBlob from '../../images/Vector1.png'
import Boy from '../../images/boy.png'
import Thumbsup from '../../images/thumbup.png'
import Crown from '../../images/crown.png'              
import glassEmoji from '../../images/glassesimoji.png'              
import FloatingDiv from '../FloatingDiv/FloatingDiv'

export default function Intro() {
    return (
        <div className='i-wrapper'>
            <div className="i-left">
                <div className="i-name">
                    <span>Hi! I Am</span>
                    <span>Rohit Prakash</span>
                    <span>Aspiring Front-end developer, previously worked as Sr. Measuring Tech.</span>
                </div>
                <button className="button i-button">Hire Me</button>
                <div className="i-icon">
                    <img src={Github} alt="Github" />
                    <img src={LinkedIn} alt="Github" />
                </div>
            </div>
            <div className="i-right">
                <img src={BlueBlob} alt="Github" />
                <img src={YellowBlob} alt="Github" />
                <img src={Boy} alt="Github" />
                <img src={glassEmoji} alt="Github" />
                <div style={{top: '8%', left:'54%'}}>
                    <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
                </div>
                <div style={{top: '51%', left:'6%'}}>
                    <FloatingDiv image={Thumbsup} txt1="Aspiring" txt2="Web Developer" />
                </div>
                {/* blur div */}
                <div className="blur blur1"></div>
                <div className="blur blur2"></div>
            </div>
        </div>
    )
}
