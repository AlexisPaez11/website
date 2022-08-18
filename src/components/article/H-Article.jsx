import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import { NavLink } from 'react-router-dom'

import Article from './Article'

// Icons Arrow
// import { IoIosArrowBack } from 'react-icons/io'
// import { IoIosArrowForward } from 'react-icons/io'

// Icons
import { HiCode } from 'react-icons/hi' // CategoryDev
import { IoGitNetworkSharp } from 'react-icons/io5' // CategoryTech
import { HiViewGridAdd } from 'react-icons/hi' // SeeMore

// ArticleIMG
import DevToolsChrome from '../../assets/blog-assets/devtools.webp'
import HTML from '../../assets/blog-assets/html.webp'
import MacBookAirM2 from '../../assets/blog-assets/macbook-air-m2.webp'
import MejoresRatonesGaming2022 from '../../assets/blog-assets/mejores-ratones-gaming-2022.webp'
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
          ArticleData.map(({id, categoryimg, category, image, title, datetime, time, url}) => {
            return (
              <SwiperSlide>
                <Article key={id} categoryimg={categoryimg} category={category} image={image} title={title} datetime={datetime} time={time} url={url} />
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

const ArticleData = [
  {
    id: 1,
    categoryimg: <HiCode />,
    category: 'Desarrollo Web',
    image: DevToolsChrome,
    title: 'Novedades en DevTools (Chrome 103)',
    datetime: '2022-07-24',
    time:'Julio 24, 2022',
    url: 'DevToolsChrome103',
  },
  {
    id: 2,
    categoryimg: <HiCode />,
    category: 'Desarrollo Web',
    image: HTML,
    title: 'Etiquetas HTML esenciales que debes conocer',
    datetime: '2022-07-25',
    time:'Julio 25, 2022',
    url: 'EtiquetasHtmlEsenciales',
  },
  {
    id: 3,
    categoryimg: <IoGitNetworkSharp />,
    category: 'Tecnología',
    image: MacBookAirM2,
    title: 'MacBook Air M2 review',
    datetime: '2022-08-14',
    time:'Agosto 14, 2022',
    url: 'MacBookAirM2review',
  },
  {
    id: 4,
    categoryimg: <IoGitNetworkSharp />,
    category: 'Tecnología',
    image: MejoresRatonesGaming2022,
    title: 'Los mejores ratones gaming 2022',
    datetime: '2022-08-18',
    time:'Agosto 18, 2022',
    url: 'MejoresRatonesGaming2022',
    },
]

export default Articles