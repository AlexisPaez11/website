import React from 'react'
import CTA from './CTA'
import Socials from './Socials'

const Header = () => {
  return (
    <section className="header-section">
      <div className="header-container">
        <h1>Hi, I’m <span>Alexis Paez<span className="last-letter"></span></span></h1>
        <p>Front End Developer / UI Designer<span className="last-letter"></span></p>
        
        <Socials />

        <CTA />
      </div>
    </section>
  )
}

export default Header