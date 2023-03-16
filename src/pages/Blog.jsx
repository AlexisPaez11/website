import React, { useEffect, useState }  from 'react'
import Article from '../components/article/Article'
import ArticleData from '../components/article/ArticleData'

// Button Filter
const FilterButton = ( {name, handleSetCategory, categoryActive } ) => {
  return (
    <>
    <button className={`category-btn btn ${ categoryActive ? 'active' : null }`} onClick={ () => handleSetCategory(name)}>{name.toUpperCase()}</button>
    </>
  )
}

const Blog = () => {
  // Search
  const [search, setSearch] = useState('')
  // Search
  
  // Filter
  const [ category, setCategory] = useState('JavaScript')
  const [ filteredArticle, setFilteredArticle ] = useState([])

  useEffect( () => {
    category === 'all' ? setFilteredArticle(ArticleData) : setFilteredArticle(ArticleData.filter( Article => Article.category === category))
  }, [category])
  // Filter

  return (
    <div className='blog-section'>

    <div className="search-container">
      <input className='search' type="text" placeholder='Buscar' onChange={(event) => {setSearch(event.target.value)}} />
    </div>

    <div className="category-buttons">
      <FilterButton name='JavaScript' handleSetCategory={setCategory} categoryActive={ category === 'JavaScript' ? true : false} />
      <FilterButton name='Tecnología' handleSetCategory={setCategory} categoryActive={ category === 'Tecnología' ? true : false} />
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

export default Blog