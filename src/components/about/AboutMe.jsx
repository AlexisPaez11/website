import React from 'react'
import Skills from './Skills'

const AboutMe = () => {
  return (
    <section className='aboutMe-section'>
        <div className='aboutMe-container'>
          <h2>SOBRE MÍ</h2>
          <p>Soy un desarrollador Front End autodidacta y apasionado por la tecnología. Tengo una gran pasión por crear sitios web e interfaces de usuario intuitivas y dinámicas. También tengo un blog donde comparto contenido sobre desarrollo web y tecnología. Interesado en poder realizar proyectos freelance interesantes, como formar parte de un equipo de trabajo con gente positiva.</p>

          <Skills />

          {/* <div className="data-container">
          </div> */}
        </div>
    </section>
  )
}

export default AboutMe