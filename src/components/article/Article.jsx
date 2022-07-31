import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Article extends Component {
  render() {
    return (
      <>
      {
        <Link to={`/Blog/${this.props.url}`}>
          <article id={this.props.id} className='article'>
            <div className='category-container'>
              <>{this.props.categoryimg}</>
              <span>{this.props.category}</span>
            </div>
            <img src={this.props.image} alt={this.props.title} />
            <h3 className='article-title'>{this.props.title}</h3>
            <time dateTime={this.props.datetime}>{this.props.time}</time>
          </article>
        </Link>
      }
      </>
    )
  }
}