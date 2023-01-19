import React from 'react'
import './FloatingDiv.css'

export default function FloatingDiv({ image, txt1, txt2 ,color1,color2 }) {
    return (
        <div className='floatingDiv' style={{color:`${color1}`, backgroundColor:`${color2}`}}>
            <img src={image} alt="" />
            <span>{txt1} <br />{txt2}</span>
        </div>
    )
}
