import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Article extends Component {
  render() {
    return (
      <>
      {
        <Link to={`/Blog/${this.props.url}`}>
          <article id={this.props.id} className='article'>
            <img src={this.props.image} alt={this.props.title} />
            <div className='article-description'>
              <h2 className='article-title'>{this.props.title}</h2>
              {/* <time>{this.props.date}</time> */}
            </div>
          </article>
        </Link>
      }
      </>
    )
  }
}