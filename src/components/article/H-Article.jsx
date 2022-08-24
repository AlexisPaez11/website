import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { NavLink } from 'react-router-dom'
import ArticleData from '../../components/article/ArticleData'

import Article from './Article'

// Icons Arrow
// import { IoIosArrowBack } from 'react-icons/io'
// import { IoIosArrowForward } from 'react-icons/io'

// Icons
// import { HiCode } from 'react-icons/hi' // CategoryDev
// import { IoGitNetworkSharp } from 'react-icons/io5' // CategoryTech
import { HiViewGridAdd } from 'react-icons/hi' // SeeMore

// ArticleIMG
// import DevToolsChrome from '../../assets/blog-assets/devtools.webp'
// import HTML from '../../assets/blog-assets/html.webp'
// import MacBookAirM2 from '../../assets/blog-assets/macbook-air-m2.webp'
// import MejoresRatonesGaming2022 from '../../assets/blog-assets/mejores-ratones-gaming-2022.webp'
// import CSS from '../../assets/blog-assets/css.webp'
// import JavaScript from '../../assets/blog-assets/javascript.webp'
// import React from '../../assets/blog-assets/react.webp'


const Articles = () => {
  return (
    <section className='h-articles'>
      <div className="projects-top">
        <h2>BLOG</h2>
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
          ArticleData.slice(0,6).map(({categoryimg, category, image, title, date, url}) => {
            return (
              <SwiperSlide key={url}>
                <Article categoryimg={categoryimg} category={category} image={image} title={title} date={date} url={url} />
              </SwiperSlide>
            )
          })
        }
              <SwiperSlide>
                <NavLink to="/Blog" className='see-more-btn'><HiViewGridAdd /></NavLink>
              </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Articles