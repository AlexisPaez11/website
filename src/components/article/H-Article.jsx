import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { NavLink } from 'react-router-dom'
import Article from './Article'
import ArticleData from '../../components/article/ArticleData'
import { HiViewGridAdd } from 'react-icons/hi' // SeeMore

const Articles = () => {
  return (
    <section className='h-articles'>
      <div className="projects-top">
        <h2>BLOG</h2>
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