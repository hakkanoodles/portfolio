import React from 'react'
import './Portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Sketchpad from '../../images/sketchpad.png'
import MemoryCard from '../../images/memoryCard.png'
import Weather from '../../images/weatherApp.png'
import Calculator from '../../images/calculator.png'
import CVMaker from '../../images/cvMaker.png'

export default function Portfolio() {
  return (
    <div className='portfolio'>
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* Slider */}
      <Swiper className='portfolio-slider' spaceBetween={5} slidesPerView={4} grabCursor={true}>
        <SwiperSlide>
          <img src={MemoryCard} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Sketchpad} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Weather} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Calculator} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={CVMaker} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
