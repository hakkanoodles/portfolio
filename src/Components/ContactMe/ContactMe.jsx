import React, { useRef, useState } from 'react'
import './ContactMe.css'
import emailjs from '@emailjs/browser';

export default function ContactMe() {
    const form = useRef();
    const [done, setdone] = useState(null)

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
                <span>Contact Me </span>
            </div>

            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className='user' id="user-name" placeholder='Name' />
                    <input type="email" name="user_email" className='user' id="user-email" placeholder='Email' />
                    <textarea name="message" className='user user-message' id="message" placeholder='Message' />
                    <input type="submit" className='button c-button' placeholder='Submit' />
                </form>
                <div className="message">{done}</div>
                <div className="blur c-blur"></div>
            </div>
        </div>
    )
}
