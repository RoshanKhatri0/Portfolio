import React, { useContext } from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import portfolio1 from'../images/14.png'
import portfolio2 from'../images/10.png'
import portfolio3 from'../images/5.png'
import portfolio4 from'../images/2.png'
import portfolio5 from'../images/9.png'
import { themeContext } from '../Context'

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
                    <a href="https://bloggiee.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img src={portfolio1} alt="projects" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://github.com/RoshanKhatri0/beautician-frontend" target="_blank" rel="noopener noreferrer">
                        <img src={portfolio2} alt="projects" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="https://github.com/RoshanKhatri0/ecommerce" target="_blank" rel="noopener noreferrer">
                        <img src={portfolio3} alt="projects" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="https://github.com/RoshanKhatri0/todo-app" target="_blank" rel="noopener noreferrer">
                    <img src={portfolio5} alt="projects" />
                </a>
                </SwiperSlide>
                <SwiperSlide>
                <a href="https://www.bajrayoginiacademy.com.np/" target="_blank" rel="noopener noreferrer">
                    <img src={portfolio4} alt="projects" />
                </a>
                </SwiperSlide>
            </Swiper>
        </div>
    </>
  )
}

export default Portfolio