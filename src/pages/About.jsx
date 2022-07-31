import React from 'react'
import CTA from '../components/header/CTA'
import AboutMe from '../components/about/AboutMe.jsx'
import Profile from '../assets/alexispaez.png'
import Contact from '../components/contact/Contact'

const About = () => {
  return (
    <>
      <div className='frontpage'>
      </div>
      
      <div className='about-container'>
        <section className='aboutInfo-section'>
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
        </section>

        <hr />
        <AboutMe />

        <hr />
        <Contact />

        {/* Experience */}

        {/* Services */}
        
        {/* Workspace */}
      </div>
    </>
  )
}

export default About