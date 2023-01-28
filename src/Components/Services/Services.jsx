import React, { useContext } from 'react'
import './Services.css'
import Program from '../../images/Program.png'
import Design from '../../images/Design.png'
import Cards from '../Cards/Cards'
import resume from './Rohit_Prakash Resume.pdf'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'


export default function Services() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='services' id='Services'>
            <div className={`awesome-txt ${darkMode ? 'txt-dark' : 'txt-light'}`}>
                <span>My awesome</span>
                <span>Services</span>
                <span>
                    Front-end programs proficiency : HTML , CSS , JavaScript and ReactJs
                    <br />
                    Back-end programs proficiency : NodeJs and MongoDB
                    <br />
                    Framework and Library proficiency : Bootstrap , Tailwind, Mongoose and ExpressJs
                    <br />
                    Design Tools : Photoshop, Illustrator and Figma.
                </span>
                <a href={resume} download>
                    <button className={`button s-button ${darkMode ? 'button-dark' : 'button-light'}`}>Download CV</button>
                </a>
                <div className="blur s-blur1"></div>
            </div>

            <div className="s-cards">
                <motion.div
                    initial={{ x: -40 }}
                    whileInView={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                >
                    <Cards
                        emoji={Program}
                        heading='Programs'
                        details='Html, Css3, Javascript, React, Node'
                    />
                </motion.div>
                <motion.div
                    initial={{ x: 40 }}
                    whileInView={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                >
                    <Cards
                        emoji={Design}
                        heading='Design'
                        details='Photoshop, Figma, Illustrator'
                    />
                </motion.div>

            </div>

        </div>
    )
}
