import React from 'react'
import './Services.css'
import Glasses from '../../images/glasses.png'
import Heart from '../../images/heartemoji.png'
import Cards from '../Cards/Cards'
import resume from './Rohit_Prakash Resume.pdf'

export default function Services() {
    return (
        <div className='services'>
            <div className="awesome-txt">
                <span>My awesome</span>
                <span>Services</span>
                <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem, fugit explicabo
                    <br />
                    magni provident unde doloribus dignissimos itaque quia neque tempore.
                </span>
                <a href={resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1"></div>
            </div>

            <div className="s-cards">
                <div style={{ left: '30rem' }}>
                    <Cards
                        emoji={Glasses}
                        heading='Programs'
                        details='Html, Css3, Javascript, React, Node'
                    />
                </div>
                <div style={{ left: '5rem', top: '13rem' }}>
                    <Cards
                        emoji={Heart}
                        heading='Design'
                        details='Photoshop, Figma, Illustrator'
                    />
                </div>

            </div>

        </div>
    )
}
