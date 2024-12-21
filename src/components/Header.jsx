import React from 'react'
import CTA from './CTA'
import Socials from './Socials'

const Header = () => {
  return (
    <section className="header-section">
      <div className="header-container">
        <h1>Alexis Paez<span><span className="last-letter"></span></span></h1>
        <h2>Front End Developer / UI Designer<span className="last-letter"></span></h2>

        <CTA />
      </div>
    </section>
  )
}

export default Header