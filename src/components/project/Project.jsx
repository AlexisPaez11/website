import React, { Component } from 'react'

export default class Project extends Component {
  render() {
    return (
      <article className='project'>
        <img src={this.props.image} alt={this.props.title} />
        <div className="project-description">
          <h3 className='project-title'>{this.props.title}</h3>
          <div className="project-technologies">{this.props.technologies}</div>
          <div className="project-buttons">
            <a href={this.props.github} className='btn btn-variant' target='_blank' rel='noreferrer'>REPOSITORIO</a>
            <a href={this.props.demo} className='btn btn-primary' target='_blank' rel='noreferrer'>VISITAR SITIO</a>
          </div>
        </div>
      </article>
    )
  }
}