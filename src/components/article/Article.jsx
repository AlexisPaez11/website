import React from "react";
import { Link, useLocation } from "react-router-dom";

const Article = ({ id, url, image, title, date, field, category }) => {
  const { pathname } = useLocation(); // Desestructuración de location

  return (
    <Link to={`/Blog/${url}`} state={{ prevPath: pathname, prevField: field, prevCategory: category }}>
      <article id={id} className="article">
        {image && <img src={image} alt={title} />}
        <div className="article-description">
          <h2 className="article-title">{title}</h2>
          <time>{date}</time>
        </div>
      </article>
    </Link>
  );
};

export default Article;