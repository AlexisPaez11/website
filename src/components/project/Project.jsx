import React, { Component } from 'react'

export default class Project extends Component {
  render() {
    return (
      <article id={this.props.id} className='project'>
        <img src={this.props.image} alt={this.props.title} />
        <h3 className='project-title'>{this.props.title}</h3>
        <div className="project-technologies">{this.props.technologies}</div>
        <div className="project-buttons">
          <a href={this.props.github} className='btn btn-variant' target='_blank' rel='noreferrer'>REPOSITORIO</a>
          <a href={this.props.demo} className='btn btn-primary' target='_blank' rel='noreferrer'>VISITAR SITIO</a>
        </div>
      </article>
    )
  }
}