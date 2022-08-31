import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { NavLink } from 'react-router-dom'
import Project from './Project'
import ProjectData from './ProjectData'
import { HiViewGridAdd } from 'react-icons/hi'

const Projects = () => {
  return (
    <section className='h-projects'>
      <div className="projects-top">
        <h2>PROYECTOS</h2>
      </div>

      <Swiper slidesPerView={'auto'} navigation={true} modules={[Navigation]} className="swiper">
          {
            ProjectData.slice(0,6).map(({id, image, title, technologies, github, demo}) => {
              return (
                <SwiperSlide>
                  <Project key={id} image={image} title={title} technologies={technologies} github={github} demo={demo} />
                </SwiperSlide>
              )
            })
          }
                <SwiperSlide>
                  <NavLink to="/Projects" className='see-more-btn'><HiViewGridAdd /></NavLink>
                </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Projects