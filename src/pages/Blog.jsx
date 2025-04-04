import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import Article from '../components/article/Article';
import ArticleData from '../components/article/ArticleData';

// Componente reutilizable para los botones
const FilterButton = ({ name, handleSetFilter, isActive }) => (
  <button className={`category-btn btn ${isActive ? 'active' : ''}`} onClick={() => handleSetFilter(name)}>
    {name.toUpperCase()}
  </button>
);

const orderedCategories = {
  Desarrollo: ["JavaScript", "HTML", "Tailwind", "Herramientas"],
  Apple: ["MacBook"],
  Tecnología: ["Periféricos"]
};

const Blog = () => {
  const location = useLocation();
  
  const [search, setSearch] = useState('');
  const [field, setField] = useState(location.state?.prevField || 'Desarrollo');
  const [category, setCategory] = useState(location.state?.prevCategory || 'Todos');
  const [filteredArticle, setFilteredArticle] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);

  // Combinamos la lógica de filtrado de artículos y categorías
  useEffect(() => {
    // Filtrar artículos por campo y categoría
    const filteredData = ArticleData.filter(article => {
      const matchesField = field === "Todos" || article.field === field;
      const matchesCategory = category === "Todos" || article.category.includes(category);
      return matchesField && matchesCategory;
    });

    setFilteredArticle(filteredData);

    // Cargar categorías disponibles solo si el campo cambia
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

    // Restablecer la categoría si no es válida para el nuevo campo
    if (!availableCategories.includes(category) && category !== "Todos") {
      setCategory("Todos");
    }
  }, [field, category]);

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

      {/* Filtro de campos */}
      <div className="field-buttons">
        {["Desarrollo", "Tecnología", "Apple"].map(fieldName => (
          <FilterButton 
            key={fieldName}
            name={fieldName}
            handleSetFilter={setField}
            isActive={field === fieldName}
          />
        ))}
      </div>

      {/* Filtro de categorías */}
      {field !== "Todos" && availableCategories.length > 0 && (
        <div className="category-buttons">
          <FilterButton name="Todos" handleSetFilter={setCategory} isActive={category === "Todos"} />
          {orderedCategories[field]?.map(cat => (
            <FilterButton key={cat} name={cat} handleSetFilter={setCategory} isActive={category === cat} />
          ))}
        </div>
      )}

      {/* Artículos filtrados */}
      <div className="blog-container">
        {filteredArticle
          .filter(article => search === "" || article.title.toLowerCase().includes(search.toLowerCase()))
          .map(({ url, image, title, date, field, category }) => (
            <Article 
              key={url}
              field={field}
              category={category}
              image={image}
              title={title}
              date={date}
              url={url}
            />
          ))}
      </div>
    </div>
  );
};

export default Blog;