import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import portfolio1 from'../images/9.png'
import portfolio2 from'../images/10.png'
import portfolio3 from'../images/5.png'
import portfolio4 from'../images/13.png'
import { themeContext } from '../Context'
import { useContext } from 'react'

const Portfolio = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
  return (
    <>
        <div className="portfolio" id='Portfolio'>
            <span style={{color:darkMode? 'white': ''}}>My Recent Projects</span>
            <span>Portfolio</span>

            <Swiper
            spaceBetween={30}
            slidesPerView={3}
            grabCursor={true}
            className='portfolio-slider'
            >
                <SwiperSlide>
                    <img src={portfolio1} alt="projects" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={portfolio2} alt="projects" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={portfolio3} alt="projects" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={portfolio4} alt="projects" />
                </SwiperSlide>
            </Swiper>
        </div>
    </>
  )
}

export default Portfolio