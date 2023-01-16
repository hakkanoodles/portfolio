import React from 'react'
import './Navbar.css'


export default function Navbar() {
    return (
        <div className='nav-wrapper'>
            <div className="nav-left">
                <div className="nav-brand">Rohit</div>
                <span>Toggle btn</span>
            </div>
            <div className="nav-right">
                <div className="nav-list">
                    <ul>
                        <li>Home</li>
                        <li>About Me</li>
                        <li>Portfolio</li>
                    </ul>
                </div>
                <button className='button nav-button'>Contact </button>
            </div>
        </div>
    )
}
