import React, { useEffect, useState }  from 'react'
import { NavLink } from "react-router-dom";
import Article from '../components/article/Article'
import ArticleDataDeveloper from '../components/article/ArticleDataDeveloper'

// Button Filter
const FilterButton = ( {name, handleSetCategory, categoryActive } ) => {
  return (
    <>
    <button className={`category-btn btn ${ categoryActive ? 'active' : null }`} onClick={ () => handleSetCategory(name)}>{name.toUpperCase()}</button>
    </>
  )
}

const BlogDeveloper = () => {
  // Search
  const [search, setSearch] = useState('')
  // Search
  
  // Filter
  const [ category, setCategory] = useState('Todos')
  const [ filteredArticle, setFilteredArticle ] = useState([])

  useEffect( () => {
    category === 'Todos' ? setFilteredArticle(ArticleDataDeveloper) : setFilteredArticle(ArticleDataDeveloper.filter( Article => Article.category === category))
  }, [category]
  )

  return (
    <div className='blog-section'>

    <div className="search-container">
      <input className='search' type="text" placeholder='Buscar' onChange={(event) => {setSearch(event.target.value)}} />
    </div>

    <div className="blog-buttons">
      <NavLink to="/Blog"><button className="blog-btn btn active">DESARROLLO</button></NavLink>
      <NavLink to="/Blog/Tech"><button className="blog-btn btn">TECNOLOGÍA</button></NavLink>
      <NavLink to="/Blog/Apple"><button className="blog-btn btn">APPLE</button></NavLink>
    </div>

    <div className="category-buttons">
      <FilterButton name='Todos' handleSetCategory={setCategory} categoryActive={ category === 'Todos' ? true : false} />
      <FilterButton name='HTML' handleSetCategory={setCategory} categoryActive={ category === 'HTML' ? true : false} />
      {/* <FilterButton name='CSS' handleSetCategory={setCategory} categoryActive={ category === 'CSS' ? true : false} /> */}
      <FilterButton name='Tailwind' handleSetCategory={setCategory} categoryActive={ category === 'Tailwind' ? true : false} />
      <FilterButton name='JavaScript' handleSetCategory={setCategory} categoryActive={ category === 'JavaScript' ? true : false} />
      <FilterButton name='Herramientas' handleSetCategory={setCategory} categoryActive={ category === 'Herramientas' ? true : false} />
    </div>
    
    <div className='blog-container'>
      {
        filteredArticle.filter((title) => {
          if(search === ""){
            return title;
          }
          else if(title.title.toLowerCase().includes(search.toLowerCase())){
            return title;
          }
        }).map(({categoryimg, category, image, title, date, url}) => {
        return (
          <Article key={url} categoryimg={categoryimg} category={category} image={image} title={title} date={date} url={url} />
          )
        })
      }
    </div>
  </div>
  )
}

export default BlogDeveloper