import React, { useRef, useState , useContext } from 'react'
import './ContactMe.css'
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';

export default function ContactMe() {
    const form = useRef();
    const [done, setdone] = useState(null)

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yh4jxdp', 'template_a6yxd8q', form.current, 'FDzodofMp0bUZKk6P')
            .then((result) => {
                setdone('Message sent, Thanks for contacting');
                setTimeout(()=>{
                    setdone(null)
                },2000)
            }, (error) => {
                setdone(`Error in sending message` );
                setTimeout(()=>{
                    setdone(null)
                },2000)
            });
    };
    return (
        <div className='contact'>
            <div className="c-left">
                <span>Get in Touch</span>
                <span style={darkMode ? {color: 'var(--nightPurple)'}:{}}>Contact Me </span>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className='user' id="user-name" placeholder='Name' required />
                    <input type="email" name="user_email" className='user' id="user-email" placeholder='Email' required/>
                    <textarea name="message" className='user user-message' id="message" placeholder='Message' required />
                    <input type="submit" className={`button c-button ${darkMode?'button-dark':'button-light'}`} placeholder='Submit' />
                </form>
                <div className="message">{done}</div>
                <div className="blur c-blur"></div>
            </div>
        </div>
    )
}
