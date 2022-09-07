import React from 'react'
import { NavLink } from "react-router-dom";
import Article from '../../components/article/Article'

import { IoIosArrowBack } from 'react-icons/io' // Back
import { HiCode } from 'react-icons/hi' // CategoryDev
import { IoGitNetworkSharp } from 'react-icons/io5' // CategoryTech

const ArticleData = [

]

const Structure = () => {
  return (
    <section className='article-section'>
      <div className="article-container">
        <NavLink to="/Blog" className='btn'><IoIosArrowBack /></NavLink>

        <h1>Title</h1>
        <time dateTime='2022-07-25'>Date</time>

        <br/><br/><br/>
        <br/><br/><br/>
        <p></p>

        <br/><br/><br/>
        <h2> </h2>
        <p></p>
      </div>
      <aside className='recommended-articles'>
        {
          ArticleData.map(({categoryimg, category, image, title, date, url}) => {
            return (
              <Article key={url} categoryimg={categoryimg} category={category} image={image} title={title} date={date} url={url} />
            )
          })
        }
      </aside>
    </section>
  )
}

export default Structure