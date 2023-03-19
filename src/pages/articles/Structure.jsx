import React from 'react'
// import { NavLink } from "react-router-dom";
import Article from '../../components/article/Article'
import Back from '../../components/article/Back'
import BR from '../../components/article/Br'
// import BR2 from '../../components/article/BrCode'

// Lenguaje Icon
import { SiJavascript } from 'react-icons/si'

// Article Image
// import XX from '../../assets/blog-assets/'
// import XX  from '../../assets/blog-assets/'

// Recommended Article
const ArticleData = [

]

const Structure = () => {
  return (
  <section className='article-section'>
    <div className="article-container">
      <Back/>
        
<h1></h1>
<time></time>

<BR /><BR />
<></>

<BR />
<></>

    </div>
    <aside className='recommended-articles'>
    {
      ArticleData.map(({image, title, date, url}) => {
        return (
          <Article key={url} image={image} title={title} date={date} url={url} />
        )
      })
    }
    </aside>
  </section>
  )
}

export default Structure