import React from 'react'
import './Cards.css'
export default function Cards({ emoji, heading, details }) {
    return (
        <div className='card'>
            <img src={emoji} alt="" />
            <span>{heading}</span>
            <span>{details}</span>
            <button className='card-button'>Learn More</button>
        </div>
    )
}
