import React, { useEffect, useState }  from 'react'
import { NavLink } from "react-router-dom";
import Article from '../components/article/Article'
import ArticleData from '../components/article/ArticleData'

// Componente de botón reutilizable
const FilterButton = ({ name, handleSetFilter, isActive }) => {
  return (
    <button className={`category-btn btn ${isActive ? "active" : ""}`} onClick={() => handleSetFilter(name)}>
      {name.toUpperCase()}
    </button>
  );
};

const orderedCategories = {
  Todos: ["Todos"],
  Desarrollo: ["JavaScript", "HTML", "Tailwind", "Herramientas"],
  Apple: ["MacBook"],
  Tecnología: ["Perifericos"]
};

const Blog = () => {
  const [search, setSearch] = useState("");
  const [field, setField] = useState("Desarrollo");
  const [category, setCategory] = useState("Todos");
  const [filteredArticle, setFilteredArticle] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);

  useEffect(() => {
    let filteredData = ArticleData;
    if (field !== "Todos") {
      filteredData = filteredData.filter(article => article.field === field);
    }
    if (category !== "Todos") {
      filteredData = filteredData.filter(article => article.category.includes(category));
    }
    setFilteredArticle(filteredData);
  }, [field, category]);

  useEffect(() => {
    if (field === "Todos") {
      setAvailableCategories([]);
    } else {
      const categoriesInField = new Set();
      ArticleData.forEach(article => {
        if (article.field === field) {
          article.category.forEach(cat => categoriesInField.add(cat));
        }
      });
      setAvailableCategories(Array.from(categoriesInField));
    }
    setCategory("Todos"); // Reiniciar la categoría al cambiar el campo
  }, [field]);

  return (
    <div className="blog-section">
      <div className="search-container">
        <input 
          className="search" 
          type="text" 
          placeholder="Buscar" 
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="field-buttons">
        <FilterButton name="Desarrollo" handleSetFilter={setField} isActive={field === "Desarrollo"} />
        <FilterButton name="Tecnología" handleSetFilter={setField} isActive={field === "Tecnología"} />
        <FilterButton name="Apple" handleSetFilter={setField} isActive={field === "Apple"} />
      </div>

      {field !== "Todos" && availableCategories.length > 0 && (
        <div className="category-buttons">
          <FilterButton name="Todos" handleSetFilter={setCategory} isActive={category === "Todos"} />
          {orderedCategories[field]?.map(cat => (
            <FilterButton key={cat} name={cat} handleSetFilter={setCategory} isActive={category === cat} />
          ))}
        </div>
      )}

      <div className="blog-container">
        {filteredArticle
          .filter(article => search === "" || article.title.toLowerCase().includes(search.toLowerCase()))
          .map(({ categoryimg, category, image, title, date, url, isMarkdown  }) => (
            <Article 
            key={url}
            categoryimg={categoryimg}
            category={category}
            image={image}
            title={title}
            date={date}
            url={url}
            isMarkdown={isMarkdown}
            />
          ))}
      </div>
    </div>
  );
};

export default Blog;