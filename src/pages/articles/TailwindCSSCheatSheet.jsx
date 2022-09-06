import React from 'react'
import { NavLink } from "react-router-dom";
import Article from '../../components/article/Article'

import { IoIosArrowBack } from 'react-icons/io' // Back
import { HiCode } from 'react-icons/hi' // CategoryDev

import HTML from '../../assets/blog-assets/html.webp'
import MejoresLibrosDesarrolladores from '../../assets/blog-assets/libros-desarrolladores/libros-desarrolladores.webp'

const ArticleData = [
  {
    categoryimg: <HiCode />,
    category: 'Desarrollo Web',
    image: MejoresLibrosDesarrolladores,
    title: 'Mejores libros para desarrolladores',
    date:'Septiembre 06, 2022',
    url: 'MejoresLibrosDesarrolladores',
  },
  {
    categoryimg: <HiCode />,
    category: 'Desarrollo Web',
    image: HTML,
    title: 'Etiquetas HTML esenciales que debes conocer',
    date:'Julio 25, 2022',
    url: 'EtiquetasHtmlEsenciales',
  },
]

const TailwindCSSCheatSheet = () => {
  return (
    <section className='article-section'>
      <div className="article-container">
        <NavLink to="/Blog" className='btn'><IoIosArrowBack /></NavLink>

        <h1>Tailwind CSS Cheat Sheet</h1>
        <time dateTime='2022-09-06'>Septiembre 06, 2022</time>

        <br/><br/><br/>
        <br/><br/><br/>
        <p></p>

        <br/><br/><br/>
        <h2></h2>
        <p></p>
      </div>
      <aside className='recommended-articles'>
        {
          ArticleData.map(({categoryimg, category, image, title, datetime, time, url}) => {
            return (
              <Article key={url} categoryimg={categoryimg} category={category} image={image} title={title} datetime={datetime} time={time} url={url} />
            )
          })
        }
      </aside>
    </section>
  )
}

export default TailwindCSSCheatSheet

