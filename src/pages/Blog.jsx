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
  // const [search, setSearch] = useState('')

  // filteredArticle.filter((title) => {
  //   if(search === ""){
  //     return title;
  //   }
  //   else if(title.title.toLowerCase().includes(search.toLowerCase())){
  //     return title;
  //   }
  // }).map
  // Search
  
  // Filter
  const [ category, setCategory] = useState('Desarrollo Web')
  const [ filteredArticle, setFilteredArticle ] = useState([])

  useEffect( () => {
    category === 'all' ? setFilteredArticle(ArticleData) : setFilteredArticle(ArticleData.filter( Article => Article.category === category))
  }, [category])
  // Filter

  return (
    <section className='blog-section'>

    {/* <div className="search-container">
      <input className='search' type="text" placeholder='Buscar' onChange={(event) => {setSearch(event.target.value)}} />
    </div> */}

    <div className="category-buttons">
      <FilterButton name='Desarrollo Web' handleSetCategory={setCategory} categoryActive={ category === 'Desarrollo Web' ? true : false} />
      <FilterButton name='Tecnología' handleSetCategory={setCategory} categoryActive={ category === 'Tecnología' ? true : false} />
    </div>
    
    <div className='blog-container'>
      {
        filteredArticle.map(({id, categoryimg, category, image, title, datetime, time, url}) => {
          return (
            <Article key={id} categoryimg={categoryimg} category={category} image={image} title={title} datetime={datetime} time={time} url={url} />
            )
        })
      }
    </div>
  </section>
  )
}

export default Blog