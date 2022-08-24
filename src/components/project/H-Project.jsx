import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { NavLink } from 'react-router-dom'
import Project from './Project'
// import { IoIosArrowBack } from 'react-icons/io'
// import { IoIosArrowForward } from 'react-icons/io'
import { HiViewGridAdd } from 'react-icons/hi'
import { SiHtml5, SiCss3, SiJavascript, SiReact } from 'react-icons/si'
import YoutubeClone from '../../assets/projects-assets/youtube-clone.webp'
import TwitterClone from '../../assets/projects-assets/twitter-clone.webp'
import CarRental from '../../assets/projects-assets/car-rental.webp'

const Projects = () => {
  return (
    <section className='h-projects'>
      <div className="projects-top">
        <h2>PROYECTOS</h2>
        {/* <div className='arrow-buttons'>
          <div className="arrow-btn swiper-button-prev-projects">
              <IoIosArrowBack />
          </div>
          <div className="arrow-btn swiper-button-next-projects">
              <IoIosArrowForward />
          </div>
        </div> */}
      </div>

      <Swiper slidesPerView={'auto'} navigation={true} modules={[Navigation]} className="swiper">
          {
            ProjectData.slice(0,3).map(({id, image, title, technologies, github, demo}) => {
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

const ProjectData = [
  {
    image: YoutubeClone,
    title: 'Youtube Clone',
    technologies: [<SiHtml5 />, <SiCss3 />, <SiJavascript />],
    github: 'https://github.com/AlexisPaez11/Youtube',
    demo: 'https://alexispaez11.github.io/Youtube/',
  },
  {
    image: TwitterClone,
    title: 'Twitter Clone',
    technologies: [<SiHtml5 />, <SiCss3 />],
    github: 'https://github.com/AlexisPaez11/Twitter',
    demo: 'https://alexispaez11.github.io/Twitter/',
  },
  {
    image: CarRental,
    title: 'Car Rental',
    technologies: [<SiReact />, <SiCss3 />],
    github: 'https://github.com/AlexisPaez11/Car-Rental',
    demo: 'https://optimus-alexispaez11.vercel.app/',
  },
]

export default Projects