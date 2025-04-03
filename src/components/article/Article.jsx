import React, { Component } from "react";
import { Link } from 'react-router-dom'

const Article = ({ id, url, image, title, date }) => {
  return (
    <Link to={`/Blog/${url}`}>
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