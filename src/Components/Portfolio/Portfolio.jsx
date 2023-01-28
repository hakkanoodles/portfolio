import React, { useContext } from 'react'
import './Portfolio.css'
import Ebuy from '../../images/Ebuy.png'
import Sketchpad from '../../images/sketchpad.png'
import MemoryCard from '../../images/memoryCard.png'
import Weather from '../../images/weatherApp.png'
import Calculator from '../../images/calculator.png'
import CVMaker from '../../images/cvMaker.png'
import { themeContext } from '../../Context'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Portfolio() {
  const projects = [
    {
      image: Ebuy,
      title: "Fake Shop",
      url: "https://hakkanoodles.github.io/ebuy"
    },
    {
      image: Sketchpad,
      title: "Sketchpad",
      url: "https://hakkanoodles.github.io/Etch-a-Sketch/"
    },
    {
      image: MemoryCard,
      title: "Memory Card",
      url: "https://hakkanoodles.github.io/memory-card/"
    },
    {
      image: Weather,
      title: "Weather App",
      url: "https://hakkanoodles.github.io/project_weather_app/"
    },
    {
      image: CVMaker,
      title: "CV Maker",
      url: "https://hakkanoodles.github.io/cv_project/"
    },
    {
      image: Calculator,
      title: "Calculator",
      url: "https://hakkanoodles.github.io/calculator/"
    },
  ]



  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className='portfolio' id='Portfolio'>
      <span>Recent Projects</span>
      <span style={darkMode ? { color: 'var(--nightPurple)' } : {}}>Portfolio</span>

      {/* Slider */}
      <Swiper
        modules={[Pagination]}
        className={`portfolio-slider ${darkMode ? 's-dark' : 's-light'}`}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {projects.map((project, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="projects">
                <a href={project.url}>
                  <img src={project.image} alt={project.title} />
                </a>
                <span>{project.title}</span>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
