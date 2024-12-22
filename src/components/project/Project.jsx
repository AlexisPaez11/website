import React, { Component } from 'react'
import { HiOutlineCode } from "react-icons/hi"; // Code
import { FiArrowUpRight } from "react-icons/fi"; // Web

export default class Project extends Component {
  render() {
    return (
      <article className='project'>
        <img src={this.props.image} alt={this.props.title} />
        <div className="project-container">
          <div className="project-description">
            <h2 className='project-title'>{this.props.title}</h2>
            <div className="project-technologies">{this.props.technologies}</div>
          </div>
          <div className="project-buttons">
            <a href={this.props.github} className='btn btn-variant' target='_blank' rel='noreferrer'>
              <HiOutlineCode/></a>
            <a href={this.props.demo} className='btn btn-primary' target='_blank' rel='noreferrer'>
              <FiArrowUpRight/></a>
          </div>
        </div>
      </article>
    )
  }
}