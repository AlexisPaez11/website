import React from 'react'
import CTA from '../components/CTA'
import AboutMe from '../components/about/AboutMe'
import Profile from '../assets/alexispaez.png'
import Contact from '../components/Contact'

const About = () => {
  return (
    <div className='about'>
      <div className='frontpage'>
      </div>
      
      <div className='about-container'>
        <div className='aboutInfo'>
          <div className="profile">
            <img src={Profile} alt="" />
          </div>
          <div className="aboutInfo-container">
            <div className="biography">
              <h1>Alexis Paez</h1>
              <p>Desarrollador Front End / Diseñador UI</p>
            </div>
            <CTA />
          </div>
        </div>

        <hr />
        <AboutMe />

        <hr />
        <Contact />

        {/* Experience */}

        {/* Services */}
        
        {/* Workspace */}
      </div>
    </div>
  )
}

export default About